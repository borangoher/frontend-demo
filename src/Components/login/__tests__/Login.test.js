import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { LoginProvider } from "../../LoginContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../../login/Login";
import "@testing-library/jest-dom";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </BrowserRouter>
  );
};

it("should log user in for a valid input", async () => {
  render(<MockLogin />);

  const usernameElement = screen.getByLabelText(/login.username/i);
  const passwordElement = screen.getByLabelText(/login.password/i);
  const loginButton = screen.getByRole("button", { value: /login.login/i });

  fireEvent.change(usernameElement, { target: { value: "abcde" } });
  fireEvent.change(passwordElement, { target: { value: "abcdefghj" } });
  fireEvent.click(loginButton);

  expect(await screen.findByText(/login.loggedIn/i)).toBeInTheDocument();
});

describe("test invalid input responses", () => {
  it("should display appropriate error for invalid username", async () => {
    render(<MockLogin />);

    const usernameElement = screen.getByLabelText(/login.username/i);
    const passwordElement = screen.getByLabelText(/login.password/i);
    const loginButton = screen.getByRole("button", { value: /login.login/i });

    fireEvent.change(usernameElement, { target: { value: "ab" } });
    fireEvent.change(passwordElement, { target: { value: "abcdefghj" } });
    fireEvent.click(loginButton);

    expect(
      await screen.findByText(/login.errorMessages.usernameLength/i)
    ).toBeInTheDocument();
  });

  it("should display appropriate error for invalid password", async () => {
    render(<MockLogin />);

    const usernameElement = screen.getByLabelText(/login.username/i);
    const passwordElement = screen.getByLabelText(/login.password/i);
    const loginButton = screen.getByRole("button", { value: /login.login/i });

    fireEvent.change(usernameElement, { target: { value: "abcde" } });
    fireEvent.change(passwordElement, { target: { value: "abcd" } });
    fireEvent.click(loginButton);

    expect(
      await screen.findByText(/login.errorMessages.passwordLength/i)
    ).toBeInTheDocument();
  });
});
