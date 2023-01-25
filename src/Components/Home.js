import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { React, useContext } from "react";
import LoginContext from "./LoginContext";

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);

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
        {isLoggedIn
          ? [
              <Typography align="center" variant="h2">
                Welcome to Payment Service!
              </Typography>,
              <Typography align="center" variant="h5">
                Welcome to Payment Service. You can handle your payments through
                this website. You are currently logged in.
              </Typography>,
            ]
          : [
              <Typography align="center" variant="h2">
                Welcome to Payment Service!
              </Typography>,
              <Typography align="center" variant="h5">
                Welcome to Payment Service. You can handle your payments through
                this website. Please log in to continue.
              </Typography>,
              <Button
                size="large"
                variant="contained"
                component={Link}
                to="/login"
              >
                {" "}
                Log In
              </Button>,
            ]}
      </Box>
    </Container>
  );
};

export default Home;