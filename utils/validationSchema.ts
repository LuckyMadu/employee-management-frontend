import { ERROR_MESSAGE } from "@/constants";
import * as Yup from "yup";

export const employeeFormSchema = Yup.object().shape({
  firstName: Yup.string().required(ERROR_MESSAGE.FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(ERROR_MESSAGE.LAST_NAME_REQUIRED),
  email: Yup.string().required(ERROR_MESSAGE.EMAIL_REQUIRED),
  phone: Yup.string().required(ERROR_MESSAGE.PHONE_REQUIRED),
});
