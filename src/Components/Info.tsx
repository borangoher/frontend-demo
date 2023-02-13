import { Typography, Container, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
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
        <Typography align="center" variant="h2">
          {t("info.title")}
        </Typography>
        <Typography align="center" variant="h5">
          {t("info.content")}
        </Typography>
      </Box>
    </Container>
  );
};

export default Info;
