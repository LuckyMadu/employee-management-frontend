import { StateCreator } from "zustand";

// types
import { BaseEmployeeResponse, IEmployee } from "@/types";
import EmployeeStoreState from "../types/IEmployeeState";

// services
import {
  createEmployee,
  fetchEmployees,
  fetchSingleEmployee,
} from "@/services/employeeService";

const createEmployeeSlice: StateCreator<EmployeeStoreState> = (set, get) => ({
  employees: [],
  employee: undefined,
  isLoading: true,
  error: null,
  setEmployees: async () => {
    const data = await fetchEmployees();
    set(() => ({ employees: (data as BaseEmployeeResponse).data }));
  },
  addEmployee: async (employee: IEmployee) => {
    await createEmployee(employee);
  },
  setSingleEmployee: async (employeeId: string) => {
    const data = await fetchSingleEmployee(employeeId);
    set(() => ({ employee: (data as BaseEmployeeResponse).data.data }));
  },
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setError: (error: string | null) => set(() => ({ error })),
});

export default createEmployeeSlice;
