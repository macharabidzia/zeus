"use client";
import AuthCard from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OtherRegister = () => {
  const defaultValues = {};
  const title = "Register on Zeussing";

  const handleOtherRegister = () => {};

  return (
    <AuthCard
      className="hidden"
      title={title}
      defaultValues={defaultValues}
      onSubmit={handleOtherRegister}
    >
      <div className="flex flex-col gap-6 py-12">
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
        <Button className="bg-white w-full rounded-2xl text-sm shadow-md px-6">
          Register with Other Method
        </Button>
      </div>
    </AuthCard>
  );
};

export default OtherRegister;
