import React from "react";
import { Box, Typography } from "@mui/material";
import { useThemeColors } from "../hooks/useThemeColors";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "work", href: "/projects" },
  { label: "Get in touch", href: "/get-in-touch" },
];

export default function NavBar({ mode, toggleTheme }) {
  const colors = useThemeColors();

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: { md: 1, xs: 0.5 },
        px: { md: 5, xs: 2 },
        py: { md: 2, xs: 1.5 },
        bgcolor: colors.background.default,
        borderBottom: `1px solid ${colors.borderPrimary}`,
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          m: 0,
          p: 0,
          gap: { md: 4, xs: 2 },
          mr: { md: 3, xs: 1.5 },
        }}
      >
        {navLinks.map((link) => (
          <Box component="li" key={link.label}>
            <Typography
              component="a"
              href={link.href}
              sx={{
                color: colors.textSecondary,
                fontSize: { md: "16px", xs: "12px" },
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: colors.textPrimary,
                },
              }}
            >
              {link.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <ThemeToggle mode={mode} onToggle={toggleTheme} />
    </Box>
  );
}
