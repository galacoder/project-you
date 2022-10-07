// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/Spacing";
import { ScrollView } from "react-native";

// import { userLocalState } from "../../atoms/User";
// import { useRecoilValue } from "recoil";

export default function ThirdScreen({ navigation, route }) {
  // const userFirstName = useRecoilValue(userLocalState);
  const { firstName } = route.params;
  const message = `You X.0 là một phần mềm nằm trong quyển sách "Bí Mật làm Giàu" của anh Sang Lê. \n\nĐây là một cuốn sách khiến bạn suy nghĩ về những trải nghiệm trong quá khứ và giúp bạn nhìn ra những khía cạnh tích cực của nó. \n\nGiúp bạn hiểu bạn là một người như thế nào và biết mục đích sống của bạn là gì. Giúp bạn có thể nhìn thế giới từ một góc độ khác và cho phép bạn phát triển những mặt tích cực trong bản thân và tập trung vào chúng. `;

  return (
    <Layout>
      <Smartie gamiIndicators={false} />
      <SpacerM />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBox text={message} />

        <SpacerL />
        <SingleButton
          name="Tiếp Theo"
          iconName="arrow-right-circle"
          onPress={() => navigation.navigate("Fourth", { firstName })}
        />
      </ScrollView>
    </Layout>
  );
}
