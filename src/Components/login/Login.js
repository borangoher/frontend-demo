import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useLogin, LoginActions } from "../LoginContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Login.validation";
import { loginDefaultValues, ValidLengthLimits } from "./Login.constant";
import { useTranslation } from "react-i18next";

const loginUser = async (userData) => {
  const res = await fetch("http://localhost:8080/login", {
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

const Login = () => {
  const { t } = useTranslation();
  const {
    state: { isLoggedIn },
  } = useLogin();
  const { dispatch } = useLogin();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: loginDefaultValues,
  });

  const onSubmit = async (userData) => {
    try {
      await loginUser(userData);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LoginActions.LOGIN });
    }
  };


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
            {t("login.loggedIn")}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            onClick={() => dispatch({ type: LoginActions.LOGOUT })}

          >
            {t("login.logout")}
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
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  required
                  type="text"
                  label={t("login.username")}
                />
              )}
            />
            {errors.username && (
              <Alert severity="error">
                {t(errors.username.message, {
                  minLength: ValidLengthLimits.MIN_USERNAME_LENGTH,
                  maxLength: ValidLengthLimits.MAX_USERNAME_LENGTH,
                })}
              </Alert>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  required
                  type="text"
                  label={t("login.password")}
                />
              )}
            />
            {errors.password && (
              <Alert severity="error">
                {t(errors.password.message, {
                  minLength: ValidLengthLimits.MIN_PASSWORD_LENGTH,
                  maxLength: ValidLengthLimits.MAX_PASSWORD_LENGTH,
                })}
              </Alert>
            )}
            <Button type="submit" variant="contained">
              {t("login.login")}
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default Login;
