import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  tr: { nativeName: "Türkçe" },
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
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
          {Object.keys(lngs).map((lng) => (
            <Button
              key={lng}
              color="inherit"
              disabled={i18n.resolvedLanguage === lng}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </Button>
          ))}
          <Button component={Link} to="/login" color="inherit">
            {t("navbar.part1")}
          </Button>
          <Button component={Link} to="/payment" color="inherit">
            {t("navbar.part2")}
          </Button>
          <Button component={Link} to="/information" color="inherit">
            {t("navbar.part3")}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
