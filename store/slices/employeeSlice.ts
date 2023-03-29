import { StateCreator } from "zustand";

// types
import { BaseResponse, IEmployee } from "@/types";
import EmployeeStoreState from "../types/IEmployeeState";

// services
import { createEmployee, fetchEmployees } from "@/services/employeeService";

const createEmployeeSlice: StateCreator<EmployeeStoreState> = (set, get) => ({
  employees: [],
  isLoading: true,
  error: null,
  setEmployees: async () => {
    const data = await fetchEmployees();
    set(() => ({ employees: (data as BaseResponse).data }));
  },
  addEmployee: async (employee: IEmployee) => {
    const response = await createEmployee(employee);
  },
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setError: (error: string | null) => set(() => ({ error })),
});

export default createEmployeeSlice;
