export const loginUser = async (userData) => {
  const res = await fetch("/login", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw Error("Failed to log in");
  }
  return res;
};
