import { API_ENDPOINTS } from "@/constants";
import { BaseResponse, IEmployee } from "@/types";
import API from "@/utils/axiosInterceptor";
import makeToast from "@/utils/toaster";

export const fetchEmployees = async () => {
  try {
    const { data } = await API.get<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.EMPLOYEE_LIST}`
    );
    return data;
  } catch (error) {
    console.log("fetch employees error", error);
  }
};

export const createEmployee = async (data: IEmployee) => {
  try {
    const response = await API.post<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.CREATE_EMPLOYEE}`,
      { data }
    );
    makeToast(response.data.message, "success");
    return response;
  } catch (error: any) {
    makeToast(error.data.error.message, "error");
    console.log("create employee error", error);
  }
};
