import { Box, Typography } from "@mui/material";
import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

const EMAIL = "info@vanessaigwe.com";

function GetInTouch() {
  const colors = useThemeColors();

  const label = {
    variant: "body2",
    sx: {
      letterSpacing: 1.5,
      textTransform: "uppercase",
      fontSize: 12,
      color: colors.textTertiary,
      mb: 1.5,
    },
  };

  return (
    <Box
      sx={{
        mx: { md: 15, xs: 2.5 },
        pt: { md: 20, xs: 5 },
        pb: { md: 16, xs: 10 },
        color: colors.textSecondary,
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: colors.textPrimary,
          fontWeight: 800,
          fontSize: { xs: 40, md: 72 },
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Get in touch
      </Typography>
      <Typography
        sx={{ fontSize: { md: 20, xs: 17 }, lineHeight: 1.7, maxWidth: 680, mt: 3 }}
      >
        If you have a project, collaboration, or just want to say hello, reach
        out through the details below.
      </Typography>

      <Box
        sx={{
          mt: { md: 10, xs: 6 },
          borderTop: `1px solid ${colors.borderPrimary}`,
        }}
      >
        <Box sx={{ py: { md: 6, xs: 4 }, borderBottom: `1px solid ${colors.borderPrimary}` }}>
          <Typography {...label}>Email</Typography>
          <Box
            component="a"
            href={`mailto:${EMAIL}`}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: { md: 2, xs: 1 },
              color: colors.textPrimary,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: { xs: 26, md: 52 },
              lineHeight: 1.1,
              wordBreak: "break-word",
              "& .anticon": { transition: "transform 0.3s ease" },
              "&:hover .anticon": { transform: "rotate(45deg) translate(4px, 0)" },
            }}
          >
            {EMAIL}
            <ArrowUpOutlined style={{ fontSize: "0.6em", transform: "rotate(45deg)" }} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default GetInTouch;
