import React from "react";
import { Box, keyframes, useTheme } from "@mui/material";

const trace = keyframes`
  from { stroke-dashoffset: 400; }
  to { stroke-dashoffset: 0; }
`;

const sweep = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
`;

const fill = keyframes`
  from { fill-opacity: 0; }
  to { fill-opacity: 1; }
`;

const Loader = () => {
  const theme = useTheme();
  const color = theme.palette.primary.main;

  return (
    <Box
      role="status"
      aria-label="Loading"
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 400 140"
        aria-hidden="true"
        sx={{ width: { md: 420, xs: 260 }, overflow: "visible" }}
      >
        <Box
          component="text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 600,
            fontSize: "110px",
            fill: color,
            fillOpacity: 0,
            stroke: color,
            strokeWidth: 1.5,
            strokeDasharray: 400,
            strokeDashoffset: 400,
            animation: `${trace} 2s ease-in-out forwards, ${sweep} 2s ease-in-out forwards, ${fill} 0.8s ease-out 1.6s forwards`,
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              fillOpacity: 1,
              strokeDashoffset: 0,
            },
          }}
        >
          Vanessa
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
