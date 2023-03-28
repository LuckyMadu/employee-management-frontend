import { create } from "zustand";

// types
import EmployeeStoreState from "./types/IEmployeeState";

// slices
import createEmployeeSlice from "./slices/employeeSlice";

const useStore = create<EmployeeStoreState>()((...args) => ({
  ...createEmployeeSlice(...args),
}));

export default useStore;
