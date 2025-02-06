"use client";
import AuthCard from "@/components/AuthCard";
import React from "react";

const Recover = () => {
  const title = "Forgot Password";
  const defaultValues = {
    email: "",
  };

  const cardHandler = () => {};
  return (
    <AuthCard
      type="RECOVER"
      className="pb-14 pt-6"
      onSubmit={cardHandler}
      title={title}
      defaultValues={defaultValues}
    />
  );
};

export default Recover;
