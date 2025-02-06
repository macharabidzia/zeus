"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  name: string;
  required?: boolean;
  register: any;
  id: string;
  // ... any other props for the input (placeholder, etc.)
}

const PasswordInput = ({
  name,
  required,
  register,
  id,
  ...props
}: PasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative flex items-center rounded-md shadow-sm">
      <Input
        className="flex-grow pr-10 py-2 w-full border-none bg-transparent focus:outline-none focus:ring-0"
        style={{ paddingRight: "3rem" }} // Adjust as needed
        {...register(name, { required })}
        name={name}
        id={name}
        type={passwordVisible ? "text" : "password"}
        {...props}
      />
      {passwordVisible ? (
        <Eye
          onClick={togglePasswordVisibility}
          className="absolute right-3 h-5 w-5 text-gray-500 cursor-pointer z-10"
          aria-label="Hide password"
        />
      ) : (
        <EyeOff
          onClick={togglePasswordVisibility}
          className="absolute right-3 h-5 w-5 text-gray-500 cursor-pointer z-10"
          aria-label="Show password"
        />
      )}
    </div>
  );
};

export default PasswordInput;
