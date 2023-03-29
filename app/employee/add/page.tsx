"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button, Dropdown, Input } from "@/components/atoms";

// types
import { FormValues } from "@/types";

// utils
import { GENDER } from "@/constants";
import { employeeFormSchema } from "@/utils/validationSchema";

// styles
import "@/styles/employee.css";
import useStore from "@/store";

const AddEmployee: FC = () => {
  const { isLoading, addEmployee, setIsLoading } = useStore();

  const methods = useForm<FormValues>({
    resolver: yupResolver(employeeFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    const { firstName, lastName, email, phone, gender } = data;

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      gender,
    };
    addEmployee(payload);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <h1 className="header-title">Add Employee</h1>
      <div className="main-container">
        <div className="form-container">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid-container">
                <div className="input-container">
                  <Input
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Lahiru"
                    register={methods.register}
                  />
                </div>
                <div className="input-container">
                  <Input
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Amaratunga"
                    register={methods.register}
                  />
                </div>
              </div>
              <div className="grid-container">
                <div className="w-full px-3">
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="lahirua@swivelgroup.com.au"
                    register={methods.register}
                  />
                </div>
              </div>
              <div className="grid-container">
                <div className="input-container">
                  <Input
                    name="phone"
                    label="Phone Number"
                    type="number"
                    placeholder="+94 712 130 466"
                    register={methods.register}
                  />
                </div>
                <div className="input-container">
                  <Dropdown
                    name="gender"
                    label="Gender"
                    register={methods.register}
                    options={GENDER}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" isLoading={isLoading}>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
