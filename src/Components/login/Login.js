import React from "react";
import { useContext } from "react";
import LoginContext from "../LoginContext";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Login.validation";
import { loginDefaultValues } from "./Login.constant";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: loginDefaultValues,
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
            {t("login.loggedIn")}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            onClick={() => setIsLoggedIn(false)}
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
              <Alert severity="error">{t(errors.username.message)}</Alert>
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
              <Alert severity="error">{t(errors.password.message)}</Alert>
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
