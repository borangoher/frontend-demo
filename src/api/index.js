export const loginUser = async (userData) => {
  const response = await fetch("/login", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw Error("Failed to log in");
  }
  return response;
};
