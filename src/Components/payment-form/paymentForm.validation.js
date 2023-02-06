import * as yup from "yup";
import { ValidLengths } from "./paymentForm.constant";

const schema = yup.object({
  cardholderName: yup
    .string()
    .min(
      ValidLengths.MIN_CARDHOLDER_NAME_LENGTH,
      "payment.errorMessages.cardholderNameMin"
    )
    .required("payment.errorMessages.required"),
  cardNumber: yup
    .number("payment.errorMessages.cardNumberType")
    .positive()
    .test(
      "len",
      "payment.errorMessages.cardNumberLength",
      (val) => val && val.toString().length === ValidLengths.CARD_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required"),
  expiryDate: yup
    .date()
    .min(new Date(), "payment.errorMessages.expiryDateMin")
    .required(),
  securityNumber: yup
    .number("payment.errorMessages.securityNumberType")
    .positive()
    .test(
      "len",
      "payment.errorMessages.securityNumberType",
      (val) =>
        val && val.toString().length === ValidLengths.SECURITY_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required"),
  accountNumber: yup
    .number("payment.errorMessages.accountNumberType")
    .positive()
    .test(
      "len",
      "payment.errorMessages.accountNumberLength",
      (val) =>
        val && val.toString().length === ValidLengths.ACCOUNT_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required"),
  amount: yup
    .number("payment.errorMessages.amountType")
    .positive()
    .max(25000, "payment.errorMessages.amountMax"),
  displaySenderName: yup.boolean(),
  useService: yup
    .boolean()
    .oneOf([true], "payment.errorMessages.serviceAgreement"),
  transferTime: yup.string("payment.errorMessages.noOptionSelected"),
});

export default schema;
