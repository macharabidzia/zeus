"use client";
import AuthCard from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import React from "react";

const CompanyRegister = () => {
  const title = "Register";
  const defaultValues: UserFormRecovery = {
    firstname: "",
    lastname: "",
    email: "",
    oldpassword: "",
    newpassword: "",
    repassword: "",
  };

  const handleRegister = () => {};

  return (
    <AuthCard
      title={title}
      defaultValues={defaultValues}
      onSubmit={handleRegister}
    >
      <Button className="w-full bg-white shadow-none">
        Deactivate My Account
      </Button>
    </AuthCard>
  );
};

export default CompanyRegister;
