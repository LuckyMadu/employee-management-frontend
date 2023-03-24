"use client";

import { useFormContext, UseFormRegister } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

interface InputProps {
  name: keyof FormData;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FormData>;
}

export const Input = ({ name, label, register, ...rest }: InputProps) => {
  const {
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
