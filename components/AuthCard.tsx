"use client";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import PasswordInput from "./PasswordInput";
import { Checkbox } from "./ui/checkbox";

enum fieldValueEnum {
  "firstname" = "First Name",
  "lastname" = "Last Name",
  "email" = "Email Address",
  "oldpassword" = "Old Password",
  "newpassword" = "New Password",
  "repassword" = "Repeat Password",
  "password" = "Password",
}

interface Props<T extends FieldValues> {
  defaultValues: T;
  onSubmit: (data: T) => void;
  title: string;
  children?: React.ReactNode;
  className?: string;
  type?: "SIGN_UP" | "SIGN_IN" | "RECOVER" | "ACTIVATION" | "WELCOME";
}

enum Pager {
  "SIGN_UP" = "Register",
  "SIGN_IN" = "Save",
  "RECOVER" = "Recover",
  "ACTIVATION" = "Activate Account",
  "WELCOME" = "Login",
}

const AuthCard = <T extends FieldValues>({
  defaultValues,
  title,
  children = null,
  type = "SIGN_IN",
  className = "",
  ...props
}: Props<T>) => {
  const { register, handleSubmit, watch, reset, setValue } = useForm();

  const submitForm = (values: any) => {
    console.log(values);
    props.onSubmit(values);
  };
  const capitalizeFirstLetter = (inputName: string) => {
    return inputName.charAt(0).toUpperCase() + inputName.slice(1);
  };

  return (
    <Card className="w-[480px] h-fit min-h-[288px] shadow-md font-montserrat font-normal">
      <CardHeader className="flex flex-row items-end">
        <CardTitle>
          <Image
            width={62}
            height={72}
            alt="zeus auth logo"
            src="/images/zeus.png"
          />
        </CardTitle>
        <CardDescription className="font-montserrat font-normal text-md text-muted ml-8">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-[288px] m-auto">
        <form onSubmit={handleSubmit(submitForm)}>
          {Object.keys(defaultValues)
            .filter((value) => value !== "check")
            .map((field: string, i: number) => (
              <div key={i} className="grid gap-2">
                <Label
                  className="font-inter font-thin text-xs mt-2 text-muted"
                  htmlFor={field}
                >
                  <span className=" text-lg text-red-600">*</span>
                  {fieldValueEnum[field as keyof typeof fieldValueEnum]}
                </Label>
                {field === "password" ? (
                  <PasswordInput
                    name={field}
                    id={field}
                    register={register}
                    required
                  />
                ) : (
                  <Input
                    {...register(field, { required: true })}
                    name={field}
                    id={field}
                    type={field}
                    required
                  />
                )}
              </div>
            ))}
          {Object.keys(defaultValues).filter((value) => value === "check")
            .length > 0 && (
            <div className="flex flex-row gap-2 text-sm my-4">
              <Checkbox {...register("check", { required: true })} />
              <p className="text-xs">
                I agree with all{" "}
                <span className="text-lightblue">Terms and Conditions</span> and
                &nbsp;
                <span className="text-lightblue">Privacy Policies</span>
              </p>
            </div>
          )}
          <div
            className={`${className} flex justify-between flex-col gap-4 max-w-[288px] text-center m-auto my-4`}
          >
            <Button
              type="submit"
              className="flex self-center justify-center border-primary bg-silent w-full  text-primary rounded-2xl"
              variant="outline"
            >
              {Pager[type]}
            </Button>
            {(type === "SIGN_IN" || type === "WELCOME") && (
              <Button
                className="flex self-center justify-center w-full rounded-2xl shadow-md"
                variant="outline"
              >
                {type === "WELCOME" ? "Register" : "Password Recovery"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between flex-col gap-4 max-w-[288px] text-center m-auto">
        {children}
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
