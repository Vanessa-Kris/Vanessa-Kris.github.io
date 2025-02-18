import { Box, Divider } from "@mui/material";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ my: { md: 10, xs: 2 }, pt: 7, color: "#d7d0d7" }}>
      <Divider flexItem sx={{ bgcolor: "#a55f71", my: 2 }} />
      <Box sx={{ paddingLeft: { md: 7, xs: 2 } }}>
        Copyright © {currentYear}. All rights reserved. <br /> Developed by Vanessa Kris
      </Box>
    </Box>
  );
}
