import { UseFormRegister } from "react-hook-form";

export type IEmployee = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  photo?: string;
};

export interface IEmployeeProps {
  item: IEmployee;
}

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
};

export interface InputProps {
  name: keyof FormValues;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
}

interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  name: keyof FormValues;
  options: DropdownOption[];
  label?: string;
  register: UseFormRegister<FormValues>;
}
