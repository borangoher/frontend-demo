import * as yup from "yup";
import { ValidLengths } from "./paymentForm.constant";

const schema = yup.object({
  cardholderName: yup
    .string()
    .min(
      ValidLengths.MIN_CARDHOLDER_NAME_LENGTH,
      `Cardholder name must at least contain ${ValidLengths.MIN_CARDHOLDER_NAME_LENGTH} characters`
    )
    .required("This field is required"),
  cardNumber: yup
    .number("Card number must be a number")
    .positive()
    .test(
      "len",
      `Card number must be exactly ${ValidLengths.CARD_NUMBER_LENGTH} digits`,
      (val) => val && val.toString().length === ValidLengths.CARD_NUMBER_LENGTH
    )
    .required("This field is required"),
  expiryDate: yup
    .date()
    .min(new Date(), "Expiry date must be a future date")
    .required(),
  securityNumber: yup
    .number("Security number must be a number")
    .positive()
    .test(
      "len",
      `Security number must be exactly ${ValidLengths.SECURITY_NUMBER_LENGTH} digits`,
      (val) =>
        val && val.toString().length === ValidLengths.SECURITY_NUMBER_LENGTH
    )
    .required("This field is required"),
  accountNumber: yup
    .number("Account number must be a number")
    .positive()
    .test(
      "len",
      `Card number must be exactly ${ValidLengths.ACCOUNT_NUMBER_LENGTH} digits`,
      (val) =>
        val && val.toString().length === ValidLengths.ACCOUNT_NUMBER_LENGTH
    )
    .required("This field is required"),
  amount: yup
    .number("Amount to transfer must be a number")
    .positive()
    .max(25000, "You can transfer no more than 25000 in a single transaction"),
  displaySenderName: yup.boolean(),
  useService: yup
    .boolean()
    .oneOf([true], "You must agree to use SERVICE for this transfer"),
  transferTime: yup.string("Please select one of the options"),
});

export default schema;
