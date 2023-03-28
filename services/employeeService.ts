import axios from "axios";
import { BaseResponse } from "@/types";

export const fetchEmployees = async () => {
  try {
    const { data } = await axios.get<BaseResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/employee/list`
    );
    return data.data;
    //store.setEmployees(data);
  } catch (error) {
    console.log("fetchEmployees Error", error);
  }
};
