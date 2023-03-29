"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button, Dropdown, Input } from "@/components/atoms";

// types
import { FormValues, IEmployeeEditProps } from "@/types";

// utils
import { GENDER } from "@/constants";
import { employeeFormSchema } from "@/utils/validationSchema";

// styles
import "@/styles/employee.css";
import useStore from "@/store";

const EditEmployee: FC<IEmployeeEditProps> = ({
  params: { employee: employeeId },
}) => {
  const { employee, isLoading, addEmployee, setSingleEmployee, setIsLoading } =
    useStore();

  const methods = useForm<FormValues>({
    resolver: yupResolver(employeeFormSchema),
  });

  const memoizedMethods = useMemo(
    () => ({ setValue: methods.setValue }),
    [methods.setValue]
  );

  useEffect(() => {
    setSingleEmployee(employeeId);

    return () => {
      setIsLoading(false);
    };
  }, [isLoading, setIsLoading, setSingleEmployee, employeeId]);

  useEffect(() => {
    if (employee) {
      memoizedMethods.setValue("firstName", employee.firstName);
      memoizedMethods.setValue("lastName", employee.lastName);
      memoizedMethods.setValue("email", employee.email);
      memoizedMethods.setValue("phone", employee.phone);
      memoizedMethods.setValue("gender", employee.gender);
    }
  }, [employee, memoizedMethods]);

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
      <h1 className="header-title">Edit Employee</h1>
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
                    type="text"
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
              {!isLoading && (
                <Button
                  type="submit"
                  className="btn w-full"
                  isLoading={isLoading}
                >
                  Update
                </Button>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
