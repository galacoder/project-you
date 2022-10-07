// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/Spacing";
// import { Auth } from "aws-amplify";
// import { userLocalState } from "../../atoms/User";
// import { useRecoilValue } from "recoil";

export default function FifthScreen({ navigation, route }) {
  const { firstName } = route.params;
  // const userFirstName = useRecoilValue(userLocalState);
  const message = `Trong Thần số học, thế giới của sự hiểu biết về bản thân và sự tạo ra sự giàu có đều có mối liên hệ chặt chẽ với nhau. Để bắt đầu trên Con đường của sự giàu có, điều quan trọng là phải biết bạn là ai, quà tặng của bạn là gì, cách bạn thể hiện bản thân tốt nhất trên thế giới và mục đích cuộc sống của bạn là gì.`;
  return (
    <Layout flex="start">
      <Smartie gamiIndicators={false} />
      <SpacerM />
      <ContentBox text={message} />

      <SpacerL />
      <SingleButton
        name="Bắt Đầu"
        iconName="arrow-right-circle"
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "SignIn",
            params: { firstName },
          })
        }
      />
    </Layout>
  );
}
