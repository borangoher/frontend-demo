export const ValidLengthLimits = {
  MIN_USERNAME_LENGTH: 4,
  MAX_USERNAME_LENGTH: 20,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 16,
};

export const loginDefaultValues = {
  username: "",
  password: "",
};

export interface FormProps {
  username: string,
  password: string,
}