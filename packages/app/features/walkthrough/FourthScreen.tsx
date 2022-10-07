// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/Spacing";
// import { userLocalState } from "../../atoms/User";
// import { useRecoilValue } from "recoil";
import { ScrollView } from "react-native";

export default function FourthScreen({ navigation, route }) {
  // const userFirstName = useRecoilValue(userLocalState);
  const { firstName } = route.params;

  const message = `${firstName} sẽ tìm hiểu về những bí ẩn của các con số trong tên của ${firstName} thể hiện trong tất cả các lĩnh vực của cuộc sống, bao gồm tiền bạc, danh vọng, tình yêu, may mắn và vận mệnh. \n\nBạn sẽ học cách tìm ra tài năng thực sự của mình và những cơ hội nào đang đến gần. Cũng giống như bạn không bao giờ có thể lên kế hoạch cho một cuộc hành trình mà không có bản đồ, hoặc cố gắng xây một ngôi nhà mà không có kế hoạch, việc hiểu được tài năng thực sự của bạn là điều cơ bản nhất để bắt đầu bước đi trên hành trình Làm Giàu X.0, bạn cần biết bạn là ai và bạn có thể làm gì tốt nhất cho cuộc sống của bạn, gia đình và xã hội. `;
  return (
    <Layout flex="start">
      <Smartie gamiIndicators={false} />
      <SpacerM />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBox text={message} />
        <SpacerL />
        <SingleButton
          name="Tiếp Theo"
          iconName="arrow-right-circle"
          onPress={() => navigation.navigate("Fifth", { firstName })}
        />
      </ScrollView>
    </Layout>
  );
}
