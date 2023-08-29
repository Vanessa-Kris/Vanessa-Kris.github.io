import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@mui/material";
import "../components/styles.css";

const Contact = () => {
  return (
    <Box sx={{ height: { md: "100vh", xs: "100%" }, py: 15, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
          <a
            href="mailto:vanessaigwe1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faEnvelope}
              />
              Email
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://wa.link/1r1q4f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faWhatsapp}
              />
              WhatsApp
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://github.com/Vanessa-Kris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faGithub}
              />
              GitHub
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://web.facebook.com/vanessa.igwe.35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faFacebook}
              />
              Facebook
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://twitter.com/Mini_on_Nessa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faTwitter}
              />
              Twitter
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://www.linkedin.com/in/vanessa-christopher-igwe-712807218/"
            target="_blank"
            rel="noopener noreferrer "
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faLinkedin}
              />
              LinkedIn
            </Box>
          </a>
        </Grid>
        <Grid item md={4} xs={12}>
          <a
            href="https://www.instagram.com/vanessa_christopher_i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ bgcolor: "#38369A", p: 5 }}>
              <FontAwesomeIcon
                bounce
                style={{ paddingRight: 12 }}
                icon={faInstagram}
              />
              Instagram
            </Box>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
