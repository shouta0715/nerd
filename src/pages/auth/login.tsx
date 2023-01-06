import { NextPage } from "next";
import React from "react";

import { SignIn } from "../../components/pages/auth/SignIn";

const Login: NextPage = () => (
  <div className=" h-screen w-screen">
    <div className="container mx-auto flex h-full items-center  justify-center md:py-10">
      <SignIn />
    </div>
  </div>
);

export default Login;
