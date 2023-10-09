import { Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, color: "#d7d0d7", pt: 8 }}>
      {/* <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        INTRODUCTION
      </Typography> */}
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        UI/UX Engineer
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography>
        I'm absolutely thrilled that you've discovered me! I love crafting
        visually stunning websites, online stores, and web services. You'll
        thoroughly enjoy collaborating with me.{" "}
      </Typography>
      <Box sx={{ mt: 7 }} component="img" src="/name.png" />
    </Box>
  );
}
