"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button } from "@/components/atoms";
import { EmployeeForm } from "@/components/organisms";

// types
import { FormValues } from "@/types";

// utils
import { employeeFormSchema } from "@/utils/validationSchema";

// styles
import "@/styles/employee.css";
import useStore from "@/store";

const AddEmployee: FC = () => {
  const { isLoading, addEmployee, setIsLoading } = useStore();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

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
              <EmployeeForm methods={methods} />
              {!isLoading && (
                <Button
                  type="submit"
                  className="btn w-full"
                  isLoading={isLoading}
                >
                  Add
                </Button>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
