// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useEffect, useState } from "react";

import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";

import Smartie from "../../components/Smartie";
import Spinner from "../../components/Spinner";

// import { useRecoilValue } from "recoil";

// import { UserNumerology, UserToken } from "../../src/models";
// import { Auth, DataStore } from "aws-amplify";
// import { currentUserSubState } from "../../atoms/AuthUser";
import { Input, VStack, FormControl, KeyboardAvoidingView } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";

// import { userLocalState } from "../../atoms/User";
import { Calculation } from "../../lib/numCalculator";
import checkUserFeatureIsUnlockReturnObj from "../../lib/checkUserFeatureIsUnlockReturnObj";
import Layout from "../../components/Layout";
import { useAppContext } from "../../context/appContext";
import { supabase } from "../../lib/supabase";
// import {
//   useUser,
//   useGamificationIndicators,
//   useCurrentUserNumInfo,
// } from "../../hooks/";

function CalculateScreen({ navigation }: any) {
  //Recoil Hooks
  // const currentUserSub = useRecoilValue(currentUserSubState);
  // const userFirstName = useRecoilValue(userLocalState);

  //Hooks
  const [messageStatus, setMessageStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // const {gamificationIndicators} = useGamificationIndicators();
  // const { user, userId } = useUser()
  // const currentUserNumInfo = useCurrentUserNumInfo()
  const userId = supabase.auth.user()?.id;
  const {
    tokens,
    error: tokenError,
    loadingInitial: tokensLoadingInitial,
    currentUserNumInfo: userNumInfo,
    numInfoError,
    numInfoLoadingInitial,
  }: any = useAppContext();

  const [gamificationIndicators, setGamificationIndicators] = useState(tokens ? tokens : [{
    heart_balance: 0,
    crown_balance: 0
  }]);

  const [currentUserTokenID, setCurrentUserTokenID] = React.useState("");

  console.log(
    `gamificationIndicators hook: ${JSON.stringify(gamificationIndicators)}`
  );
  console.log(`currentUserTokenID hook: ${JSON.stringify(currentUserTokenID)}`);

  // console.log(`currentUserNumInfo hook: ${JSON.stringify(currentUserTokenID)}`);

  const [message, setMessage] = React.useState("");


  const [show, setShow] = useState(false)

  useEffect(() => {
    //set the timer for 0.3 seconds before all the components are rendered
    const timeout = setTimeout(() => {
      setShow(true)
    }, 200)

    return () => clearTimeout(timeout)
  }, [show])


  useEffect(() => {
    setSmartieDefaultMessage(gamificationIndicators);
    setCurrentUserTokenID(gamificationIndicators[0]?.id);
  }, [tokens]);

  // React.useEffect(() => {
  //   //Try to set the hooks when the Page runs for the first time
  //   //Get the Current User Num Info from Datastore
  //   getCurrentUserNumDataStoreInfos(userId);
  //   getCurrentUserTokenInfo(userId);

  //Subscribe to Current User Num Info from Datastore
  // const subscription = DataStore.observe(UserNumerology).subscribe(
  //   (userNumInfo) => {
  //     console.log("UserToken Info SUBSCRIPTION_UPDATE", userNumInfo);
  //     console.log(userNumInfo.model, userNumInfo.opType, userNumInfo.element);
  //     getCurrentUserNumDataStoreInfos(userId);
  //   }
  // );
  // subscription.unsubscribe();
  // }, []);

  // React.useEffect(() => {
  //   const subscription = supabase
  //     .from(`you_user_numerology:id=eq.${userId}`)
  //     .on("UPDATE", (payload) => {
  //       console.log("Change received!", payload);
  //       getCurrentUserNumDataStoreInfos(userId);
  //     })
  //     .subscribe();

  //   return () => {
  //     supabase.removeSubscription(subscription);
  //   };
  // }, []);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // The screen is focused
  //     // Call any action
  //     // Check to unlock or locked the contentcc
  //     getCurrentUserNumDataStoreInfos(userId);
  //     getCurrentUserTokenInfo(userId);

  //     return unsubscribe;
  //   });
  // }, [navigation]);

  // React.useEffect(() => {
  //   const subscription = supabase
  //     .from(`you_user_token:user_id=eq.${userId}`)
  //     .on("UPDATE", (payload) => {
  //       console.log("Change received!", payload);
  //       // handleNewOrUpdateGamificationIndicators(payload.new)
  //       setGamificationIndicators(payload.new);
  //     })
  //     .subscribe();
  //   // console.log(`gamification indicators from original hook: ${JSON.stringify(gamificationIndicators, undefined, 2)}`)

  //   return () => {
  //     supabase.removeSubscription(subscription);
  //   };

  // const subscription = supabase
  //   .from(`you_user_token:id=eq.${user.id}`)
  //   .on('UPDATE', payload => {
  //     console.log('Change received!', payload)
  //     setGamificationIndicators(payload.new)
  //   })
  //   .subscribe()

  // return () => supabase.removeSubscription(subscription)

  // const subscriptions = gamificationIndicators.map((currentUserTokenInfo) =>
  //   DataStore.observe(UserToken, currentUserTokenInfo.id).subscribe((msg) => {
  //     console.log(
  //       `gamificationIndicators SUBSCRIPTION_UPDATE, ${JSON.stringify(msg)}}`
  //     );
  //     if (msg.opType === "UPDATE") {
  //       setGamificationIndicators((currentGamiIndicators) =>
  //         currentGamiIndicators.map((item) => {
  //           if (item.crownBalance !== msg.element.crownBalance) {
  //             console.log("I got different id in gamification indicators");
  //             return item;
  //           }
  //           return {
  //             ...item,
  //             ...msg.element,
  //           };
  //         })
  //       );
  //     }
  //   })
  // );

  // return () => {
  //   subscriptions.forEach((sub) => sub.unsubscribe());
  // };
  // }, [gamificationIndicators]);

  const RenderContent = () => {
    // Yup.addMethod(Yup.date, "format", function (formats, parseStrict) {
    //   return this.transform(function (value, originalValue) {
    //     value = Moment(originalValue, formats, parseStrict);
    //     return value.isValid() ? value.toDate() : new Date("");
    //   });
    // });

    return (
      <Suspense fallback={<Spinner />}>
        <Layout>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={40}>
            <Suspense fallback={<Spinner />}>
              {tokens && <Smartie
                gamiIndicators={true}
                heartBalance={gamificationIndicators[0]?.heart_balance}
                crownBalance={gamificationIndicators[0]?.crown_balance}
              />
              }
            </Suspense>
            {loading ? (
              <Spinner />
            ) : (
              <ContentBox text={message} status={messageStatus} />
            )}

            <VStack space={2} mt={5}>
              <Formik
                initialValues={{
                  inputFullName: "",
                  inputDOB: "",
                }}
                onSubmit={(values): Promise<void> => onCalculateBtnPress(values)}
                validate={validate}
                validationSchema={Yup.object().shape({
                  inputFullName: Yup.string()
                    .required()
                    .min(8, "VD: Lê Ngô Bảo Sang")
                    .max(30, "Dài Quá"),
                  // dob: Yup.date().required().format("DD/MM/YYYY", true),
                  inputDOB: Yup.string().required().min(9, "VD: 13/09/1989"),
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
                    <FormControl isRequired isInvalid={"inputFullName" in errors}>
                      <FormControl.Label
                        _text={{
                          color: "blue.200",
                          fontSize: "sm",
                          fontWeight: 600,
                        }}
                      >
                        Họ Tên
                      </FormControl.Label>
                      <Input
                        name="inputFullName"
                        value={values.inputFullName}
                        onChangeText={handleChange("inputFullName")}
                        onBlur={(): void => setFieldTouched("inputFullName")}
                        placeholder="Họ tên đầy đủ"
                        touched={touched}
                        errors={errors}
                        autoCapitalize="none"
                        placeholderTextColor={"muted.400"}
                        isDisabled={
                          gamificationIndicators[0].heart_balance === 0
                            ? true
                            : false
                        }
                        color={"coolGray.50"}
                        py={'3'}
                        fontSize={'md'}
                      />
                      <FormControl.ErrorMessage>
                        {errors.inputFullName}
                      </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl mb={5} isRequired isInvalid={"dob" in errors}>
                      <FormControl.Label
                        _text={{
                          color: "blue.200",
                          fontSize: "sm",
                          fontWeight: 600,
                        }}
                      >
                        Ngày Tháng Năm Sinh
                      </FormControl.Label>
                      <Input
                        name="inputDOB"
                        value={values.inputDOB}
                        onChangeText={handleChange("inputDOB")}
                        onBlur={(): void => setFieldTouched("inputDOB")}
                        placeholder="13/09/1989"
                        touched={touched}
                        errors={errors}
                        autoCapitalize="none"
                        placeholderTextColor={"muted.400"}
                        isDisabled={
                          gamificationIndicators[0]?.heart_balance === 0
                            ? true
                            : false
                        }
                        color={"coolGray.50"}
                        py={'3'}
                        fontSize={'md'}
                      />
                      <FormControl.ErrorMessage>
                        {errors.inputDOB}
                      </FormControl.ErrorMessage>
                    </FormControl>
                    <VStack space={0}>
                      <SingleButton
                        onPress={
                          gamificationIndicators[0]?.heart_balance === 0
                            ? () =>
                              navigation.navigate("Root", {
                                screen: "PaymentScreen",
                                params: {
                                  paramCrownAmount: 1,
                                  paramCategoryName: "Tính Thần Số Học",
                                },
                              })
                            : handleSubmit
                        }
                        name={
                          gamificationIndicators[0]?.heart_balance === 0
                            ? "Mua Thêm Vương Miện"
                            : "Tính Kết Quả Ngay"
                        }
                        iconName="calculator"
                      ></SingleButton>
                    </VStack>
                  </VStack>
                )}
              </Formik>
            </VStack>
          </KeyboardAvoidingView>
        </Layout>
      </Suspense>
    );
  };

  async function onCalculateBtnPress(values: {
    inputFullName: string;
    inputDOB: string;
  }): Promise<void> {
    setMessage("Thinking...");
    setLoading(true);
    try {
      //Get fullName, dob from the FORM
      const { inputDOB, inputFullName } = values;

      //Await for the UserNumData & find the UserDOB
      decideWhatToDoThenExecute(inputDOB, inputFullName);

      //Done
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error) {
        setMessage(error);
        setMessageStatus("error");
        console.error(error);
      }
    }
  }

  async function decideWhatToDoThenExecute(
    inputDOB: string,
    inputFullName: string
  ) {
    //Calculate the User Numerology and destruct the Num Results
    const { rulingNumber } = await calculateUserNum(inputDOB, inputFullName);

    //If there is no UserNum info on Datastore > saveToDataStore
    const response = await getCurrentUserNumDataStoreInfos(userId);
    if (response === undefined) {
      console.log("I am here at currentUserNumDataStore is undefined");
      if (rulingNumber) {
        console.log("I found rulingNumber is > 0");
        //Save the UserNum result to Database
        saveToDataStore(inputDOB, inputFullName, userId);

        //Done
        setLoading(false);
      } else {
        setMessage("Calculator Error. Please Reinput!");
        setMessageStatus("error");
        setLoading(false);
        return;
      }
      //Navigate to the Result Screen
      navigateToResultScreen(inputDOB, inputFullName);
    }

    // If there is UserNum on DataStore > Process what to do next
    if (response) {
      console.log("I am here at currentUserNumDataStore is existed");

      //If doesn't find userDob > go ahead and save > navigate to Result Screen
      const currentUserDOB = await getCurrentUserDOB(inputDOB, userId);
      if (currentUserDOB === undefined) {
        console.log("I am here at currentUserDOB is undefined");
        if (rulingNumber) {
          console.log("I found rulingNumber is > 0");

          //Save the UserNum result to Database
          saveToDataStore(inputDOB, inputFullName, userId);

          //Update the UserToken
          updateUserTokenHeartBalance(tokens.id);

          //Navigate to Result Screen
          navigateToResultScreen(inputDOB, inputFullName);
        } else {
          console.log("I found rulingNumber is null");
          setMessage("Calculation Error. Please try again!");
        }

        // If foundUserDOB => Navigate to NumPersonDetailScreen
      } else {
        console.warn("UserDOB already exists in DataStore");
        console.log("UserDOB already exists in DataStore");

        navigateToResultScreen(inputDOB, inputFullName);
      }
    }
  }

  function calculateUserNum(inputDob: string, inputFullName: string) {
    return new Promise<{
      fullName?: string;
      dob?: string;
      rulingNumber?: number;
      outerExpressNumber?: number;
      soulUrgeNumber?: number;
      personalYearNumber?: number;
    }>((resolve, reject) => {
      const {
        fullName,
        dob,
        rulingNumber,
        outerExpressNumber,
        soulUrgeNumber,
        personalYearNumber,
      } = Calculation(inputDob, inputFullName);

      if (!rulingNumber) {
        return;
      }

      if (rulingNumber > 0) {
        console.log("-------Destruction from numlCalResult ------");
        console.log(
          `fullName: ${fullName}, dob: ${dob}, rulingNumber: ${rulingNumber}, outerExpressNumber: ${outerExpressNumber}, soulUrgeNumber: ${soulUrgeNumber}, personalYearNumber: ${personalYearNumber} `
        );
        console.log("----------------------------------------------");

        resolve({
          fullName,
          dob,
          rulingNumber,
          outerExpressNumber,
          soulUrgeNumber,
          personalYearNumber,
        });
      } else {
        reject("failed to get the calculation number");
      }
    });
  }

  async function getCurrentUserNumDataStoreInfos(userId: string) {
    // Get UserNum from Datastore
    console.log("I am here at getCurrentUserNumDataStoreInfo");
    // const getAuthUser = await Auth.currentAuthenticatedUser();
    // const userSub = getAuthUser.attributes.sub;
    // const response = (await DataStore.query(UserNumerology)).filter(
    //   (item) => item.sub === userSub
    // );
    let { data: you_user_numerology, error } = await supabase
      .from("you_user_numerology")
      .select("*")
      .eq("user_id", userId);

    return new Promise<UserNumerology[]>((resolve, reject) => {
      if (you_user_numerology) {
        // console.log(
        //   ` I am checking getCurrentUserNumDataStoreInfo > 0 and the data is : ${JSON.stringify(
        //     response
        //   )}`
        // );
        resolve(you_user_numerology);
      } else {
        reject(
          `I found an error on getCurrentUserNumDataStoreInfo, ${JSON.stringify(
            error,
            undefined,
            2
          )}`
        );
      }
    });
  }

  async function getCurrentUserDOB(dob: string, userId: string) {
    try {
      const response = await getCurrentUserNumDataStoreInfos(userId);

      const getUserDOB = response.find((item) => item.dob === dob)?.dob;
      console.log(`getUserDOB is ${getUserDOB}`);

      return new Promise((resolve, reject) => {
        if (getUserDOB || getUserDOB === undefined) {
          resolve(getUserDOB);
        } else {
          reject(`I can't find getUserDOB info`);
        }
      });
    } catch (error) {
      console.error(
        `I find an error while filterCurrentUserDataStoreDOB with err msg: ${error}`
      );
    }
  }

  async function getCurrentUserID(dob: string, userId: string) {
    const response = await getCurrentUserNumDataStoreInfos(userId);
    const getUserID = response.find((item) => item.dob === dob)?.id;

    return new Promise((resolve, reject) => {
      if (getUserID) {
        resolve(getUserID);
      } else {
        reject("There is an error while getUserID");
      }
    });
  }

  async function getCurrentUserFullName(dob: string, userId: string) {
    const response = await getCurrentUserNumDataStoreInfos(userId);
    const getUserFullName = response?.find(
      (item) => item.dob === dob
    )?.full_name;

    return new Promise((resolve, reject) => {
      if (getUserFullName) {
        resolve(getUserFullName);
      } else {
        reject("I got an error with getUserFullName");
      }
    });
  }

  async function getIsCurrentUserFeaturePaid(dob: string, userId: string) {
    const response = await getCurrentUserNumDataStoreInfos(userId);
    const getUserNum = response.find((item) => item.dob === dob);
    const isFeaturesUnlockedObj = checkUserFeatureIsUnlockReturnObj(getUserNum);

    return new Promise((resolve, reject) => {
      if (isFeaturesUnlockedObj) {
        resolve(isFeaturesUnlockedObj);
      } else {
        reject("There is an error while getUserNum");
      }
    });
  }

  async function saveToDataStore(
    dob: string,
    fullName: string,
    userId: string
  ) {
    setLoading(true);
    console.log("*****I am here at saveToDataStore*****");
    console.log("There is no userNum info yet, create NOW");
    console.warn("There is no userNum info yet, create NOW");

    // Get the User Num Info
    const {
      rulingNumber,
      outerExpressNumber,
      soulUrgeNumber,
      personalYearNumber,
    } = await calculateUserNum(dob, fullName);

    const { data, error } = await supabase.from("you_user_numerology").insert([
      {
        full_name: fullName.toUpperCase(),
        dob: dob,
        user_id: userId,
        ruling_number: rulingNumber,
        outer_express_number: outerExpressNumber,
        soul_urge_number: soulUrgeNumber,
        personal_year_number: personalYearNumber,
        is_ruling_number_paid: true,
        is_feng_shui_paid: false,
        is_outer_exp_number_paid: false,
        is_personal_year_paid: false,
        is_soul_urge_paid: false,
      },
    ]);

    if (data) {
      console.log(
        `save to DB successfully: ${JSON.stringify(data, undefined, 2)}`
      );
    }
    if (error) {
      console.log(
        `there is an error while saving to the db: ${JSON.stringify(
          error,
          undefined,
          2
        )}`
      );
    }
    setLoading(false);
  }

  async function navigateToResultScreen(dob: string, fullName: string) {
    console.log("*****I am here at navigateToResultScreen*****");

    // Get the UserNumInfo
    const {
      rulingNumber,
      outerExpressNumber,
      soulUrgeNumber,
      personalYearNumber,
    } = await calculateUserNum(dob, fullName);

    // Get the currentUserDOB, currentUserNumID, currentUserFullName
    const currentUserDOB = await getCurrentUserDOB(dob, userId);
    const currentUserNumID = await getCurrentUserID(dob, userId);
    const currentUserFullName = await getCurrentUserFullName(dob, userId);
    const currentUserNumInfo = await getIsCurrentUserFeaturePaid(dob, userId);

    // Wait for all the Promises before execute to the next screen
    Promise.all([
      currentUserDOB,
      currentUserNumID,
      currentUserFullName,
      currentUserNumInfo,
    ])
      .then((values) => {
        //Console log all the info for debugging
        consoleLogBeforeNavigate();

        //Navigate to the NumPersonDetail
        navigation.navigate("Root", {
          screen: "NumPersonDetailScreen",
          params: {
            paramDob: values[0],
            paramUserNumID: values[1],
            paramUserFullName: values[2],
            paramRulingNumber: rulingNumber,
            paramOuterExpressNumber: outerExpressNumber,
            paramSoulUrgeNumber: soulUrgeNumber,
            paramPersonalYearNumber: personalYearNumber,
            // paramIsRulingNumberPaid: values[3][1],
            // paramIsOuterExpNumPaid: values[3][2],
            // paramIsSoulUrgePaid: values[3][3],
            //TODO: Need to fix here so it can get the true and false from db 
            paramIsRulingNumberPaid: true,
            paramIsOuterExpNumPaid: false,
            paramIsSoulUrgePaid: false,
            //@ts-ignore
            paramIsPersonalYearPaid: values[3][4],

            //@ts-ignore
            paramIsFengShuiPaid: values[3][5],
          },
        });
        //Done
        setLoading(false);
        setMessage("Ready to load your info");

        function consoleLogBeforeNavigate() {
          console.log(
            `currentUserNumInfo: ${JSON.stringify(currentUserNumInfo)}`
          );
          console.log(`here allCurrentUserInfoPromise: ${values}`);

          console.log(
            "I am checking the currentUserNumID & currentUserFullName before sending to NumPersonDetail"
          );
          console.log(`currentUserNumID is : ${currentUserNumID}`);
          console.log(`currentUserFullName is : ${currentUserFullName}`);
          console.log(
            `allCurrentUserInfoPromise > currentUserNumID is : ${values[1]}`
          );
          console.log(
            `allCurrentUserInfoPromise > currentUserFullName is : ${values[2]}`
          );
        }
      })
      .catch((error) => {
        console.error(
          `I got an error message from allCurrentUserInfoPromise: ${error.message}`
        );
      });
  }

  function validate(values: any) {
    const { inputFullName, inputDOB } = values;
    const errors = {
      inputFullName: "",
      inputDOB: "",
    };

    if (!inputFullName) {
      errors.inputFullName = "Điền họ tên đầy giúp mình nhé";
    }
    if (!inputDOB) {
      errors.inputDOB = "Điền ngày sinh giúp mình nhé";
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(inputDOB))
      errors.inputDOB = "Bạn điền ngày sinh nhé";
  }

  // async function getCurrentUserTokenInfo(userId: string) {
  //   // Get UserNum from Datastore
  //   console.log("I am here at getCurrentUserTokenID");
  //   //Get Auth user sub from Amplify
  //   // const getAuthUser = await Auth.currentAuthenticatedUser();
  //   // const userSub = getAuthUser.attributes.sub;

  //   let { data: you_user_token, error } = await supabase
  //     .from("you_user_token")
  //     .select("*")
  //     .eq("user_id", userId);

  //   if (you_user_token) {
  //     console.log(
  //       `getCurrentUserTokenID is: ${JSON.stringify(
  //         you_user_token,
  //         undefined,
  //         2
  //       )}`
  //     );

  //     setGamificationIndicators(you_user_token);
  //     setSmartieDefaultMessage(you_user_token);
  //     setCurrentUserTokenID(you_user_token[0].id);
  //     return you_user_token;
  //   }
  //   if (error) {
  //     console.log(`there is an error while getCurrentUserTokenID: ${error}`);
  //   }

  //   // await DataStore.query(UserToken, (c) => c.userID("eq", userSub))
  //   //   .then((response) => {
  //   //     // setGamificationIndicators(response);
  //   //     setSmartieDefaultMessage(response);
  //   //     setCurrentUserTokenID(response[0].id);
  //   //   })
  //   //   .catch((error) => console.log(error));
  // }

  function setSmartieDefaultMessage([indicators]: any) {
    // console.log(`indicators: ${JSON.stringify(indicators)}`);
    if (indicators?.heartBalance === 0) {
      setMessage(`Bạn phải mua thêm Vươn Miệng thì mới search được`);
      setMessageStatus("error");
    } else {
      setMessage(
        `Bạn điền thông tin bên dưới để Smartie bắt đầu tính cho bạn nha!`
      );
      setMessageStatus("info");
    }
  }

  async function updateUserTokenHeartBalance(tokenId: number) {
    //Update the DataStore
    // const currentUserToken = await DataStore.query(
    //   UserToken,
    //   currentUserTokenID
    // );

    // const { data: getCurrent, error: getError } = await supabase
    //   .from("you_user_token")
    //   .select("id")
    //   .eq("id", currentUserTokenID);

    // if (getCurrent) {
    //   const update_heart_balance = (getCurrent.heart_balance -= 1);
    //   const update_heart_expense = (getCurrent.heart_expense += 1);

    //   const { data, error } = await supabase
    //     .from("you_user_token")
    //     .update({
    //       heart_balance: update_heart_balance,
    //       heart_expense: update_heart_expense,
    //     })
    //     .eq("id", currentUserTokenID);

    const { error: incrementError, data: incrementData } = await supabase.rpc(
      "increment_user_heart_token",
      { row_id: tokenId, amount: 1 }
    );

    const { error: decrementError, data: decrementData } = await supabase.rpc(
      "decrement_user_heart_token",
      { row_id: tokenId }
    );

    if (incrementData) {
      console.log(
        `data of updateUserTokenHeartExpense is: ${JSON.stringify(
          incrementData,
          undefined,
          2
        )}`
      );
    }

    if (decrementData) {
      console.log(
        `data of decrement_user_heart_balance : ${JSON.stringify(
          decrementData,
          undefined,
          2
        )}`
      );
    }

    if (incrementError) {
      console.log(
        `there is an error updateUserTokenHeartExpense is: ${JSON.stringify(
          incrementError,
          undefined,
          2
        )}`
      );
    }

    if (decrementError) {
      console.log(
        `there is an error while :updateUserTokenHeartBalance ${JSON.stringify(
          decrementError,
          undefined,
          2
        )}`
      );
    }
  }
  return (<>{show ? <RenderContent /> : <Spinner />
  }</>)
}

export default CalculateScreen;
