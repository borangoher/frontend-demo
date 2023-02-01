import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { React, useContext } from "react";
import LoginContext from "./LoginContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);

  const { t } = useTranslation();
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
        {isLoggedIn ? (
          <>
            <Typography align="center" variant="h2">
              {t("home.title")}
            </Typography>
            <Typography align="center" variant="h5">
              {t("home.desc_LoggedIn")}
            </Typography>
          </>
        ) : (
          <>
            <Typography align="center" variant="h2">
              {t("home.title")}
            </Typography>
            <Typography align="center" variant="h5">
              {t("home.desc_notLoggedIn")}
            </Typography>
            <Button
              size="large"
              variant="contained"
              component={Link}
              to="/login"
            >
              {" "}
              {t("home.login")}
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
