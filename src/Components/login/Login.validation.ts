import * as yup from "yup";
import { FormProps, ValidLengthLimits } from "./Login.constant";

export const schema: yup.SchemaOf<FormProps> = yup.object({
  username: yup
    .string()
    .min(
      ValidLengthLimits.MIN_USERNAME_LENGTH,
      "login.errorMessages.usernameLength"
    )
    .max(
      ValidLengthLimits.MAX_USERNAME_LENGTH,
      "login.errorMessages.usernameLength"
    ).default(""),
  password: yup
    .string()
    .min(
      ValidLengthLimits.MIN_PASSWORD_LENGTH,
      "login.errorMessages.passwordLength"
    )
    .max(
      ValidLengthLimits.MAX_PASSWORD_LENGTH,
      "login.errorMessages.passwordLength"
    ).default(""),
});
