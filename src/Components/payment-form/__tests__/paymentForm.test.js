import { render, screen } from "@testing-library/react";
import PaymentForm from "../PaymentForm";
import { LoginProvider } from "../../LoginContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../../login/Login";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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
  const user = userEvent.setup();
  render(<MockPaymentFormWrapper />);

  const usernameElement = screen.getByLabelText(/login.username/i);
  const passwordElement = screen.getByLabelText(/login.password/i);
  const loginButton = screen.getByRole("button", { value: /login.login/i });

  await user.type(usernameElement, "abcde");
  await user.type(passwordElement, "abcdefghj");
  await user.click(loginButton); //changes isLoggedIn context to true

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

  await user.type(cardholderNameElement, "A");
  await user.type(cardNumberElement, "1111222233334444");
  await user.type(expiryDateElement, "2023-06-10");
  await user.type(securityNumberElement, "123");
  await user.type(accountNumberElement, "1234567890");
  await user.type(amountElement, "150");
  await user.click(useServiceElement);
  await user.click(submitElement);

  await waitFor(() => {
    expect(
      screen.getByText(/payment.errorMessages.cardholderNameMin/i)
    ).toBeInTheDocument();
  });
});
