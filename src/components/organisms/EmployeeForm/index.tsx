import { FC } from "react";

import { Button, Dropdown, Input } from "@/src/components/atoms";
import { GENDER } from "@/src/lib/constants";
import { IEmployeeFormProps } from "@/src/types";

export const EmployeeForm: FC<IEmployeeFormProps> = ({
  methods,
  isLoading,
  buttonText,
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
      <div className="relative py-6 mb-6">
        <Button
          type="submit"
          className="btn px-10 absolute right-0"
          isLoading={isLoading}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};
