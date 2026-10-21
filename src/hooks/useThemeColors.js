import { useTheme } from "@mui/material/styles";

export const useThemeColors = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return {
    bgPrimary: isDark ? "#161616" : "#ffffff",
    bgSecondary: isDark ? "#1a1a1a" : "#f5f5f5",
    bgTertiary: isDark ? "#0a0a0a" : "#fafafa",
    
    textPrimary: isDark ? "#fff" : "#1a1a1a",
    textSecondary: isDark ? "#d7d0d7" : "#4a4a4a",
    textTertiary: isDark ? "#999" : "#666",
    
    borderPrimary: isDark ? "#2a2a2a" : "#e0e0e0",
    borderSecondary: isDark ? "#292929ff" : "#d0d0d0",
    
    accent: "#673147",
    accentHover: "#8a3f5e",
    
    divider: isDark ? "#d7d0d7" : "#999",
    
    cardBg: isDark ? "#1a1a1a" : "#f5f5f5",
    cardBgAlt: isDark ? "#000000ff" : "#ffffff",
    
    isDark,
    isLight: !isDark,

    background: {
      default: theme.palette.background.default,
      paper: theme.palette.background.paper,
    },
  };
};
