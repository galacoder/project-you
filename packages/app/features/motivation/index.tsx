// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useContext, useEffect, useState } from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import { SpacerL, SpacerM, SpacerS } from "../../styles/Spacing";
import Layout from "../../components/Layout";
import MotivationalBox from "../../components/MotivationalBox";
import {
  ScrollView,
  SafeAreaView,
  // Text,
  Platform,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

// import SingleButton from "../../components/SingleButton";

import Spinner from "../../components/Spinner";

// import { useRecoilValue } from "recoil";
// import { motivationalContentState } from "../../atoms/MotivationalContent";
// import {
//   UserNumerology,
//   UserToken,
//   Info,
//   MotivationalContent,
// } from "../../src/models";

// import getCurrentUserNumDataStoreInfos from "../../lib/getCurrentUserNumDataStoreInfos";
// import getCurrentUserID from "../../lib/getCurrentUserID";
// import getCurrentUserTokenInfo from "../../lib/getCurrentUserTokenInfo";
// import { DataStore } from "aws-amplify";
// import getMotivationalContent from "../../lib/getMotivationalContent";
import { useAppContext } from "../../context/appContext";

import { getStringData } from '../../lib/asyncStorage'

export default function Motivation({ navigation }: any) {
  const isIOS = Platform.OS === "ios";

  // const motivationalContent = useRecoilValue(motivationalContentState);
  const {
    tokens,
    error: tokenError,
    loadingInitial: tokensLoadingInitial,
    currentUserNumInfo: userNumInfo,
    numInfoError,
    numInfoLoadingInitial,
    motivationalContents,
    motivationalMessageError,
    motivationalMessageLoadingInitial,
    getMotivationalContentsAndSubscribe,
  }: any = useAppContext();

  // const [content, setContent] = React.useState([]);

  const [gamificationIndicators, setGamificationIndicators] = React.useState([
    tokens,
  ]);

  const [show, setShow] = useState(false)


  // const firstName = await getStringData('firstName')

  const welcomeText = ` Sống tích cực đón nhận giàu sang.`

  useEffect(() => {
    //set the timer for 0.3 seconds before all the components are rendered
    const timeout = setTimeout(() => {
      setShow(true)
    }, 200)

    return () => clearTimeout(timeout)
  }, [show])



  // const [currentUserTokenID, setCurrentUserTokenID] = React.useState(tokens.id);

  // React.useEffect(() => {
  //   getCurrentUserNumDataStoreInfos();

  //   (async function currentMotivationalContent() {
  //     const response = await getMotivationalContent();
  //     setContent(response);
  //     console.log(
  //       `here is the content from setContent Hook: ${JSON.stringify(
  //         content.filter((i) => i.title === "Sang Le Blog")
  //       )}`
  //     );

  //     const today = new Date();

  //     console.log(
  //       `here is today date: ${today.toISOString()}, ${today.toJSON()}, ${today.toDateString()}, ${today.toUTCString()}`
  //     );
  //   })();

  //   (async function currentUserTokenInfo() {
  //     const { currentUserTokenInfo, currentUserTokenID } =
  //       await getCurrentUserTokenInfo();
  //     console.log(
  //       `currentUserTokenInfo: ${JSON.stringify(currentUserTokenInfo)}`
  //     );
  //     console.log(`currentUserTokenID: ${currentUserTokenID}`);

  //     setGamificationIndicators(currentUserTokenInfo);
  //     setCurrentUserTokenID(currentUserTokenID);
  //   })();
  // }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      // Check to unlock or locked the contentcc
      //   getCurrentUserNumDataStoreInfos();
      //   (async function currentUserTokenInfo() {
      //     const { currentUserTokenInfo, currentUserTokenID } =
      //       await getCurrentUserTokenInfo();
      //     console.log(
      //       `currentUserTokenInfo: ${JSON.stringify(currentUserTokenInfo)}`
      //     );
      //     console.log(`currentUserTokenID: ${currentUserTokenID}`);
      //     setGamificationIndicators(currentUserTokenInfo);
      //     setCurrentUserTokenID(currentUserTokenID);
      //   })();
      //   return unsubscribe;
      getMotivationalContentsAndSubscribe();
    });

    //
  }, [navigation]);

  // React.useEffect(() => {
  //   const subscriptions = gamificationIndicators.map((currentUserTokenInfo) =>
  //     DataStore.observe(UserToken, currentUserTokenInfo.id).subscribe((msg) => {
  //       console.log(
  //         `gamificationIndicators SUBSCRIPTION_UPDATE, ${JSON.stringify(msg)}}`
  //       );
  //       if (msg.opType === "UPDATE") {
  //         setGamificationIndicators((currentGamiIndicators) =>
  //           currentGamiIndicators.map((item) => {
  //             if (item.crownBalance !== msg.element.crownBalance) {
  //               console.log("I got different id in gamification indicators");
  //               return item;
  //             }
  //             return {
  //               ...item,
  //               ...msg.element,
  //             };
  //           })
  //         );
  //       }
  //     })
  //   );

  //   return () => {
  //     subscriptions.forEach((sub) => sub.unsubscribe());
  //   };
  // }, [gamificationIndicators]);
  const RenderSmartie = () => (
    <>
      <Smartie
        gamiIndicators={false}
        heartBalance={gamificationIndicators[0].heart_balance}
        crownBalance={gamificationIndicators[0].crown_balance}
      />
      <ContentBox text={welcomeText} />
    </>
  );

  const RenderList = () => {
    const renderItem = ({ item }) => {
      return (
        <>
          <MotivationalBox
            title={item.title}
            content={item.content}
            caption={item.caption}
            link={item.link}
            iconName={item.iconName}
          />
          <SpacerS />
        </>
      );
    };
    return (
      <SafeAreaView>
        {/* Render Ruling Number Data */}
        <Suspense fallback={<Spinner />}>
          <FlashList
            data={motivationalContents}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Suspense>
      </SafeAreaView>
    );
  };

  const RenderContent = () => {
    return (
      <Layout flex="start">
        <RenderSmartie />
        <SpacerM />
        <Suspense fallback={<Spinner />}>
          <RenderList />
        </Suspense>
        <SpacerL />
      </Layout>
    );
  };

  return (
    <>
      {show ?
        (<>
          {isIOS && (
            <SafeAreaView>
              <ScrollView showsVerticalScrollIndicator={false}>
                <RenderContent />
              </ScrollView>
            </SafeAreaView>
          )}
          {!isIOS && (
            <ScrollView showsVerticalScrollIndicator={true}>
              <RenderContent />
            </ScrollView>
          )}
        </>)

        : (<Spinner />)}

    </>
  );
}

// export default function Motivation({ navigation }) {
//   return (
//     <Layout>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <Smartie />
//         <ContentBox text="Hello Sang. Sống tích cực đón nhận giàu sang" />
//         <SpacerM />
//         <MotivationalBox
//           title="Quote"
//           content="Sang Le is handsome"
//           caption="Smartie"
//           iconName="comment-quote"
//         />
//         <MotivationalBox
//           title="Real Fact"
//           content="Sang Le is handsome"
//           caption="Smartie"
//           iconName="account-multiple-check"
//         />
//         <MotivationalBox
//           iconName="atom"
//           title="Thần Số Học"
//           content="From Yunnie"
//           caption="Yunnie"
//         />
//         <MotivationalBox
//           title="Sang Le Blog"
//           content="from Sang Le Tech"
//           caption="Sang Le"
//           iconName="blogger"
//         />
//         <MotivationalBox
//           iconName="newspaper"
//           title="CafeS News"
//           content="From CafeS"
//         />
//         <SpacerL />
//       </ScrollView>
//     </Layout>
//   );
// }
