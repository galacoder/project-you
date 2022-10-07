// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Spinner from "../../components/Spinner";
import ContentBox from "../../components/ContentBox";
import Layout from "../../components/Layout";
import NumPersonDetailCard from "../../components/NumPersonDetailCard";
// import { Auth, DataStore } from "aws-amplify";
// import { userNumerology } from "../../assets/data/database";
import NumUserListCard from "../../components/NumUserListCard";
import SingleButton from "../../components/SingleButton";
import Smartie from "../../components/Smartie";
// import checkUserFeatureIsUnlockReturnObj from "../../lib/checkUserFeatureIsUnlockReturnObj";
// import { Props } from "../../navigation/types";
// import { useRecoilValue } from "recoil";
// import { categoryState } from "../../atoms/Category";
// import { currentUserNumDataStoreQuery } from "../../atoms/UserNum";
// import { UserNumerology, UserToken } from "../../src/models";
// import getCurrentUserNumDataStoreInfos from "../../lib/getCurrentUserNumDataStoreInfos";
// import getCurrentUserID from "../../lib/getCurrentUserID";
// import getCurrentUserTokenInfo from "../../lib/getCurrentUserTokenInfo";
import { useAppContext } from "../../context/appContext";
import convertUserNumFeatureUnlockToIcon from "../../lib/convertUserNumFeatureUnlockToIcon";
import { SpacerL, SpacerM } from "../../styles/Spacing";

import { FlashList } from "@shopify/flash-list";

export default function NumPersonDetailScreen({ navigation, route }) {
  // const categories = useRecoilValue(categoryState);
  const {
    tokens,
    error: tokenError,
    loadingInitial: tokensLoadingInitial,
    getTokensAndSubscribe,
    currentUserNumInfo: userNumInfo,
    getNumInfoAndSubscribe,
    numInfoError,
    numInfoLoadingInitial,
    categories,
    categoriesError,
    categoriesLoadingInitial,
  }: any = useAppContext();

  const [error, setError] = useState("");

  // const [gamificationIndicators, setGamificationIndicators] = React.useState([
  // tokens,
  // ]);
  // const [currentUserTokenID, setCurrentUserTokenID] = React.useState(tokens.id);

  console.log(`tokens in numpersondetailedpage: ${(tokens, undefined, 2)}`);

  const {
    paramRulingNumber,
    paramOuterExpressNumber,
    paramSoulUrgeNumber,
    paramPersonalYearNumber,
    paramUserFullName,
    paramDob,
    paramUserNumID,
    paramIsRulingNumberPaid,
    paramIsOuterExpNumPaid,
    paramIsSoulUrgePaid,
    paramIsPersonalYearPaid,
    paramIsFengShuiPaid,
  } = route.params;

  const isUserFeaturePaidObj = [
    {
      1: paramIsRulingNumberPaid,
      2: paramIsOuterExpNumPaid,
      3: paramIsSoulUrgePaid,
      4: paramIsPersonalYearPaid,
      5: paramIsFengShuiPaid,
    },
  ];

  React.useEffect(() => {
    navigation.setOptions({ title: paramUserFullName });
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      // Check to unlock or locked the contentcc
      getNumInfoAndSubscribe();
      getTokensAndSubscribe();
      navigation.setOptions({ title: paramUserFullName });
    });

    //
  }, [navigation]);

  const RenderList = () => {
    const renderItem = ({ item }: any) => (
      <>
        <Suspense fallback={<Spinner />}>
          <NumPersonDetailCard
            title={item.name}
            content={item.short_description}
            iconButton={convertUserNumFeatureUnlockToIcon(
              item.id,
              isUserFeaturePaidObj
            )}
            btnName="Xem Chi Tiết →"
            onPressCard={() =>
              navigation.navigate("Root", {
                screen: "NumCategoryDetailScreen",
                params: {
                  paramsCategoryID: item.id,
                  paramsCategoryUnlocked: convertUserNumFeatureUnlockToIcon(
                    item.id,
                    isUserFeaturePaidObj
                  ),
                  paramUserNumID: paramUserNumID,
                  paramsCategoryName: item.name,
                  paramRulingNumber,
                  paramOuterExpressNumber,
                  paramSoulUrgeNumber,
                },
              })
            }
          />
          <SpacerM />
        </Suspense>
      </>
    );
    return (
      <SafeAreaView>
        <Suspense fallback={<Spinner />}>
          {/* Render Ruling Number Data */}
          <FlashList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Suspense>
      </SafeAreaView>
    );
  };

  const RenderSmartie = () => (
    <>
      <Suspense fallback={<Spinner />}>
        <Smartie
          gamiIndicators={true}
          heartBalance={tokens[0].heart_balance}
          crownBalance={tokens[0].crown_balance}
        />
        <ContentBox text="Đây là kết quả thấn số học của Bạn" />
      </Suspense>
    </>
  );

  const RenderUserNumInfo = () => {
    const personNumResultTitle = `
Số Chủ Đạo
Chỉ Số Thể Hiện
Chỉ Số Tâm Hồn
Năm Cá Nhân
  `;
    const personNumResultDetail = `
${paramRulingNumber}
${paramOuterExpressNumber}
${paramSoulUrgeNumber}
${paramPersonalYearNumber}
`;

    return (
      <>
        <Suspense fallback={<Spinner />}>
          <NumUserListCard
            title={paramUserFullName}
            subtitle={paramDob}
            titleContent={personNumResultTitle}
            detailContent={personNumResultDetail}
          />
        </Suspense>
        <SpacerM />
      </>
    );
  };

  return (
    <Layout flex="start">
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <RenderSmartie />
        <SpacerL />
        <RenderUserNumInfo />
        <SpacerL />
        <RenderList />

        <SpacerL />
        <SingleButton
          iconName="arrow-left-circle"
          name="Trở Lại"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </Layout>
  );
}
