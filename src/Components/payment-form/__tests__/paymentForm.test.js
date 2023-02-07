import { render, screen } from "@testing-library/react";
import PaymentForm from "../PaymentForm";
import * as defaultTranslation from "../../../translations/en.json";
import { fireEvent } from "@testing-library/react";
import { LoginProvider } from "../../LoginContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../../login/Login";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const MockPaymentFormWrapper = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Login />
        <PaymentForm />
      </LoginProvider>
    </BrowserRouter>
  );
};

it("should display an error for invalid cardholder name", async () => {
  render(<MockPaymentFormWrapper />);

  const usernameElement = screen.getByLabelText(/login.username/i);
  const passwordElement = screen.getByLabelText(/login.password/i);
  const loginButton = screen.getByRole("button", { value: /login.login/i });

  fireEvent.change(usernameElement, { target: { value: "abcde" } });
  fireEvent.change(passwordElement, { target: { value: "abcdefghj" } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(
      screen.getByLabelText(/payment.cardholderName/i)
    ).toBeInTheDocument();
  });

  const cardholderNameElement = screen.getByLabelText(/cardholderName/i);
  const cardNumberElement = screen.getByLabelText(/cardNumber/i);
  const expiryDateElement = screen.getByLabelText(/expiryDate/i);
  const securityNumberElement = screen.getByLabelText(/securityNumber/i);
  const accountNumberElement = screen.getByLabelText(/accountNumber/i);
  const amountElement = screen.getByLabelText(/amount/i);

  const useServiceElement = screen.getByText(/payment.useService/i);
  const submitElement = screen.getByRole("button", {
    name: /payment.makePayment/i,
  });

  fireEvent.change(cardholderNameElement, { target: { value: "A" } });
  fireEvent.change(cardNumberElement, { target: { value: 1111222233334444 } });
  fireEvent.change(expiryDateElement, { target: { value: "2023-06-10" } });
  fireEvent.change(securityNumberElement, { target: { value: 123 } });
  fireEvent.change(accountNumberElement, { target: { value: 1234567890 } });
  fireEvent.change(amountElement, { target: { value: 150 } });
  fireEvent.click(useServiceElement);
  fireEvent.click(submitElement);

  await waitFor(() => {
    expect(
      screen.getByText(/payment.errorMessages.cardholderNameMin/i)
    ).toBeInTheDocument();
  });

  expect(
    screen.getByText(/payment.errorMessages.cardholderNameMin/i)
  ).toBeInTheDocument();
});
