import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  // useColorModeValue,
  // useColorMode,
  // Box,
  // Text,
  // Heading,
  VStack,
  FormControl,
  Input,
  // Link,
  Button,
  Icon,
  IconButton,
  KeyboardAvoidingView,
  HStack,
  // Divider,
  // Pressable,
} from "native-base";
import ContentBox from "../../../components/ContentBox";
import Smartie from "../../../components/Smartie";
import { SpacerS } from "../../../styles/Spacing";
// import { Auth } from "aws-amplify";
import * as Keychain from "react-native-keychain";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "react-native-paper";
// import { ScrollView } from "react-native";
import Layout from "../../../components/Layout";
import { supabase } from "../../../lib/supabase";

export default function SignUpScreen({ navigation, route }) {
  const [message, setMessage] = React.useState(
    "Bạn điền thông tin đăng ký nhé!"
  );
  const [messageStatus, setMessageStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const { colors } = useTheme();

  const _onPress = async (values: {
    email: string;
    password: string;
    passwordConfirmation: string;
  }): Promise<void> => {
    const { email, password, passwordConfirmation } = values;
    if (password !== passwordConfirmation) {
      setMessage("2 mật khẩu không giống nhau!");
      setMessageStatus("error");
    } else {
      setLoading(true);
      setMessage("");
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log(`signup user info: ${JSON.stringify(user, undefined, 2)}`);

      if (user) {

        navigation.navigate("Auth", {
          screen: "SignUpConfirm",
        });

      }

      if (error) {
        setErrorMessage(error.message);
        setMessageStatus("error");
        setLoading(false);
      }
    }
  };

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
              passwordConfirmation: "",
            }}
            onSubmit={(values): Promise<void> => _onPress(values)}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required(),
              passwordConfirmation: Yup.string().min(6).required(),
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
                  <FormControl.Label>Email</FormControl.Label>
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
                <FormControl isRequired isInvalid={"password" in errors}>
                  <FormControl.Label>Mật Khẩu</FormControl.Label>
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
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={"PasswordConfirmation" in errors}
                >
                  <FormControl.Label>Xác Nhận Mật Khẩu</FormControl.Label>
                  <Input
                    name="passwordConfirmation"
                    value={values.passwordConfirmation}
                    onChangeText={handleChange("passwordConfirmation")}
                    onBlur={(): void => setFieldTouched("passwordConfirmation")}
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
                    {errors.passwordConfirmation}
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  colorScheme="cyan"
                  _text={{ color: "white" }}
                  onPress={handleSubmit}
                >
                  Đăng Ký
                </Button>
              </VStack>
            )}
          </Formik>
          <VStack space={1} mt={1}>
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
                onPress={() => navigation.navigate("SignUpConfirm")}
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
              />
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </Layout>
  );
}
