// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useEffect, useState } from "react";
import { Alert, Platform } from 'react-native'
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import queryString from "qs";
import { SpacerS, SpacerM, SpacerL } from "../../styles/Spacing";

import OpenWebBrowserButton from "../../components/OpenWebBrowserButton";
import { VStack, Select, CheckIcon, HStack, Text } from "native-base";
import { useAppContext } from "../../context/appContext";
import Spinner from "../../components/Spinner"
import { supabase } from '../../lib/supabase'
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';



export default function Payment({ navigation, route }) {
  const {
    paramCrownAmount,
    paramCategoryName,
    paramCrownBalance,
    paramsCategoryID,
    paramsRouteName,
    // paramUserNumID,
  } = route.params;

  const {
    userId,
    tokens,
    // error: tokenError,
    loadingInitial: tokensLoadingInitial,
    getTokensAndSubscribe,
    // currentUserNumInfo: userNumInfo,
    // numInfoError,
    // numInfoLoadingInitial,
  }: any = useAppContext();


  const [crownAmount, setCrownAmount] = useState(paramCrownAmount);
  const [message, setMessage] = useState("")
  const [gamificationIndicators, setGamificationIndicators] = useState(tokens ? tokens : [{
    heart_balance: 0,
    crown_balance: 0
  }]);
  const [url, setUrl] = useState("")
  const [redirectData, setRedirectData] = useState(null)
  // const [currentUserTokenID, setCurrentUserTokenID] = React.useState(tokens.id);
  const formatToVND = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  const orderAmount = convertCrownAmountToMoney(crownAmount);


  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      // Check to unlock or locked the contentcc
      getTokensAndSubscribe()
      return unsubscribe;
    });
  }, [navigation]);

  useEffect(() => {
    setUpQueryString(crownAmount, paramCategoryName, userId)
  }, [])

  function convertCrownAmountToMoney(paramCrownAmount: number) {
    const oneCrown = 10000; // 1 crown = 10k vnd
    const totalCost = paramCrownAmount * oneCrown;
    return totalCost;
  }


  //If (crown) is available
  // Prepare the UI with confirmation
  function CrownBalanceAvailable({ tokenId, paramsCategoryID }: any) {
    const convertToCategoryId = convertCategoryIdToFeature(paramsCategoryID)
    return (
      <SingleButton
        name="Đồng Ý"
        onPress={() => {

          // updateUserTokenCrownBalance(tokenId, paramCrownAmount)

          navigation.navigate("Root", {
            screen: paramsRouteName,
            params: {
              paramsCategoryID: convertToCategoryId,
              paramsCategoryID,
              paramUserNumID,
              paramsCategoryUnlocked,
              paramsCategoryName,
              paramRulingNumber,
              paramOuterExpressNumber,
              paramSoulUrgeNumber,
            },
          });
        }}
        iconName="check"
      />
    );
  }
  // update the crown balance
  // updateUserTokenCrownBalance(tokens.id)
  // navigate to the paid feature screen
  // navigation.navigate("Root", {
  //   screen: paramsRouteName,
  // })

  //If (crown) is zero
  // Render the UI
  function CrownBalanceIsZero({ header }: any) {
    const message = `Bạn sẽ mua ${crownAmount} vương miện với giá là ${formatToVND.format(
      orderAmount
    )} `
    return (
      <VStack alignItems="center" space={4}>
        <Text> Chọn mua thêm Vương Miện để mở khoá các tính năng</Text>
        <Select
          selectedValue={crownAmount}
          minWidth="100%"
          accessibilityLabel="Chọn Số Lượng"
          placeholder="Số Lượng"
          onValueChange={(itemValue) => setCrownAmount(itemValue)}
          _selectedItem={{
            bg: "cyan.600",
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="1 Crown" value="1" />
          <Select.Item label="2 Crown" value="2" />
          <Select.Item label="3 Crown" value="3" />
          <Select.Item label="4 Crown" value="4" />
          <Select.Item label="5 Crown" value="5" />
        </Select>

        <SpacerM />
        <Text></Text>
        <SpacerM />

        <Suspense fallback={<Spinner />}>
          {/* <OpenWebBrowserButton name="Thanh Toán" openUrl={header} /> */}
          <SingleButton onPress={handleTransaction(url, navigation)} />
        </Suspense>
      </VStack>
    );
  }
  // Set up the query string
  // open the web broswer with query string
  // listen to success and failure string
  // handleTransaction(url, navigation)

  // args: crownAmount, categoryName, userId

  return (
    <Layout flex="start" >
      <Smartie
        gamiIndicators={true}
        heartBalance={gamificationIndicators[0].heart_balance}
        crownBalance={gamificationIndicators[0].crown_balance}
      />
      <SpacerM />
      <ContentBox text={message} />
      <SpacerL />

      <Suspense fallback={<Spinner />}>
        {paramCrownBalance <= 0 ? (
          <CrownBalanceIsZero header={url} />
        ) : (
          <CrownBalanceAvailable tokenId={tokens.id} paramsCategoryID={paramsCategoryID} />
        )}
      </Suspense>


      <SpacerM />
      <SpacerM />
    </Layout >
  );


  function convertCategoryIdToFeature(categoryID: number) {
    switch (categoryID) {
      case 1:
        return "paramIsRulingNumberPaid";
        break;
      case 2:
        return "paramIsOuterExpNumPaid";
        break;
      case 3:
        return "paramIsSoulUrgePaid";
        break;
      case 4:
        return "paramIsPersonalYearPaid";
      case 5:
        return "paramIsFengShuiPaid";
        break;
    }
  }

  function handleTransaction(url: string, navigation: any) {

    handleOpenWebAsync(url)

    async function handleRedirect(event) {
      let { hostname, path, queryParams } = Linking.parse(event.url);


      //if (success)  
      //handle the navigation
      // navigate to success page
      // naviagte to paid feature page
      if (path == 'success') {
        closeWebBrowser()
        //TODO: Check here!
        purchsaeCrownUpdate(tokens.id, crownAmount)
        navigation.navigate('Root', {
          screen: 'SuccessScreen', params: {
            paramCategoryName
          }
        })
      }

      //if (failure)
      // navigate to failure page
      // navigate to repay
      // navigate to help page
      // navigate to usernumlist page

      if (path == 'failure') {
        closeWebBrowser()
        navigation.navigate('Root', {
          screen: 'FailureScreen', params: {
            paramCategoryName
          }
        })
      }

      function closeWebBrowser() {
        if (Platform.OS === 'ios') {
          WebBrowser.dismissBrowser()
        } else {
          removeLinkingListener()
        }
      }
      setRedirectData(queryParams)
    }

    async function handleOpenWebAsync(url: string) {
      try {
        addLinkingListener();
        let result = await WebBrowser.openBrowserAsync(
          // We add `?` at the end of the URL since the test backend that is used
          // just appends `authToken=<token>` to the URL provided.
          // `https://www.google.com/?linkingUri=${Linking.makeUrl('/?')}`
          url
        );
        setRedirectData(result)
        // removeLinkingListener();
      } catch (error) {
        Alert.alert(error);
        console.log(error);
      }
    }

    function addLinkingListener() {
      Linking.addEventListener('url', handleRedirect);
    }

    function removeLinkingListener() {
      Linking.removeEventListener('url', handleRedirect);

    }
  }



  function setUpQueryString(crownAmount: number, categoryName: string, userId: string) {

    const orderDescription = `Mua Vương Miện ${crownAmount} `;

    const message = `Bạn muốn sử dụng ${crownAmount} vương miện để mở khóa tính năng ${paramCategoryName} ?`;

    const queryToPaymentAPI = {
      userId,
      appName: 'You X.0',
      amount: orderAmount,
      orderDescription: orderDescription,
    };

    const url = "https://pay.sangletech.com";
    const apiPath = "/api/create-payment-url";
    const header = url + apiPath + "?" + queryString.stringify(queryToPaymentAPI);
    console.log(header);

    setMessage(message)
    setUrl(header)
  }


  async function purchsaeCrownUpdate(tokenId: number, amount: number) {
    let { data: incrementData, error: incrementError } = await supabase
      .rpc('increment_user_crown_expense', {
        row_id: tokenId, amount
      })

    if (incrementData) {
      console.log(
        `data of updateUserCrown Expense is: ${JSON.stringify(
          incrementData,
          undefined,
          2
        )}`
      );
    }

    if (incrementError) {
      console.log(
        `there is an error while increment_user_crown_expense: ${JSON.stringify(
          incrementError,
          undefined,
          2
        )}`
      );
    }

  }

  // async function updateUserNumPaidFeature() { }
  async function updateUserTokenCrownBalance(tokenId: number, amount: number) {
    // decrease the crown balance in db
    // increase the crowne expense in db
    // set the paid feature to true

    const { error: decrementError, data: decrementData } = await supabase.rpc(
      'decrement_user_crown_token',
      { row_id: tokenId }
    );

    let { data: incrementData, error: incrementError } = await supabase
      .rpc('increment_user_crown_expense', {
        row_id: tokenId, amount
      })

    if (incrementData) {
      console.log(
        `data of updateUserCrown Expense is: ${JSON.stringify(
          incrementData,
          undefined,
          2
        )}`
      );
    }

    if (incrementError) {
      console.log(
        `there is an error while increment_user_crown_expense: ${JSON.stringify(
          incrementError,
          undefined,
          2
        )}`
      );
    }

    if (decrementData) {
      console.log(
        `data of updateUserCrown balance is: ${JSON.stringify(
          decrementData,
          undefined,
          2
        )}`
      );
    }

    if (decrementError) {
      console.log(
        `there is an error while :updateUserTokenCrown Balance${JSON.stringify(
          decrementError,
          undefined,
          2
        )}`
      );
    }
  }

}
