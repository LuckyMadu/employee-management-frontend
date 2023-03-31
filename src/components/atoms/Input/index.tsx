"use client";

import { useFormContext } from "react-hook-form";
import classNames from "classnames";

// types
import { FormValues, InputProps } from "@/src/types";

export const Input = ({ name, label, register, ...rest }: InputProps) => {
  const {
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={classNames("input-bar", {
          "border-red-500": errors[name],
        })}
        id={name}
        {...register(name)}
        {...rest}
      />
      <span className="text-red-800">
        {errors[name] && <span>{errors[name]!.message}</span>}
      </span>
    </div>
  );
};
