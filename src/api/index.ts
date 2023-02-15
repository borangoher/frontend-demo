import { FormProps as UserData } from "../components/login/Login.constant";

export const loginUser = async (userData: UserData) => {
  const response = await fetch("/login", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw Error("login.errorMessages.invalidAuth");
  }
  return response;
};
