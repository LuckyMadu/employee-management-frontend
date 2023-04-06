import { create } from "zustand";
import { persist } from "zustand/middleware";

// types
import EmployeeStoreState from "./types/IEmployeeState";

// slices
import createEmployeeSlice from "./slices/employeeSlice";

const useStore = create<EmployeeStoreState>()(
  persist((...args) => createEmployeeSlice(...args), {
    name: "employee-store",
  })
);

export default useStore;
