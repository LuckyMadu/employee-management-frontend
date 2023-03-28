import { BaseResponse, IEmployee } from "@/types";

interface EmployeeStoreState {
  employees: IEmployee[];
  isLoading: boolean;
  error: string | null;
  setEmployees: (employees: IEmployee[]) => void;
}

export default EmployeeStoreState;
