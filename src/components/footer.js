import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

export default function Footer() {
  return (
    <Box
      className="footer"
      component="Footer"
      sx={{
        p: 2,
      }}
    >
      <Box>
        <Typography>© Vanessa Christopher 2023</Typography>
      </Box>
    </Box>
  );
}
