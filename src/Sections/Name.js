import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Name() {
  return (
    <Container
      sx={{
        my: 5,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#d7d0d7",
      }}
    >
      <Box sx={{ p: 1, border: "1px solid #a55f71", borderRadius: "5px" }}>
        <Box sx={{ p: 2, border: "1px solid #a55f71", borderRadius: "5px" }}>
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-generated-ai_88188-3329.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
          />
          <Typography textAlign="center" variant="h6" sx={{ m: 2 }}>
            HEY THERE! I AM A
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
            sx={{ my: 2 }}
          >
            <Grid item md={1} xs={1}>
              <Typography sx={{ color: "green" }} variant="h4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  {"{"}
                </motion.div>
              </Typography>
            </Grid>
            <Grid item md={9} xs={9}>
              <Box textAlign="center">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    500,
                    "Freelancer",
                    500,
                    "UI/UX Engineer",
                    500,
                    "Entrepreneur",
                    500,
                  ]}
                  style={{ fontSize: "25px" }}
                  speed={40}
                  repeat={Infinity}
                />
              </Box>
            </Grid>
            <Grid item md={1} xs={1}>
              <Typography sx={{ color: "green" }} variant="h4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  {"}"}
                </motion.div>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
