import { Box, Typography } from "@mui/material";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

export default function ProjectCard({ project, variant = "card" }) {
  const colors = useThemeColors();
  const isRow = variant === "row";
  const { slug, client, headline, summary, services, cover, tracks } = project;

  return (
    <Box
      component="a"
      href={`/projects/${slug}`}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: isRow ? "1.2fr 1fr" : "1fr" },
        gap: { xs: 2.5, md: isRow ? 6 : 2.5 },
        alignItems: "center",
        textDecoration: "none",
        color: colors.textSecondary,
        "&:hover .project-card-image": { transform: "scale(1.04)" },
        "&:hover .project-card-cta": { gap: "14px", color: colors.textPrimary },
      }}
    >
      <Box sx={{ overflow: "hidden", bgcolor: colors.cardBg }}>
        <Box
          className="project-card-image"
          component="img"
          src={cover}
          alt={`${client} project preview`}
          sx={{
            width: "100%",
            aspectRatio: "4 / 3",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.6s ease",
          }}
        />
      </Box>

      <Box>
        <Typography
          variant="body2"
          sx={{ letterSpacing: 1.5, textTransform: "uppercase", fontSize: 12 }}
        >
          {client}
        </Typography>
        <Typography
          sx={{
            color: colors.textPrimary,
            fontWeight: 700,
            fontSize: isRow ? { xs: 26, md: 34 } : { xs: 22, md: 26 },
            lineHeight: 1.2,
            mt: 1,
          }}
        >
          {headline}
        </Typography>

        {isRow && (
          <Typography sx={{ mt: 2, lineHeight: 1.7 }}>{summary}</Typography>
        )}

        {isRow && tracks?.length > 0 && (
          <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, mt: 3 }}>
            {tracks.map((t, i) => (
              <Box
                component="li"
                key={t.title}
                sx={{
                  display: "flex",
                  gap: 2,
                  py: 1.25,
                  borderTop: `1px solid ${colors.borderPrimary}`,
                  "&:last-of-type": {
                    borderBottom: `1px solid ${colors.borderPrimary}`,
                  },
                }}
              >
                <Typography sx={{ color: colors.textTertiary, fontSize: 14 }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography sx={{ color: colors.textPrimary, fontSize: 15 }}>
                  {t.title}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {services.map((s) => (
            <Box
              key={s}
              component="span"
              sx={{
                border: `1px solid ${colors.borderPrimary}`,
                borderRadius: "999px",
                px: 1.5,
                py: 0.5,
                fontSize: 12,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>

        <Typography
          className="project-card-cta"
          sx={{
            mt: 2.5,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: 14,
            fontWeight: 600,
            transition: "gap 0.3s ease, color 0.3s ease",
          }}
        >
          See how it worked <ArrowRightOutlined />
        </Typography>
      </Box>
    </Box>
  );
}
