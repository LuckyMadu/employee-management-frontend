import { IEmployee } from "@/types";

interface EmployeeStoreState {
  employees: IEmployee[];
  isLoading: boolean;
  error: string | null;
  setEmployees: () => Promise<void>;
  addEmployee: (employee: IEmployee) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export default EmployeeStoreState;
