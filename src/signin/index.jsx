import React from "react";
import Slider from "./Slider";
import LoginForm from "./Login";

export default function Signin() {
  return (
    <>
      <div className="flex">
        <Slider />
        <LoginForm />
      </div>
    </>
  );
}
