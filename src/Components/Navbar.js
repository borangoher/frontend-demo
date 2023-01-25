import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/" size="large">
            <AccountBalanceWalletIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            flexGrow={1}
            color="inherit"
            style={{ textDecoration: "none" }}
          >
            Payment Service
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Log In
          </Button>
          <Button component={Link} to="/payment" color="inherit">
            Payment
          </Button>
          <Button component={Link} to="/information" color="inherit">
            Information
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
