"use client";
import AuthCard from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Login = () => {
  const defaultValues: UserFormLogin = {
    email: "",
    password: "",
  };

  const handleLogin = (): void => {};
  return (
    <AuthCard
      type="SIGN_IN"
      onSubmit={handleLogin}
      defaultValues={defaultValues}
      title="Welcome on Zeussing"
    >
      <Button className="bg-white w-full rounded-2xl text-sm shadow-md">
        <Image
          width={16}
          height={16}
          alt="linkedin icon"
          src="/icons/in.png"
        ></Image>
        Login with Linkedin
      </Button>
      <Button className="bg-white w-full rounded-2xl text-sm shadow-md">
        <Image
          width={16}
          height={16}
          alt="facebook icon"
          src="/icons/fb.png"
        ></Image>
        Login with Facebook
      </Button>
      <Button className="bg-white w-full rounded-2xl text-sm shadow-md">
        <Image
          width={16}
          height={16}
          alt="google icon"
          src="/icons/google.png"
        ></Image>
        Login with Google
      </Button>
    </AuthCard>
  );
};

export default Login;
