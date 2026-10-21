import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

export default function ThemeToggle({ mode, onToggle }) {
  const colors = useThemeColors();

  return (
    <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <IconButton
        onClick={onToggle}
        sx={{
          padding: { md: 2, xs: 1.5 },
          color: colors.textPrimary,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: colors.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            transform: "rotate(15deg)",
          },
        }}
        aria-label="toggle theme"
      >
        {mode === "dark" ? (
          <BulbOutlined style={{ fontSize: "20px" }} />
        ) : (
          <BulbFilled style={{ fontSize: "20px" }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
