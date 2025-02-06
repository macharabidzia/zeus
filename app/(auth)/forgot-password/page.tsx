"use client";

import AuthCard from "@/components/AuthCard";
import React from "react";

const ForgotPassword = () => {
  const title = "Forgot Password";
  const defaultValues = {
    newPassword: "",
    repeatPassword: "",
  };

  const handleForgotPassword = (): void => {};
  return (
    <AuthCard
      title={title}
      defaultValues={defaultValues}
      onSubmit={handleForgotPassword}
    />
  );
};

export default ForgotPassword;
