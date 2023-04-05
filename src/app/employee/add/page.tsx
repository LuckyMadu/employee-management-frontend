"use client";

import { FC, useEffect } from "react";
import Link from "next/link";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button } from "@/src/components/atoms";
import { EmployeeForm } from "@/src/components/organisms";

// types
import { FormValues } from "@/src/types";

// utils
import { employeeFormSchema } from "@/src/utils/validationSchema";

// store
import useStore from "@/src/store";

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
      <div className="footer-btn">
        <Link href={"/employee/list"}>
          <Button className="btn btn-info">Go back to employee list</Button>
        </Link>
      </div>
    </>
  );
};

export default AddEmployee;
