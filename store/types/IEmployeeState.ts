import { IEmployee } from "@/types";

interface EmployeeStoreState {
  employees: IEmployee[];
  employee: IEmployee | undefined;
  isLoading: boolean;
  error: string | null;
  setEmployees: () => Promise<void>;
  addEmployee: (employee: IEmployee) => void;
  updateEmployee: (employeeId: string, employee: IEmployee) => void;
  setSingleEmployee: (employeeId: string) => Promise<void>;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export default EmployeeStoreState;
