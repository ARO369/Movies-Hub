import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const Heading = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "black", color: "white" }}
        align="center"
        padding={2}
      >
        Made with ❤️ by Aaradhya Pathak
      </Box>
      <Box
        sx={{ backgroundColor: "#212121", color: "white" }}
        align="center"
        p={2}
      >
        <Typography variant="h2"> Movies Hub</Typography>
      </Box>
    </>
  );
};

export default Heading;
