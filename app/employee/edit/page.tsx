"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dropdown, Input } from "@/components/atoms";

type FormValues = {
  firstName: string;
  lastName: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

const AddEmployee: FC = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="text-2xl text-center uppercase mt-4 ">Edit Employee</h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-white shadow-md rounded px-8 pb-8 mb-4">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Lahiru"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Input
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Amaratunga"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="lahirua@swivelgroup.com.au"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    name="phone"
                    label="Phone Number"
                    type="number"
                    placeholder="+94 712 130 466"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Dropdown
                    name="gender"
                    label="Gender"
                    options={[
                      {
                        label: "Male",
                        value: "M",
                      },
                      {
                        label: "Female",
                        value: "F",
                      },
                    ]}
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
