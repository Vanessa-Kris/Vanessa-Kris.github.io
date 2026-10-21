import { Box, Typography, Divider, Grid } from "@mui/material";
import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Projects/projectData";

export default function Portfolio() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        pt: 7,
        color: colors.textSecondary,
        px: { xs: 1.5 },
      }}
    >
      <Typography variant="body2" sx={{ my: { md: 2, xs: 2 } }}>
        PROJECTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: { md: 3, xs: 3 },
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: colors.textPrimary }}>
            Work Highlights
          </Typography>
          <Divider
            flexItem
            sx={{
              bgcolor: colors.divider,
              width: { md: "20%", xs: "40%" },
              my: 2,
            }}
          />
        </Box>

        <Box
          component="a"
          href="/projects"
          aria-label="See all work"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            overflow: "hidden",
            textDecoration: "none",
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "999px",
            height: 48,
            width: 48,
            flexShrink: 0,
            transition: "width 0.35s ease, border-color 0.3s ease",
            "&:hover": {
              width: 176,
              borderColor: colors.textPrimary,
            },
            "&:hover .view-all-label": {
              maxWidth: "140px",
              opacity: 1,
              marginLeft: "16px",
            },
          }}
        >
          <Typography
            className="view-all-label"
            sx={{
              color: colors.textPrimary,
              fontSize: "14px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              maxWidth: 0,
              opacity: 0,
              marginLeft: 0,
              overflow: "hidden",
              transition:
                "max-width 0.35s ease, opacity 0.25s ease, margin-left 0.35s ease",
            }}
          >
            See all work
          </Typography>
          <Box
            sx={{
              width: 46,
              height: 46,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colors.textPrimary,
            }}
          >
            <ArrowUpOutlined style={{ fontSize: "18px", transform: "rotate(45deg)" }} />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={4} rowSpacing={7}>
        {projects.map((p, i) => (
          <Grid item xs={12} md={i === 0 ? 12 : 6} key={p.slug}>
            <ProjectCard project={p} variant={i === 0 ? "row" : "card"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
