import { ERROR_MESSAGE } from "@/lib/constants";
import * as Yup from "yup";

export const employeeFormSchema = Yup.object().shape({
  firstName: Yup.string().required(ERROR_MESSAGE.FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(ERROR_MESSAGE.LAST_NAME_REQUIRED),
});
