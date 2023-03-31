import { API_ENDPOINTS } from "@/src/constants";
import { BaseResponse, IEmployee } from "@/src/types";
import API from "@/src/utils/axiosInterceptor";
import makeToast from "@/src/utils/toaster";

export const fetchEmployees = async () => {
  try {
    const { data } = await API.get<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.GET_EMPLOYEE_LIST}`
    );
    return data;
  } catch (error) {
    console.log("fetch employees error", error);
  }
};

export const fetchSingleEmployee = async (employeeId: string) => {
  try {
    const { data } = await API.get<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.GET_SINGLE_EMPLOYEE}${employeeId}`,
      {
        params: {
          id: employeeId,
        },
      }
    );
    return data;
  } catch (error) {
    console.log("fetch single employee error", error);
  }
};

export const createEmployee = async (data: IEmployee) => {
  try {
    const response = await API.post<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.CREATE_EMPLOYEE}`,
      data
    );
    if (response.data.success) makeToast(response.data.message, "success");
  } catch (error: any) {
    makeToast(error.data.error.message, "error");
    console.log("create employee error", error);
  }
};

export const updateEmployee = async (employeeId: string, data: IEmployee) => {
  try {
    const response = await API.put<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.UPDATE_EMPLOYEE}${employeeId}`,
      data
    );
    if (response.data.success) makeToast(response.data.message, "success");
  } catch (error: any) {
    makeToast(error.data.error.message, "error");
    console.log("update employee error", error);
  }
};

export const deleteEmployee = async (employeeId: string) => {
  try {
    const response = await API.delete<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.DELETE_EMPLOYEE}${employeeId}`
    );
    if (response.data.success) makeToast(response.data.message, "success");
  } catch (error: any) {
    makeToast(error.data.error.message, "error");
    console.log("delete employee error", error);
  }
};
