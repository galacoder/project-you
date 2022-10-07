import * as React from "react";
// import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  // NativeBaseProvider,
  // Box,
  // Text,
  // Heading,
  VStack,
  // FormControl,
  // Input,
  // Link,
  // Button,
  KeyboardAvoidingView,
  // Icon,
  // IconButton,
  // HStack,
  // Divider,
} from "native-base";
import Layout from "../../../components/Layout";

import ContentBox from "../../../components/ContentBox";
import Smartie from "../../../components/Smartie";
import { SpacerS } from "../../../styles/Spacing";
// import { useTheme } from "react-native-paper";
// import { Auth } from "aws-amplify";
// import { useRecoilState } from "recoil";
// import { userLocalState } from "../../atoms/User";
import SingleButton from "../../../components/SingleButton";

// import { Formik } from "formik";
// import * as Yup from "yup";

export default function SignUpConfirm({ navigation, route }) {
  // const [userLocal, SetUserLocal] = useRecoilState(userLocalState);
  // const [error, setError] = React.useState({});
  const [message, setMessage] = React.useState(
    "Bạn check email để xác nhận tài khoản trước khi có thể đăng nhập nhé!"
  );
  // const [loading, setLoading] = React.useState(false);
  const [messageStatus, setMessageStatus] = React.useState("error");

  return (
    <Layout>
      <VStack space={6} alignItems="center" >
        <Smartie gamiIndicators={false} />
        <SpacerS />
        <ContentBox text={message} status={messageStatus} />

        <SingleButton
          name=" Tôi xác nhận thành công!"
          iconName="arrow-right-circle"
          onPress={() => {
            navigation.navigate("Auth", {
              screen: "SignIn",
              params: {},
            });
          }}
        />
      </VStack>
    </Layout >
  );
}
