import axios from "axios";
import useStore from "@/store";
import { IEmployee } from "@/types";

const store = useStore();

export const fetchEmployees = async () => {
  //   try {
  //     const { data } = await axios.get<IEmployee[]>(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/employee/list`
  //     );
  //     console.log("data", data);
  //     return data;
  //     //store.setEmployees(data);
  //   } catch (error) {
  //     console.log("fetchEmployees Error", error);
  //   }
};
