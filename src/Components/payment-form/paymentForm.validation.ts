import * as yup from "yup";
import { ValidLengths, FormProps } from "./paymentForm.constant";

const schema: yup.SchemaOf<FormProps> = yup.object({
  cardholderName: yup
    .string()
    .min(
      ValidLengths.MIN_CARDHOLDER_NAME_LENGTH,
      "payment.errorMessages.cardholderNameMin"
    )
    .required("payment.errorMessages.required").default(""),
  cardNumber: yup
    .number()
    .positive()
    .test(
      "len",
      "payment.errorMessages.cardNumberLength",
      (val) => val !== (0||undefined) && val.toString().length === ValidLengths.CARD_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required").default(null),
  expiryDate: yup
    .date()
    .min(new Date(), "payment.errorMessages.expiryDateMin")
    .required().default(null),
  securityNumber: yup
    .number()
    .positive()
    .test(
      "len",
      "payment.errorMessages.securityNumberType",
      (val) =>
        val !== (0||undefined) && val.toString().length === ValidLengths.SECURITY_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required").default(null),
  accountNumber: yup
    .number()
    .positive()
    .test(
      "len",
      "payment.errorMessages.accountNumberLength",
      (val) =>
        val !== (0||undefined) && val.toString().length === ValidLengths.ACCOUNT_NUMBER_LENGTH
    )
    .required("payment.errorMessages.required").default(null),
  amount: yup
    .number()
    .positive()
    .max(25000, "payment.errorMessages.amountMax").default(null),
  displaySenderName: yup.boolean().default(false),
  useService: yup
    .boolean()
    .oneOf([true], "payment.errorMessages.serviceAgreement").default(false),
  transferTime: yup.string().default(""),
});

export default schema;
