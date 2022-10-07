// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useState, useEffect } from "react";
import { Platform, SafeAreaView, ScrollView } from "react-native";

import { FlashList } from "@shopify/flash-list";
import Spinner from "../../components/Spinner";
import ContentBox from "../../components/ContentBox";
import Layout from "../../components/Layout";
import NumUserListCard from "../../components/NumUserListCard";
import SingleButton from "../../components/SingleButton";
import Smartie from "../../components/Smartie";
// import { Auth, DataStore } from "aws-amplify";
// import { UserNumerology, UserToken } from "../../src/models";
// import getCurrentUserID from "../../lib/getCurrentUserID";
// import getCurrentUserTokenInfo from "../../lib/getCurrentUserTokenInfo";
// import getCurrentUserNumDataStoreInfos from "../../lib/getCurrentUserNumDataStoreInfos";
// import { useCurrentUserNumInfo } from "../../hooks"
import { useAppContext } from "../../context/appContext";
import { SpacerL, SpacerM } from "../../styles/Spacing";

export default function NumUserListScreen({ navigation }: any) {
  const isIOS = Platform.OS === "ios";
  // const [{ data: token, error }] = useRealtime("you_user_token");
  // const { tokensSubscription } = useTokens();
  // const { currentUserNumInfoSubscription } = useCurrentUserNumInfo()
  const {
    tokens,
    error: tokenError,
    loadingInitial: tokensLoadingInitial,
    currentUserNumInfo: userNumInfo,
    getTokensAndSubscribe,
    numInfoError,
    numInfoLoadingInitial,
    getNumInfoAndSubscribe,
  }: any = useAppContext();
  const [error, setError] = useState("");

  const [show, setShow] = useState(false)

  useEffect(() => {
    //set the timer for 0.3 seconds before all the components are rendered
    const timeout = setTimeout(() => {
      setShow(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [show])

  // useEffect(() => {
  //   getNumInfoAndSubscribe();
  //   getTokensAndSubscribe();
  // }, [])

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // The screen is focused
  //     // Call any action
  //     // Check to unlock or locked the content

  //     getNumInfoAndSubscribe();
  //     getTokensAndSubscribe();

  //     return unsubscribe;
  //   });
  // }, [navigation]);

  const RenderContent = () => {
    return (
      <Layout flex="start">

        <Suspense fallback={<Spinner />}>
          <RenderSmartie />
          <SpacerL />
          <RenderList />
        </Suspense>
        <SpacerL />
        <SingleButton
          iconName="calculator"
          name={userNumInfo.length > 0 ? "Tính Thêm Kết Quả" : "Tính Ngay"}
          onPress={() => navigation.navigate("Main", { screen: "Calculation" })}
        />
      </Layout>
    );
  };

  const RenderSmartie = () => {
    let message =
      userNumInfo.length > 0
        ? `Hiện tại bạn đang có ${userNumInfo.length} kết quả trong danh sách`
        : "Hiện tại danh sách thần số học của bạn còn trống. Bạn có thể nhấp vào nút bên dưới để bắt đầu tính toán kết quả thần số học nhé!";

    const messageStatus = userNumInfo.length > 0 ? "success" : "error";

    if (tokensLoadingInitial || numInfoLoadingInitial) {
      return <Spinner />;
    }

    // if (tokenError) {
    // console.log(`token error is: ${tokenError, undefined, 2}`)
    //   message = tokenError;
    // }
    // if (numInfoError) {
    //   message = numInfoError;
    // }

    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Smartie
            gamiIndicators={true}
            heartBalance={tokens[0]?.heart_balance}
            crownBalance={tokens[0]?.crown_balance}
          />

          <ContentBox text={message} status={messageStatus} />
        </Suspense>
      </>
    );
  };

  const RenderList = () => {
    const renderItem = ({ item }: any) => {
      const personNumResultTitle = `
  Số Chủ Đạo
  Chỉ Số Thể Hiện
  Chỉ Số Tâm Hồn
  Năm Cá Nhân
        `;
      const personNumResultDetail = `
    ${item.ruling_number} 
    ${item.outer_express_number} 
    ${item.soul_urge_number} 
    ${item.personal_year_number}
        `;

      return (
        <>
          <Suspense fallback={<Spinner />}>
            <NumUserListCard
              title={item.full_name}
              subtitle={item.dob}
              titleContent={personNumResultTitle}
              detailContent={personNumResultDetail}
              onPressCard={() =>
                navigation.navigate("Root", {
                  screen: "NumPersonDetailScreen",
                  params: {
                    paramDob: item.dob,
                    paramUserNumID: item.id,
                    paramUserFullName: item.full_name,
                    paramRulingNumber: item.ruling_number,
                    paramOuterExpressNumber: item.outer_express_number,
                    paramSoulUrgeNumber: item.soul_urge_number,
                    paramPersonalYearNumber: item.personal_year_number,
                    paramIsRulingNumberPaid: item.is_ruling_number_paid,
                    paramIsOuterExpNumPaid: item.is_outer_exp_number_paid,
                    paramIsSoulUrgePaid: item.is_soul_urge_paid,
                    paramIsPersonalYearPaid: item.is_personal_year_paid,
                    paramIsFengShuiPaid: item.is_feng_shui_paid,
                  },
                })
              }
              iconButton="star-face"
            />
          </Suspense>
          <SpacerM />
        </>
      );
    };
    return (
      <SafeAreaView>
        {/* Render Ruling Number Data */}
        <Suspense fallback={<Spinner />}>
          <FlashList
            data={userNumInfo}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Suspense>
      </SafeAreaView>
    );
  };

  return (
    <>
      {isIOS && (
        <SafeAreaView>
          <Suspense fallback={<Spinner />}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
              <RenderContent />
            </ScrollView>
          </Suspense>
        </SafeAreaView>
      )}
      {!isIOS && (
        <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
          <RenderContent />
        </ScrollView>
      )}
    </>
  )
}

