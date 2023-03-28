import { API_ENDPOINTS } from "@/lib/constants";
import { BaseResponse } from "@/types";
import API from "@/utils/axiosInterceptor";

export const fetchEmployees = async () => {
  try {
    const { data } = await API.get<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.EMPLOYEE_LIST}`
    );
    return data;
    //store.setEmployees(data);
  } catch (error) {
    console.log("fetchEmployees Error", error);
  }
};
