import { IEmployee } from "./employee";

export interface BaseResponse {
  code: number;
  success: boolean;
  message: string;
  data: IEmployee[];
}

export interface BaseEmployeeResponse<T = any> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
