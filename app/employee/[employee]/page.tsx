"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button } from "@/components/atoms";
import { EmployeeForm } from "@/components/organisms";

// types
import { FormValues, IEmployeeEditProps } from "@/types";

// utils
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
              <EmployeeForm methods={methods} />
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
