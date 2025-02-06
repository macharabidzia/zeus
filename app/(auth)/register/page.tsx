"use client";
import AuthCard from "@/components/AuthCard";
import React from "react";

const Register = () => {
  const title = "Register";
  const defaultValues: UserFormRegister = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    check: false,
  };

  const handleRegister = (): void => {};

  return (
    <AuthCard
      type={"SIGN_UP"}
      title={title}
      defaultValues={defaultValues}
      onSubmit={handleRegister}
    />
  );
};

export default Register;
