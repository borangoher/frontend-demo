import * as yup from "yup";
import { ValidLengthLimits } from "./Login.constant";

export const schema = yup.object({
  username: yup
    .string()
    .min(
      ValidLengthLimits.MIN_USERNAME_LENGTH,
      "login.errorMessages.usernameLength"
    )
    .max(
      ValidLengthLimits.MAX_USERNAME_LENGTH,
      "login.errorMessages.usernameLength"
    ),
  password: yup
    .string()
    .min(
      ValidLengthLimits.MIN_PASSWORD_LENGTH,
      "login.errorMessages.passwordLength"
    )
    .max(
      ValidLengthLimits.MAX_PASSWORD_LENGTH,
      "login.errorMessages.passwordLength"
    ),
});
