import React from "react";
import { useContext } from "react";
import LoginContext from "./LoginContext";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const { login, setLogin } = useContext(LoginContext);
  var content = <div />;
  if (login) {
    content = [
      <Typography align="center" variant="h5">
        You are currently logged in. Would you like to log out?
      </Typography>,
      <Button type="submit" variant="contained" onClick={() => setLogin(false)}>
        Log Out
      </Button>,
    ];
  } else {
    content = [
      <TextField required type="text" label="Username" />,
      <TextField required type="password" label="Password" />,
      <Button type="submit" variant="contained" onClick={() => setLogin(true)}>
        Log In
      </Button>,
    ];
  }

  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        {content}
      </Box>
    </Container>
  );
};

export default Login;
