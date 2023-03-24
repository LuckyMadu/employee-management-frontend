"use client";

import { FC, useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dropdown, Input } from "@/components/atoms";
import { GENDER } from "@/lib/constants";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
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
      <h1 className="text-2xl text-center uppercase font-semibold mt-4">
        Add Employee
      </h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-white shadow-md rounded px-8 pb-8 mb-4 pt-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Lahiru"
                    register={methods.register}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Input
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Amaratunga"
                    register={methods.register}
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
                    register={methods.register}
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
                    register={methods.register}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
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
