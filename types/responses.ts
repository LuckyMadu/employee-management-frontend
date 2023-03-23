import { IEmployee } from "./employee";

export interface BaseResponse {
  code: number;
  success: boolean;
  message: string;
  data: IEmployee[];
}
