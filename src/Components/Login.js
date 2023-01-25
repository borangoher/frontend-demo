import React from "react";
import { useContext } from "react";
import LoginContext from "./LoginContext";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {
  const { isLoggedIn, setLogin } = useContext(LoginContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => setLogin(true);

  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      {isLoggedIn ? (
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
        >
          <Typography align="center" variant="h5">
            You are currently logged in. Would you like to log out?
          </Typography>
          <Button
            type="submit"
            variant="contained"
            onClick={() => setLogin(false)}
          >
            Log Out
          </Button>
        </Box>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
          >
            <TextField
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 20,
              })}
              required
              type="text"
              label="Username"
            />
            {errors.username && (
              <Alert severity="error">
                You must enter a username between 4 and 20 characters!
              </Alert>
            )}
            <TextField
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
              required
              type="password"
              label="Password"
            />
            {errors.password && (
              <Alert severity="error">
                You must enter a password between 8 and 16 characters!
              </Alert>
            )}
            <Button type="submit" variant="contained">
              Log In
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default Login;
