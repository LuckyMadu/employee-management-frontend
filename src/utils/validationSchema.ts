import * as Yup from "yup";
import { ERROR_MESSAGE } from "@/src/lib/constants";

export const employeeFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(ERROR_MESSAGE.FIRST_NAME_REQUIRED)
    .matches(/^[a-zA-Z]{6,10}$/, ERROR_MESSAGE.INVALID_NAME),
  lastName: Yup.string()
    .required(ERROR_MESSAGE.LAST_NAME_REQUIRED)
    .matches(/^[a-zA-Z]{6,10}$/, ERROR_MESSAGE.INVALID_NAME),
  email: Yup.string()
    .required(ERROR_MESSAGE.EMAIL_REQUIRED)
    .email(ERROR_MESSAGE.INVALID_EMAIL),
  phone: Yup.string()
    .required(ERROR_MESSAGE.PHONE_REQUIRED)
    .matches(/^\+94\d{9}$/, ERROR_MESSAGE.INVALID_PHONE),
});
