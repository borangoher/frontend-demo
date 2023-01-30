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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .min(4, "Username should be between 4 and 20 characters")
    .max(20, "Username should be between 4 and 20 characters"),
  password: yup
    .string()
    .min(8, "Password should be between 8 and 16 characters")
    .max(16, "Password should be between 8 and 16 characters"),
});

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => setIsLoggedIn(true);

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
            onClick={() => setIsLoggedIn(false)}
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
              {...register("username")}
              required
              type="text"
              label="Username"
            />
            {errors.username && (
              <Alert severity="error">{errors.username.message}</Alert>
            )}
            <TextField
              {...register("password")}
              required
              type="password"
              label="Password"
            />
            {errors.password && (
              <Alert severity="error">{errors.password.message}</Alert>
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
