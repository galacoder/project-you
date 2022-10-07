// @generated: @expo/next-adapter@2.1.52
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Auth } from "aws-amplify";
import { supabase } from "../../../lib/supabase";
import { Formik } from "formik";
import {
  Center,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Link,
  Text,
  VStack,
} from "native-base";
import React from "react";
// import { Platform } from "react-native";
// import { useTheme } from "react-native-paper";
// import { useRecoilState, useRecoilValue } from "recoil";
import * as Yup from "yup";
// import { userLocalState } from "../../../atoms/User";
import ContentBox from "../../../components/ContentBox";
import Layout from "../../../components/Layout";
import SingleButton from "../../../components/SingleButton";
import Smartie from "../../../components/Smartie";
import { SpacerS } from "../../../styles/Spacing";
import Spinner from "../../../components/Spinner";
export default function SignInScreen({ navigation, route }) {
  // const userFirstName = useRecoilValue(userLocalState);
  // const [username, setUserName] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [userLocal, setUserLocal] = useRecoilState(userLocalState);
  const { firstName } = route.params;
  const [errorMessage, setErrorMessage] = React.useState({});
  const [message, setMessage] = React.useState(
    `${firstName} đã sẵn sàng đăng ký và trải nghiệm?`
  );
  // const { colors } = useTheme();
  const [messageStatus, setMessageStatus] = React.useState("");

  // const [userInfo, setUserInfo] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);

  const _onPress = async (values: {
    email: string;
    password: string;
  }): Promise<void> => {
    setLoading(true);
    setErrorMessage("");

    const { email, password } = values;
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    console.log(`user info is: ${JSON.stringify(user, undefined, 2)}`);
    // user && setUserLocal({ isSignedIn: true });

    if (error?.message === "Email not confirmed") {
      // console.log(`here is the error: ${JSON.stringify(error, undefined, 2)}`);
      setErrorMessage(error.message);
      setMessage("Bạn chưa xác nhận tài khoản trên Email")
      setMessageStatus("error");
      setLoading(false);
    }

    if (error?.message === "Invalid login credentials") {
      // console.log(`here is the error: ${JSON.stringify(error, undefined, 2)}`);
      setErrorMessage(error.message);
      setMessage("Tài khoản hoặc mặc khẩu của Bạn không đúng!")
      setMessageStatus("error");
      setLoading(false);
    }
  }



  // const isWebView = () => {
  //   return Platform.OS === "web";
  // };

  const RenderContent = () => {
    return (
      <Layout>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={40}>
          <Smartie gamiIndicators={false} />
          <SpacerS />
          <ContentBox text={message} status={messageStatus} />

          <VStack space={2} mt={5}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values): Promise<void> => _onPress(values)}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().min(6).required(),
              })}
            >
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                handleSubmit,
              }): React.ReactElement => (
                <VStack width="100%" space={4}>
                  <FormControl isRequired isInvalid={"email" in errors}>
                    <FormControl.Label
                      _text={{
                        color: "muted.700",
                        fontSize: "sm",
                        fontWeight: 600,
                      }}
                    >
                      Email
                    </FormControl.Label>
                    <Input
                      name="email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={(): void => setFieldTouched("email")}
                      placeholder="you@gmail.com"
                      touched={touched}
                      errors={errors}
                      autoCapitalize="none"
                      placeholderTextColor={"muted.400"}
                      color={"coolGray.50"}
                      py={'3'}
                      fontSize={'md'}
                    />
                    <FormControl.ErrorMessage>
                      {errors.email}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  <FormControl
                    mb={5}
                    isRequired
                    isInvalid={"password" in errors}
                  >
                    <FormControl.Label
                      _text={{
                        color: "muted.700",
                        fontSize: "sm",
                        fontWeight: 600,
                      }}
                    >
                      Mật Khẩu
                    </FormControl.Label>
                    <Input
                      name="password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={(): void => setFieldTouched("password")}
                      placeholder="Admin123!"
                      touched={touched}
                      errors={errors}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholderTextColor={"muted.400"}
                      color={"coolGray.50"}
                      py={'3'}
                      fontSize={'md'}
                    />
                    <FormControl.ErrorMessage>
                      {errors.password}
                    </FormControl.ErrorMessage>
                    <Link
                      _text={{
                        fontSize: "xs",
                        fontWeight: "700",
                        color: "cyan.500",
                      }}
                      alignSelf="flex-end"
                      mt={1}
                      onPress={() =>
                        navigation.navigate("Auth", {
                          screen: "ForgotPassword",
                        })
                      }
                    >
                      Quên Mật Khẩu
                    </Link>
                  </FormControl>
                  <VStack space={2}>
                    <SingleButton
                      onPress={handleSubmit}
                      name="Next"
                      iconName="arrow-right-circle"
                    >
                      Đăng Nhập
                    </SingleButton>

                    <HStack justifyContent="center" alignItem="center">
                      <IconButton
                        variant="unstyled"
                        startIcon={
                          <Icon
                            as={<MaterialCommunityIcons name="facebook" />}
                            color="muted.700"
                            size="sm"
                          />
                        }
                        onPress={facebookOnPressButton}
                      />
                      <IconButton
                        variant="unstyled"
                        startIcon={
                          <Icon
                            as={<MaterialCommunityIcons name="google" />}
                            color="muted.700"
                            size="sm"
                          />
                        }
                        onPress={googleOnPressButton}
                      />
                      <IconButton
                        variant="unstyled"
                        startIcon={
                          <Icon
                            as={<MaterialCommunityIcons name="apple" />}
                            color="muted.700"
                            size="sm"
                          />
                        }
                        onPress={appleOnPressButton}
                      />
                    </HStack>
                  </VStack>
                </VStack>
              )}
            </Formik>

            <HStack justifyContent="center">
              <Text fontSize="sm" color="muted.700" fontWeight={400}>
                Bạn chưa có tài khoản?{" "}
              </Text>
              <Link
                _text={{ color: "cyan.500", bold: true, fontSize: "sm" }}
                onPress={() =>
                  navigation.navigate("Auth", { screen: "SignUp" })
                }
              >
                Đăng Ký
              </Link>
            </HStack>
          </VStack>
        </KeyboardAvoidingView>
      </Layout>
    );
  };

  async function facebookOnPressButton() {
    // await Auth.federatedSignIn({
    //   provider: CognitoHostedUIIdentityProvider.Facebook,
    // });
  }
  async function googleOnPressButton() {
    // await Auth.federatedSignIn({
    //   provider: CognitoHostedUIIdentityProvider.Google,
    // });
  }
  async function appleOnPressButton() {
    // await Auth.federatedSignIn({
    //   provider: CognitoHostedUIIdentityProvider.Apple,
    // });
  }

  return loading ? (
    <Center flex={1}>
      <Spinner size="sm" />
    </Center>
  ) : (
    <RenderContent />
  );
}

