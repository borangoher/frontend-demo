import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { LoginProvider } from "../../LoginContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../../login/Login";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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
  const user = userEvent.setup();
  render(<MockLogin />);

  const usernameElement = screen.getByLabelText(/login.username/i);
  const passwordElement = screen.getByLabelText(/login.password/i);
  const loginButton = screen.getByRole("button", { value: /login.login/i });

  await user.type(usernameElement, "abcde");
  await user.type(passwordElement, "abcdefghj");
  await user.click(loginButton);

  expect(await screen.findByText(/login.loggedIn/i)).toBeInTheDocument();
});

describe("test invalid input responses", () => {
  it("should display appropriate error for invalid username", async () => {
    const user = userEvent.setup();
    render(<MockLogin />);

    const usernameElement = screen.getByLabelText(/login.username/i);
    const passwordElement = screen.getByLabelText(/login.password/i);
    const loginButton = screen.getByRole("button", { value: /login.login/i });

    await user.type(usernameElement, "ab");
    await user.type(passwordElement, "abcdefghj");
    await user.click(loginButton);

    expect(
      await screen.findByText(/login.errorMessages.usernameLength/i)
    ).toBeInTheDocument();
  });

  it("should display appropriate error for invalid password", async () => {
    const user = userEvent.setup();
    render(<MockLogin />);

    const usernameElement = screen.getByLabelText(/login.username/i);
    const passwordElement = screen.getByLabelText(/login.password/i);
    const loginButton = screen.getByRole("button", { value: /login.login/i });

    await user.type(usernameElement, "abcde");
    await user.type(passwordElement, "abcde");
    await user.click(loginButton);

    expect(
      await screen.findByText(/login.errorMessages.passwordLength/i)
    ).toBeInTheDocument();
  });
});

it("should log user out when pressing log out button", async () => {
  const user = userEvent.setup();
  render(<MockLogin />);

  const usernameElement = screen.getByLabelText(/login.username/i);
  const passwordElement = screen.getByLabelText(/login.password/i);
  const loginButton = screen.getByRole("button", { value: /login.login/i });

  await user.type(usernameElement, "abcde");
  await user.type(passwordElement, "abcdefghj");
  await user.click(loginButton); //isLoggedIn = true

  const logoutButton = await screen.findByRole("button", {
    value: /login.logout/i,
  });
  await user.click(logoutButton); //isLoggedIn = false

  expect(
    await screen.findByRole("button", { value: /login.login/i })
  ).toBeInTheDocument();
});
