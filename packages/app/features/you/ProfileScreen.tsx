// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import { SpacerL, SpacerM } from "../../styles/Spacing";
import Layout from "../../components/Layout";
import SingleButton from "../../components/SingleButton";

import { supabase } from "../../lib/supabase";


export default function Profile({ navigation }: any) {
  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(
        `here is the logout error: ${JSON.stringify(error, undefined, 2)}`
      );
    }
  }

  return (
    <Layout>
      <Smartie gamiIndicators={true} />
      <SpacerM />
      <ContentBox text="This is Profile page" />
      <SpacerL />

      <SingleButton name="Đăng Xuât" onPress={() => signOut()} />
    </Layout>
  );
}
