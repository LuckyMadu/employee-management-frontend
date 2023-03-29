"use client";

import { FC, useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { EmployeeForm } from "@/components/organisms";

// types
import { FormValues } from "@/types";

// utils
import { employeeFormSchema } from "@/utils/validationSchema";

// store
import useStore from "@/store";

// styles
import "@/styles/employee.css";

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
              <EmployeeForm
                methods={methods}
                isLoading={isLoading}
                buttonText="Add"
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
