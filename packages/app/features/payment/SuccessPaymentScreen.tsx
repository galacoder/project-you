// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import { SpacerL, SpacerM } from "../../styles/Spacing";
import Layout from "../../components/Layout";

function SuccessPaid({ navigation }) {
  return (
    <Layout>
      <Smartie gamiIndicators={true} heartBalance={0} crownBalance={0} />
      <SpacerM />
      <ContentBox text="This is Sucessful payment page" />
      <SpacerL />
      <SingleButton name="Tạo Tài Khoản" />
    </Layout>
  );
}

export default SuccessPaid;
