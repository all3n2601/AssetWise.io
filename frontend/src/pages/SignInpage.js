import React from "react";
import SignIn from "../components/auth/SignIn";
import Header from "../components/shared/Header";
import AppAppBar from "../components/shared/AppAppBar";

function SignInPage() {
  return (
    <>
      <Header title="Sign Up" link="/sign-up"/>
      <SignIn />
    </>
  );
}

export default SignInPage;
