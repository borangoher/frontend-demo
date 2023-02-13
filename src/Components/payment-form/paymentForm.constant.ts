export const ValidLengths = {
  MIN_CARDHOLDER_NAME_LENGTH: 2,
  CARD_NUMBER_LENGTH: 16,
  SECURITY_NUMBER_LENGTH: 3,
  ACCOUNT_NUMBER_LENGTH: 10,
};

export const paymentFormDefaultValues = {
  cardholderName: "",
  cardNumber: null,
  expiryDate: null,
  securityNumber: null,
  accountNumber: null,
  amount: null,
  displaySenderName: true,
  useService: false,
  transferTime: "now",
};

export interface FormProps {
  cardholderName: string,
  cardNumber: number | null,
  expiryDate: Date | null,
  securityNumber: number | null,
  accountNumber: number | null,
  amount: number | null,
  displaySenderName: boolean,
  useService: boolean,
  transferTime: string,
}
