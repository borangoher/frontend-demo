import * as yup from "yup";
import { ValidLengths } from "./Login.constant";

export const schema = yup.object({
  username: yup
    .string()
    .min(
      ValidLengths.MIN_USERNAME_LENGTH,
      `Username should be between ${ValidLengths.MIN_USERNAME_LENGTH} and ${ValidLengths.MAX_USERNAME_LENGTH} characters`
    )
    .max(
      ValidLengths.MAX_USERNAME_LENGTH,
      `Username should be between ${ValidLengths.MIN_USERNAME_LENGTH} and ${ValidLengths.MAX_USERNAME_LENGTH} characters`
    ),
  password: yup
    .string()
    .min(
      ValidLengths.MIN_PASSWORD_LENGTH,
      `Password should be between ${ValidLengths.MIN_PASSWORD_LENGTH} and ${ValidLengths.MAX_PASSWORD_LENGTH} characters`
    )
    .max(
      ValidLengths.MAX_PASSWORD_LENGTH,
      `Password should be between ${ValidLengths.MIN_PASSWORD_LENGTH} and ${ValidLengths.MAX_PASSWORD_LENGTH} characters`
    ),
});
