import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { LoginActionState, useLogin } from "../LoginContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Login.validation";
import { FormProps, loginDefaultValues, ValidLengthLimits } from "./Login.constant";
import { useTranslation } from "react-i18next";
import { loginUser } from "../../api";
import { useState } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState("");
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

  const onSubmit = async (userData: FormProps) => {
    setLoginError("");
    try {
      await loginUser(userData);
      dispatch({ type: LoginActionState.LOGIN });
    } catch (error) {
      if (error instanceof Error) {
      setLoginError(`${t(error.message)}`);
      } else {
        console.log("Unknown Error", error)
      }
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
            onClick={() => dispatch({ type: LoginActionState.LOGOUT })}
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
                  required
                  type="text"
                  label={t("login.username")}
                />
              )}
            />
            {errors.username && (
              <Alert severity="error">
                {t(errors.username.message as string, {
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
                  required
                  type="text"
                  label={t("login.password")}
                />
              )}
            />
            {errors.password && (
              <Alert severity="error">
                {t(errors.password.message as string, {
                  minLength: ValidLengthLimits.MIN_PASSWORD_LENGTH,
                  maxLength: ValidLengthLimits.MAX_PASSWORD_LENGTH,
                })}
              </Alert>
            )}
            {loginError && <Alert severity="error">{loginError}</Alert>}
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
