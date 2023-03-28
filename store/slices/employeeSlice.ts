import { StateCreator } from "zustand";
import { IEmployee } from "@/types";
import EmployeeStoreState from "../types/IEmployeeState";

const createEmployeeSlice: StateCreator<EmployeeStoreState> = (set, get) => ({
  employees: [],
  isLoading: false,
  error: null,
  setEmployees: (employees: IEmployee[]) => set(() => ({ employees })),
  addEmployee(employee: IEmployee) {
    set((state) => ({ employees: [...state.employees, employee] }));
  },
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setError: (error: string | null) => set(() => ({ error })),
});

export default createEmployeeSlice;
