import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

import { Dropdown, Input } from "@/components/atoms";
import { GENDER } from "@/constants";
import { FormValues } from "@/types";

export const EmployeeForm: FC<{ methods: UseFormReturn<FormValues> }> = ({
  methods,
}) => {
  return (
    <>
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
    </>
  );
};
