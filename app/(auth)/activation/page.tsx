"use client";
import AuthCard from "@/components/AuthCard";
import React from "react";

const Activation = () => {
  const title = "Profile Activation";
  const defaultValues = {};

  const handleActivation = (): void => {};
  return (
    <AuthCard
      defaultValues={defaultValues}
      onSubmit={handleActivation}
      title={title}
      type="ACTIVATION"
    />
  );
};

export default Activation;
