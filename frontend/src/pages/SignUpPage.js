import React from "react";
import SignUp from "../components/auth/SignUp";
import Header from "../components/shared/Header";
import AppAppBar from "../components/shared/AppAppBar";

function SignUpPage() {
  return(
    <>
      <Header title="Sign In" link="/sign-in"/>
      <SignUp />
    </>
  ) 
}

export default SignUpPage;
