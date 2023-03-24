"use client";

import { useFormContext } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface InputProps {
  name: keyof FormData;
  label: string;
  [key: string]: unknown;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={name}
        {...register(name)}
        {...rest}
      />
      {errors[name] && <span>{errors[name]!.message}</span>}
    </div>
  );
};
