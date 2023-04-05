"use client";

import { FC, useEffect, useMemo } from "react";
import Link from "next/link";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Button } from "@/src/components/atoms";
import { EmployeeForm } from "@/src/components/organisms";

// types
import { FormValues, IEmployeeEditProps } from "@/src/types";

// utils
import { employeeFormSchema } from "@/src/utils/validationSchema";

// store
import useStore from "@/src/store";

const EditEmployee: FC<IEmployeeEditProps> = ({
  params: { employee: employeeId },
}) => {
  const {
    employee,
    isLoading,
    updateEmployee,
    setSingleEmployee,
    setIsLoading,
  } = useStore();

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
    updateEmployee(employeeId, payload);
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
              <EmployeeForm
                methods={methods}
                isLoading={isLoading}
                buttonText="Update"
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

export default EditEmployee;
