import { Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, color: "#d7d0d7", pt: 8 }}>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: "#fff" }}>
        Software Engineer
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography>
        I'm very happy you found me! I love creating/designing
        visually stunning websites, I love music, food, art and a bunch of other fun stuff. You'll
        absolutely love connecting with me.{" "}
      </Typography>
      <Box sx={{ mt: 7 }} component="img" src="/name.png" />
    </Box>
  );
}
