import { Typography, Container, Box } from "@mui/material";
import React from "react";

const Info = () => {
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
          Welcome to Payment Service!
        </Typography>
        <Typography align="center" variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur purus justo, ut tempus enim porttitor non. Etiam vel massa
          mollis, molestie diam ac, sagittis dolor. Donec finibus aliquam nunc
          quis posuere. Aenean finibus mauris non metus rutrum, sed venenatis
          quam venenatis. Ut purus urna, feugiat interdum erat ac, viverra
          pulvinar lectus. Nulla nec magna blandit, luctus nisl at, sollicitudin
          nulla. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Vestibulum tempor eu sapien eu
          pulvinar. Aliquam porttitor quam cursus ligula euismod cursus. Quisque
          sed interdum risus, et fringilla orci. Vivamus interdum dolor eu
          libero fermentum, tempus iaculis elit iaculis. Suspendisse potenti.
          Vivamus ante odio, dapibus in commodo id, molestie eget nunc. Vivamus
          venenatis, est ut fringilla varius, lectus diam placerat magna, ac
          tincidunt urna lorem a neque. Nulla facilisi.
        </Typography>
      </Box>
    </Container>
  );
};

export default Info;
