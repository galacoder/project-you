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

export default function SecondSreen({ navigation, route }) {
  // const userFirstName = useRecoilValue(userLocalState);
  const { firstName } = route.params;

  const message = `Smartie sẽ là người sẽ cùng đồng hành cùng ${firstName} trong xuyên xuốt chặng đường giúp bạn tìm hiểu Thần Số Học.\n\nNhững con số trong cuộc sống của bạn là thông điệp từ chính linh hồn của bạn. \n\nNgay từ khi bạn sinh ra, những con số xung quanh bạn sẽ quyết định con đường của bạn. \n\nTrong Thần số học, mỗi con số trong ngày tháng năm sinh của bạn là một công cụ để tìm ra bạn thật sự là ai và sứ mệnh của bạn là gì. \n\nMong muốn mạnh mẽ nhất của Vũ trụ là mỗi người trong chúng ta tìm thấy số phận của chính mình và hoàn thành nó. Tình yêu, hôn nhân, con cái, tiền bạc, sự nghiệp - mọi thứ đều bị ảnh hưởng bởi những con số.`;

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
          onPress={() => navigation.navigate("Third", { firstName })}
        />
      </ScrollView>
    </Layout>
  );
}
