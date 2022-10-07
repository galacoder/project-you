import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  // NativeBaseProvider,
  // Box,
  // Text,
  // Heading,
  VStack,
  FormControl,
  Input,
  // Link,
  Button,
  // Icon,
  KeyboardAvoidingView,
  // IconButton,
  // HStack,
  // Divider,
} from "native-base";
import ContentBox from "../../../components/ContentBox";
import Smartie from "../../../components/Smartie";
import { SpacerS } from "../../../styles/Spacing";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Auth } from "aws-amplify";
import { useTheme } from "react-native-paper";
import Layout from "../../../components/Layout";
import { supabase } from "../../../lib/supabase";
import { useRealtime } from "react-supabase";

export default function ForgotPasswordScreen({ navigation }) {
  const [message, setMessage] = React.useState(
    "Bạn điền thông tin xác nhận nhé!"
  );
  const [messageStatus, setMessageStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { colors } = useTheme();

  const _onPress = async (values: { email: string }): Promise<void> => {
    setLoading(true);
    const { email } = values;
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );

    console.log(
      `Here is the data obj resetpassword: ${JSON.stringify(
        data,
        undefined,
        2
      )}`
    );

    data &&
      navigation.navigate("Auth", {
        screen: "ForgotPasswordSubmit",
        values,
      });

    setLoading(false);
    setMessage(error?.message);
    setMessageStatus("error");
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
            }}
            onSubmit={(values): Promise<void> => _onPress(values)}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
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
                    color={colors.text}
                  />
                  <FormControl.ErrorMessage>
                    {errors.email}
                  </FormControl.ErrorMessage>
                </FormControl>
                <VStack space={6}></VStack>
                <Button
                  colorScheme="cyan"
                  _text={{ color: "white" }}
                  onPress={handleSubmit}
                >
                  Gửi Email Xác Nhận!
                </Button>
              </VStack>
            )}
          </Formik>
        </VStack>
      </KeyboardAvoidingView>
    </Layout>
  );
}
