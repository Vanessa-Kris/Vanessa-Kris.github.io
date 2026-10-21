import { Box, Typography } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Projects/projectData";

function Projects() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        mx: { md: 15, xs: 2.5 },
        pt: { md: 10, xs: 5 },
        pb: { md: 12, xs: 8 },
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
        Selected work
      </Typography>
      <Typography
        sx={{ fontSize: { md: 20, xs: 17 }, lineHeight: 1.7, maxWidth: 680, mt: 3 }}
      >
        Each project brings together several pieces of work done for one
        product, from websites and apps to dashboards.
      </Typography>

      <Box sx={{ mt: { md: 10, xs: 6 } }}>
        {projects.map((p) => (
          <Box
            key={p.slug}
            sx={{
              py: { md: 8, xs: 5 },
              borderTop: `1px solid ${colors.borderPrimary}`,
            }}
          >
            <ProjectCard project={p} variant="row" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
