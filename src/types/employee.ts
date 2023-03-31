import { UseFormRegister, UseFormReturn } from "react-hook-form";

export type IEmployee = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  photo?: string;
};
export type ISelectedEmployee = {
  email: string;
  firstName: string;
  gender: string;
  id?: string;
  lastName: string;
  phone: string;
  photo?: string;
  updatedAt?: string;
  _id?: string;
};

export interface IEmployeeProps {
  item: IEmployee;
  setModalIsOpen: (value: boolean) => void;
  setSelectedEmployee: (value: ISelectedEmployee) => void;
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

export interface IEmployeeEditProps {
  params: {
    employee: string;
  };
}
export interface IEmployeeFormProps {
  methods: UseFormReturn<FormValues>;
  isLoading: boolean;
  buttonText: string;
}

export interface IModalProps {
  modalIsOpen: boolean;
  selectedEmployee: ISelectedEmployee;
  setModalIsOpen: (value: boolean) => void;
  handleRemoveEmployee: () => void;
}
export interface ILayoutChangeProps {
  isTableViewOn: boolean;
  handleLayoutChange: () => void;
}
export interface IEmployeeTableProps {
  employees: ISelectedEmployee[];
}
