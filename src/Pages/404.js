import { Box, Typography, Button } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <Box align="center" sx={{ mt: { md: 40, sm: 40, xs: 30 } }}>
      <Typography variant="h2" sx={{ pb: 3 }}>
        Damn! You got lost somehow
      </Typography>
      <Button component="a" href="/" variant="contained">
        Let's get you back home
      </Button>
    </Box>
  );
}
