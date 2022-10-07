import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  useColorModeValue,
  useColorMode,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  KeyboardAvoidingView,
  HStack,
  Divider,
} from "native-base";
import ContentBox from "../../../components/ContentBox";
import Smartie from "../../../components/Smartie";
import { SpacerS } from "../../../styles/Spacing";
// import { Auth } from "aws-amplify";
import * as Keychain from "react-native-keychain";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
// import { useRecoilState } from "recoil";
// import { userLocalState } from "../../../atoms/User";
import Layout from "../../../components/Layout";

export default function ForgotPasswordSubmitScreen({ navigation }) {
  const [message, setMessage] = React.useState(
    "Bạn điền thông tin xác nhận nhé!"
  );
  const [messageStatus, setMessageStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  // const [userLocal, setUserLocal] = useRecoilState(userLocalState);

  const { colors } = useTheme();

  const _onPress = async (values: {
    email: string;
    password: string;
    code: string;
  }): Promise<void> => {
    setLoading(true);
    try {
      const { email, code, password } = values;
      // await Auth.forgotPasswordSubmit(email, code, password);
      // // await Keychain.setInternetCredentials("auth", email, password);
      // await Auth.signIn(email, password);
      // setUserLocal({ isSignedIn: true });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      // setMessage(err.message);
      setMessageStatus("error");
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
              code: "",
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(values): Promise<void> => _onPress(values)}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              code: Yup.string().min(6).required(),
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
                    color={colors.text}
                  />
                  <FormControl.ErrorMessage>
                    {errors.email}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      color: "muted.700",
                      fontSize: "sm",
                      fontWeight: 600,
                    }}
                  >
                    Điền Mã Xác Nhận
                  </FormControl.Label>
                  <Input
                    name="code"
                    value={values.code}
                    onChangeText={handleChange("code")}
                    onBlur={(): void => setFieldTouched("code")}
                    placeholder="123456"
                    touched={touched}
                    errors={errors}
                    autoCapitalize="none"
                    placeholderTextColor={"muted.400"}
                    color={colors.text}
                  />
                  <FormControl.ErrorMessage>
                    {errors.code}
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
                    color={colors.text}
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
                    color={colors.text}
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
                  Xác Nhận
                </Button>
              </VStack>
            )}
          </Formik>
        </VStack>
      </KeyboardAvoidingView>
    </Layout>
  );
}
