import { Box, Container, Typography, Skeleton, IconButton, Paper } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  PlusOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Name() {
  const colors = useThemeColors();
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cardHeight = isScrolled
    ? { xs: 300, md: 380, lg: 430, xl: 500 }
    : { xs: 450, md: 480, lg: 550, xl: 640 };

  return (
    <Container
      sx={{
        mb: isScrolled ? { md: 2, xs: 5 } : 5,
        mt: isScrolled ? { md: 4, xs: 12 } : 12,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.textSecondary,
        transition: "margin 0.4s ease",
      }}
    >
      <Paper
      elevation={6}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: cardHeight,
          bgcolor: colors.cardBg,
          borderRadius: "8px",
          border: `1px solid ${colors.borderPrimary}`,
          boxShadow: colors.isDark
            ? "0 12px 28px rgba(0,0,0,0.45)"
            : "0 12px 28px rgba(0,0,0,0.18)",
          transition: "height 0.4s ease",
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            sx={{ position: "absolute", inset: 0 }}
            width="100%"
            height="100%"
          />
        ) : (
          <Box
            component="img"
            alt="A picture of Vanessa"
            src="/new1.png"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "62%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 20%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            px: { md: 2, xs: 2 },
            pb: { md: 2, xs: 2 },
          }}
        >
          <Typography sx={{ color: "#fff", mt: 2 }}>
            MEET ME!
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="h4" sx={{ flexShrink: 0, color: "#fff" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, repeat: Infinity }}
              >
                {"{"}
              </motion.div>
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: isScrolled
                  ? { md: "18px", lg: "20px", xl: "22px", xs: "22px" }
                  : { md: "25px", lg: "28px", xl: "32px", xs: "22px" },
                whiteSpace: "nowrap",
                transition: "font-size 0.4s ease",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  500,
                  "UI/UX Designer",
                  500,
                  "Usability Consultant",
                  500,
                  "Product Designer",
                  500,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </Box>
            <Typography variant="h4" sx={{ flexShrink: 0, color: "#fff" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, repeat: Infinity }}
              >
                {"}"}
              </motion.div>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1.5,
              mt: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: "999px",
                px: 2,
                py: 1,
                transition: "border-color 0.3s ease",
                "&:hover": { borderColor: "#fff" },
                "&:hover .follow-platforms": {
                  maxWidth: "120px",
                  opacity: 1,
                  marginLeft: "12px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                }}
              >
                <PlusOutlined style={{ fontSize: "15px" }} />
                Follow
              </Typography>
              <Box
                className="follow-platforms"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  maxWidth: 0,
                  opacity: 0,
                  overflow: "hidden",
                  transition:
                    "max-width 0.35s ease, opacity 0.25s ease, margin-left 0.35s ease",
                }}
              >
                <Box
                  component="a"
                  href="https://github.com/Vanessa-Kris"
                  target="_blank"
                  rel="noreferrer noopener"
                  sx={{ color: "#fff", display: "flex" }}
                >
                  <GithubOutlined style={{ fontSize: "20px" }} />
                </Box>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/vanessachristopherigwe"
                  target="_blank"
                  rel="noreferrer noopener"
                  sx={{ color: "#fff", display: "flex" }}
                >
                  <LinkedinFilled style={{ fontSize: "20px" }} />
                </Box>
                <Box
                  component="a"
                  href="https://www.instagram.com/vanessachristopherigwe/"
                  target="_blank"
                  rel="noreferrer noopener"
                  sx={{ color: "#fff", display: "flex" }}
                >
                  <InstagramOutlined style={{ fontSize: "20px" }} />
                </Box>
              </Box>
            </Box>

            <IconButton
              component="a"
              href="mailto:info@vanessaigwe.com"
              aria-label="Email Vanessa"
              sx={{
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: "999px",
                p: 1.3,
                color: "#fff",
                transition: "border-color 0.3s ease",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              <MailOutlined style={{ fontSize: "16px" }} />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
