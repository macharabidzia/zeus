"use client";
import AuthCard from "@/components/AuthCard";
import React from "react";

const Welcome = () => {
  const defaultValues = {};

  const handleLogin = () => {};
  return (
    <AuthCard
      type="WELCOME"
      className="gap-14 py-16 "
      onSubmit={handleLogin}
      defaultValues={defaultValues}
      title="Welcome on Zeussing"
    />
  );
};

export default Welcome;
