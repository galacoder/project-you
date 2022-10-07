// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/Spacing";

export default function FailurePayment({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Failure page" />
      <SpacerL />
      <SingleButton
        name="Thử Lại"
        onPress={() => navigation.navigate("Payment")}
      />
      <SpacerM />
      <SingleButton
        name="Liên Hệ Giúp Đỡ"
        onPress={() => navigation.navigate("Help")}
      />
    </Layout>
  );
}
