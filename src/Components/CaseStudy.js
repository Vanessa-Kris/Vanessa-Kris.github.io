import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";
import projects, { getProject } from "../Projects/projectData";
import ProjectCard from "./ProjectCard";

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Section({ label, children }) {
  const colors = useThemeColors();
  return (
    <Reveal>
      <Grid container spacing={{ md: 6, xs: 2 }} sx={{ my: { md: 14, xs: 8 } }}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body2"
            sx={{
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontSize: 12,
              color: colors.textTertiary,
            }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </Reveal>
  );
}

function Media({ item }) {
  const colors = useThemeColors();
  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Box sx={{ bgcolor: item.bg || colors.cardBg, overflow: "hidden" }}>
        {item.type === "palette" ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: `repeat(${item.colors.length}, 1fr)`,
              },
            }}
          >
            {item.colors.map((c) => (
              <Box
                key={c.hex}
                sx={{
                  bgcolor: c.hex,
                  color: c.text,
                  aspectRatio: { xs: "1 / 1", md: "3 / 4" },
                  p: { md: 3, xs: 2 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {c.hex}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : item.type === "logo" ? (
          <Box
            sx={{
              aspectRatio: "4 / 3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={item.src} alt={item.caption || ""} />
          </Box>
        ) : item.type === "video" ? (
          <Box
            component="video"
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            sx={{ width: "100%", display: "block" }}
          />
        ) : (
          <Box
            component="img"
            src={item.src}
            alt={item.caption || ""}
            loading="lazy"
            sx={{
              width: "100%",
              maxWidth: item.maxWidth,
              mx: "auto",
              display: "block",
            }}
          />
        )}
      </Box>
      {item.caption && (
        <Typography
          component="figcaption"
          variant="body2"
          sx={{ mt: 1.5, color: colors.textTertiary }}
        >
          {item.caption}
        </Typography>
      )}
    </Box>
  );
}

export default function CaseStudy({ slug }) {
  const colors = useThemeColors();
  const project = getProject(slug);
  if (!project) return null;

  const {
    client,
    headline,
    summary,
    year,
    role,
    services,
    cover,
    links,
    context,
    tracks,
    delivered,
  } = project;
  const related = projects.filter((p) => p.slug !== slug);

  const metaLabel = {
    variant: "body2",
    sx: {
      letterSpacing: 1.5,
      textTransform: "uppercase",
      fontSize: 11,
      color: colors.textTertiary,
      mb: 1,
    },
  };

  return (
    <Box
      sx={{
        mx: { md: 15, xs: 2.5 },
        pt: { md: 10, xs: 5 },
        color: colors.textSecondary,
      }}
    >
      <Reveal>
        <Typography
          variant="body2"
          sx={{ letterSpacing: 1.5, textTransform: "uppercase", fontSize: 13 }}
        >
          {client}
        </Typography>
        <Typography
          component="h1"
          sx={{
            color: colors.textPrimary,
            fontWeight: 800,
            fontSize: { xs: 40, md: 72 },
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            mt: 2,
          }}
        >
          {headline}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: 20, xs: 17 },
            lineHeight: 1.7,
            maxWidth: 760,
            mt: 4,
          }}
        >
          {summary}
        </Typography>
      </Reveal>

      <Reveal>
        <Grid
          container
          spacing={3}
          sx={{
            mt: { md: 8, xs: 5 },
            py: 4,
            borderTop: `1px solid ${colors.borderPrimary}`,
            borderBottom: `1px solid ${colors.borderPrimary}`,
          }}
        >
          <Grid item xs={6} md={3}>
            <Typography {...metaLabel}>Client</Typography>
            <Typography sx={{ color: colors.textPrimary }}>{client}</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography {...metaLabel}>{year ? "Year" : "Role"}</Typography>
            <Typography sx={{ color: colors.textPrimary }}>
              {year || role}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography {...metaLabel}>Services</Typography>
            {services.map((s) => (
              <Typography key={s} sx={{ color: colors.textPrimary }}>
                {s}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography {...metaLabel}>Links</Typography>
            {links.map((l) => (
              <Box
                key={l.href}
                component="a"
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: colors.textPrimary,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {l.label}
                <ArrowUpOutlined
                  style={{ fontSize: 11, transform: "rotate(45deg)" }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Reveal>

      <Reveal>
        <Box sx={{ mt: { md: 8, xs: 5 }, bgcolor: colors.cardBg }}>
          <Box
            component="img"
            src={cover}
            alt={`${client} cover`}
            sx={{ width: "100%", display: "block" }}
          />
        </Box>
      </Reveal>

      {context?.length > 0 && (
        <Section label="The context">
          {context.map((p, i) => (
            <Typography
              key={i}
              sx={{ fontSize: { md: 20, xs: 17 }, lineHeight: 1.7, mb: 2.5 }}
            >
              {p}
            </Typography>
          ))}
        </Section>
      )}

      {tracks.map((t, i) => (
        <Box
          key={t.title}
          sx={{ borderTop: `1px solid ${colors.borderPrimary}` }}
        >
          <Section label={`${String(i + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`}>
            <Typography
              component="h2"
              sx={{
                color: colors.textPrimary,
                fontWeight: 700,
                fontSize: { xs: 30, md: 44 },
                lineHeight: 1.1,
              }}
            >
              {t.title}
            </Typography>
            <Typography
              sx={{ fontSize: { md: 18, xs: 16 }, lineHeight: 1.7, mt: 2.5 }}
            >
              {t.summary}
            </Typography>
            {t.points?.length > 0 && (
              <Box component="ul" sx={{ pl: 2.5, mt: 2.5, mb: 0 }}>
                {t.points.map((pt) => (
                  <Typography component="li" key={pt} sx={{ lineHeight: 1.7, mb: 1 }}>
                    {pt}
                  </Typography>
                ))}
              </Box>
            )}
          </Section>

          {t.media?.length > 0 && (
            <Grid container spacing={{ md: 4, xs: 3 }} sx={{ mb: { md: 14, xs: 8 }, mt: { md: -6, xs: -3 } }}>
              {t.media.map((m) => (
                <Grid item xs={12} md={m.wide ? 12 : 6} key={m.src || m.type}>
                  <Reveal>
                    <Media item={m} />
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}

      {delivered?.length > 0 && (
        <Box sx={{ borderTop: `1px solid ${colors.borderPrimary}` }}>
          <Section label="What I delivered">
            {delivered.map((d) => (
              <Typography
                key={d}
                sx={{
                  color: colors.textPrimary,
                  fontSize: { xs: 22, md: 30 },
                  lineHeight: 1.25,
                  py: 2,
                  borderBottom: `1px solid ${colors.borderPrimary}`,
                }}
              >
                {d}
              </Typography>
            ))}
          </Section>
        </Box>
      )}

      {related.length > 0 && (
        <Box sx={{ borderTop: `1px solid ${colors.borderPrimary}`, pt: { md: 10, xs: 6 }, mb: { md: 12, xs: 8 } }}>
          <Typography
            sx={{
              color: colors.textPrimary,
              fontWeight: 700,
              fontSize: { xs: 28, md: 40 },
              mb: { md: 5, xs: 3 },
            }}
          >
            More work
          </Typography>
          <Grid container spacing={4}>
            {related.map((p) => (
              <Grid item xs={12} md={6} key={p.slug}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
