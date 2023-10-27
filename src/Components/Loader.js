import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999, // Ensure it's above other content
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};

export default Loader;
