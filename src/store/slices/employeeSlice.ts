import { StateCreator } from "zustand";

// types
import { BaseEmployeeResponse, IEmployee } from "@/src/types";
import EmployeeStoreState from "../types/IEmployeeState";

// services
import {
  createEmployee,
  fetchEmployees,
  fetchSingleEmployee,
  updateEmployee,
  deleteEmployee,
  fetchSearchedEmployees,
} from "@/src/lib/services/employeeService";

const createEmployeeSlice: StateCreator<EmployeeStoreState> = (set, get) => ({
  employees: [],
  employee: undefined,
  isLoading: false,
  error: null,
  setEmployees: async () => {
    set({ isLoading: true });
    const data = await fetchEmployees();
    set(() => ({
      employees: (data as BaseEmployeeResponse).data,
      isLoading: false,
    }));
  },
  addEmployee: async (employee: IEmployee) => {
    await createEmployee(employee);
  },
  setSingleEmployee: async (employeeId: string) => {
    const data = await fetchSingleEmployee(employeeId);
    set(() => ({ employee: (data as BaseEmployeeResponse).data.data }));
  },
  updateEmployee: async (employeeId: string, employee: IEmployee) => {
    await updateEmployee(employeeId, employee);
  },
  removeEmployee: async (employeeId: string) => {
    await deleteEmployee(employeeId);
  },
  setSearchedResults: async (query: string) => {
    set({ isLoading: true });
    const data = await fetchSearchedEmployees(query);
    set(() => ({
      employees: (data as BaseEmployeeResponse).data.data,
      isLoading: false,
    }));
  },
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setError: (error: string | null) => set(() => ({ error })),
});

export default createEmployeeSlice;
