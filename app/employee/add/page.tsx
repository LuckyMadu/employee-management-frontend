"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Dropdown, Input } from "@/components/atoms";

// utils
import { ERROR_MESSAGE, GENDER } from "@/lib/constants";

// styles
import "@/styles/employee.css";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required(ERROR_MESSAGE.FIRST_NAME_REQUIRED),
  lastName: yup.string().required(ERROR_MESSAGE.LAST_NAME_REQUIRED),
});

const AddEmployee: FC = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("calledd--------------------");
    console.log(data);
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
              <button type="submit" className="btn w-full">
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
