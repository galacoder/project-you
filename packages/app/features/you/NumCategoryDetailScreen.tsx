import React, { useState, useEffect, Suspense, useRef } from "react";

import { ScrollView, SafeAreaView, Platform } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";

import { SpacerL, SpacerM } from "../../styles/Spacing";

// import { API, graphqlOperation, Auth } from "aws-amplify";
// import { listInfos } from "../../src/graphql/queries";

import NumCategoryCard from "../../components/NumCategoryCard";
import Layout from "../../components/Layout";
import SingleButton from "../../components/SingleButton";
import LockCard from "../../components/LockCard";

// import PurchaseDialog from "../../components/PurchaseDialog";
import { supabase } from "../../lib/supabase";

import Spinner from "../../components/Spinner";

import { useAppContext } from "../../context/appContext";

export default function NumCategoryDetailScreen({ navigation, route }) {
  const isIOS = Platform.OS === "ios";
  const paramsRouteName = route.name

  const {
    tokens,
    error: tokenError,
    loadingInitial: tokensLoadingInitial,
    getTokensAndSubscribe,
    currentUserNumInfo: userNumInfo,
    numInfoError,
    numInfoLoadingInitial,
    categories,
    categoriesError,
    categoriesLoadingInitial,
  }: // detailedNumInfos,
    // detailedNumInfoError,
    // detailedNumInfoLoadingInitial
    any = useAppContext();


  console.log(`tokens at NumCategoryDetailScreen: ${JSON.stringify(tokens, undefined, 2)}`)


  const {
    paramsCategoryID,
    paramUserNumID,
    paramsCategoryUnlocked,
    paramsCategoryName,
    paramRulingNumber,
    paramOuterExpressNumber,
    paramSoulUrgeNumber,
  } = route.params;

  const [userRulingNumberInfo, setUserRulingNumberInfo] = useState([]);
  const [userOuterExpressNumInfo, setUserOuterExpressNumInfo] = useState([]);
  const [userSoulUrgeNumberInfo, setUserSoulUrgeNumberInfo] = useState([]);
  // const [userPersonalYearNumInfo, setUserPersonalYearNumInfo] = useState([])
  // const [userFengShuiNumInfo, setUserFengShuiNumInfo] = useState([])

  const [paid, setPaid] = useState<boolean>(false);
  // const [userNum, setUserNum] = React.useState({});
  // const [gamificationIndicators, setGamificationIndicators] = React.useState([
  //   tokens,
  // ]);
  const [show, setShow] = useState(false)

  useEffect(() => {
    //set the timer for 0.3 seconds before all the components are rendered
    const timeout = setTimeout(() => {
      setShow(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [show])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      // Check to unlock or locked the content
      getTokensAndSubscribe();
      return unsubscribe;
    });
  }, [navigation]);

  React.useEffect(() => {
    // AfterButtonPress();
    {
      paramsCategoryUnlocked === "unlock-alt" ? setPaid(true) : setPaid(false);
    }
    // Change the name of the header to the category clicked
    navigation.setOptions({ title: paramsCategoryName });

    filterUserRulingNumberInfo();
    filterUserSoulUrgeNumberInfo();
    filterUserOuterExpressNumInfo();
  }, []);

  async function filterUserRulingNumberInfo() {
    const categoryID = 1;

    let { data, error }: any = await supabase
      .from("you_detailed_num_info")
      .select("*")
      .eq("category_id", categoryID)
      .eq("number", paramRulingNumber)
      .order('order', { ascending: true })

    if (error) {
      console.log(
        `error from UserRulingNumberInfo, ${JSON.stringify(
          error,
          undefined,
          2
        )}`
      );
      // setError(error.message)
      return;
    }
    // const filter = detailedNumInfos.filter(
    // (i) => i.category_id === categoryID
    // ).filter(i => i.number = paramRulingNumber)
    console.log(
      `filterUserRulingNumberInfo: ${JSON.stringify(data, undefined, 2)}`
    );
    // console.log(`detailedNumInfos from categoryScreen: ${JSON.stringify(detailedNumInfos, undefined, 2)}`)
    setUserRulingNumberInfo(data);
  }

  async function filterUserOuterExpressNumInfo() {
    const categoryID = 2;

    let { data, error }: any = await supabase
      .from("you_detailed_num_info")
      .select("*")
      .eq("category_id", categoryID)
      .eq("number", paramOuterExpressNumber)
      .order('order', { ascending: true })

    if (error) {
      console.log(
        `error from filterUserOuterExpressNumInfo, ${JSON.stringify(
          error,
          undefined,
          2
        )}`
      );
      // setError(error.message)
      return;
    }

    console.log(
      `filterUserRulingNumberInfo: ${JSON.stringify(data, undefined, 2)}`
    );

    setUserOuterExpressNumInfo(data);
  }

  async function filterUserSoulUrgeNumberInfo() {
    const categoryID = 3;
    // const filter = detailedNumInfos.filter(
    //   (i) => i.category_id === categoryID
    // ).filter(i => i.number === paramSoulUrgeNumber)
    let { data, error }: any = await supabase
      .from("you_detailed_num_info")
      .select("*")
      .eq("category_id", categoryID)
      .eq("number", paramSoulUrgeNumber)
      .order('order', { ascending: true })

    if (error) {
      console.log(
        `error from filterUserSoulUrgeNumberInfo, ${JSON.stringify(
          error,
          undefined,
          2
        )}`
      );
      // setError(error.message)
      return;
    }

    console.log(
      `filterUserRulingNumberInfo: ${JSON.stringify(data, undefined, 2)}`
    );
    setUserSoulUrgeNumberInfo(data);
  }
  // async function filterUserPersonalYearNumInfo() {
  //   const categoryID = "4";
  //   const filter = detailedNumInfos.filter(
  //     (i) => i.category_id === categoryID
  //   )
  //   setUserPersonalYearNumInfo(filter)
  // }

  // async function filterUserFengShuiNumInfo() {
  //   const categoryID = "5";
  //   const filter = detailedNumInfos.filter(
  //     (i) => i.category_id === categoryID
  //   )
  //   setUserFengShuiNumInfo(filter)
  // }

  function filterTheCorrectInfo() {
    function pickTheRightCategory(id: number) {
      switch (id) {
        case 1:
          return userRulingNumberInfo;
          break;
        case 2:
          return userOuterExpressNumInfo;
          break;
        case 3:
          return userSoulUrgeNumberInfo;
          break;
        // case 4:
        //   return userPersonalYearNumInfo;
        //   break;
        // case 5:
        //   return userFengShuiNumInfo;
        //   break;
        default:
          console.log(`error picking the right category`);
      }
    }

    const getTheRightUserNumInfo = pickTheRightCategory(
      parseInt(paramsCategoryID)
    );
    console.log(
      `getTheRightCategoryState: ${JSON.stringify(
        getTheRightUserNumInfo,
        undefined,
        2
      )}`
    );

    // const getUserNumDetails = getTheRightCategoryState?.filter(item => item.number === userNumInfo.ruling_number)

    // console.log(`getUserNumDetails: ${JSON.stringify(getUserNumDetails, undefined, 2)}`);

    return getTheRightUserNumInfo;
  }

  const RenderSmartie = () => {
    const index = paramsCategoryID - 1;

    const message =
      paid === false
        ? `Để xem được nội dung này bạn sẽ cần trả cho Smartie  ${categories[index].crown_cost} CROWN`
        : `Đây là nội dung về ${paramsCategoryName} của Bạn`;

    const messageStatus = paid === false ? "error" : "info";

    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Smartie
            gamiIndicators={true}
            heartBalance={tokens[0].heart_balance}
            crownBalance={tokens[0].crown_balance}
          />
          <ContentBox text={message} status={messageStatus} />
        </Suspense>
      </>
    );
  };
  const RenderLockedCard = () => {
    const index = paramsCategoryID - 1;

    return (
      <>
        <Suspense fallback={<Spinner />}>
          <LockCard
            title={categories[index].name}
            // navigate
            content={categories[index].full_description}
            onPressBtn={() =>
              navigation.navigate("PaymentScreen", {
                paramCrownAmount: categories[index].crown_cost,
                paramCategoryName: categories[index].name,
                paramCrownBalance: tokens[0].crown_balance,
                paramsCategoryID,
                paramUserNumID,
                paramsRouteName,
                paramsCategoryUnlocked,
                paramsCategoryName,
                paramRulingNumber,
                paramOuterExpressNumber,
                paramSoulUrgeNumber,
                // paramDescription: `Bạn sẽ mua ${category[index].crownCost} để mở khóa tính năng ${category[index].name}`,
              })
            }
            crownIndicator={categories[index].crown_cost}
          />
          {/* <PurchaseDialog /> */}
        </Suspense>
      </>
    );
  };

  const RenderInfo = () => {
    const userPickedInfo = filterTheCorrectInfo();

    const renderItem = ({ item }: any) => (
      <>
        <Suspense fallback={<Spinner />}>
          <NumCategoryCard title={item.title} content={item.description} />
        </Suspense>
        <SpacerM />
      </>
    );

    return (
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {/* Render  Data */}
          <FlashList
            data={userPickedInfo}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    );
  };

  const RenderAllContent = () => {
    return (
      <>
        <RenderSmartie />
        <SpacerL />


        {/* Paid vs Unpaid */}
        {paid === false ? (
          <Suspense fallback={<Spinner />}>
            <RenderLockedCard />
          </Suspense>
        )
          :
          (
            <Suspense fallback={<Spinner />}>
              <RenderInfo />
            </Suspense>
          )}
        {/* <RenderLockedCard /> */}
        <SpacerL />
        <SingleButton
          iconName="arrow-left-circle"
          name="Trở Lại"
          onPress={() => navigation.goBack()}
        />
      </>
    );
  };

  return (
    <>

      {show ?
        (<Suspense fallback={<Spinner />}>
          <Layout flex="start">
            {isIOS && (
              <SafeAreaView>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentInsetAdjustmentBehavior="automatic"
                  nestedScrollEnabled={true}
                  style={{ height: "100%" }}
                >
                  <RenderAllContent />
                </ScrollView>
              </SafeAreaView>
            )}
            {!isIOS && <RenderAllContent />}
          </Layout>
        </Suspense>
        )
        : <Spinner />}
    </>

  );
}
