import React, { useContext } from "react";
import { userRegister } from "../../App";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function Login() {
  const { register } = useContext(userRegister);

  return <>{register ? <RegisterPage /> : <LoginPage />}</>;
}
