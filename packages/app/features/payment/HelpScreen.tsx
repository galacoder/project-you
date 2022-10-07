// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/Spacing";

export default function Help({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Help page" />
      <SpacerL />
      <SingleButton
        name="Trở lại trang chủ"
        onPress={() => navigation.navigate("Landing")}
      />
    </Layout>
  );
}
