import React from "react";
import Scroll from "../components/scroll";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Box>
      <Box sx={{ p: 5, pt: { xs: 10, md: 15 } }}>
        <Typography
          className="dim"
          sx={{ fontWeight: 900, fontSize: { xs: "60px", md: "90px" } }}
        >
          About Me
        </Typography>
        <Typography variant="h6" sx={{ color: "#fafafa", bgcolor: "#11102e" }}>
          I’m Vanessa Christopher Igwe, a Nigerian residing in Cameroon. As a
          full-time web developer, I love building awesome projects and
          contributing to open-source projects.
        </Typography>
        <Typography variant="h6" sx={{ py: 5, bgcolor: "#11102e" }}>
          But that’s not all – I’m also exploring the world of design, always
          wanting to learn and grow in this fascinating field In addition to my
          digital endeavors, I love all things art-related. Whether I'm
          performing as a singer, expressing my culinary skills as a chef, or
          expressing my creativity through makeup, I love expressing myself
          through different spaces. That's why people often call me
          "multi-talented."
        </Typography>

        <Typography variant="h6" sx={{ pb: 5, bgcolor: "#11102e" }}>
          One of the strongest fits for me is my cooperation with others. I
          enjoy being part of a team, and my friendly attitude has impressed
          many colleagues. If we get a chance to work together, I’m sure we’ll
          stay swimming.
        </Typography>

        <Typography variant="h6" sx={{ bgcolor: "#11102e" }}>
          Currently, I am looking for exciting opportunities to develop new
          projects and collaborate with like-minded individuals. Let’s start
          this journey of creativity and innovation together! Feel free – I’m
          looking forward to making new friends and bringing great ideas to
          life.
        </Typography>
      </Box>
      <Typography
        sx={{ px: 5, py: 1, fontWeight: 900 }}
        variant="h2"
        className="dim"
      >
        Skills
      </Typography>
      <Scroll />

      <Box sx={{ p: 5, pt: 15 }}>
        <Typography className="dim" variant="h3">
          Photo Gallery
        </Typography>
        <Typography variant="h6" sx={{ bgcolor: "#11102e" }}>
          For the love of food, pictures and nature, I'd love to share my world
          through photos. But! you'll have to visit my{" "}
          <a
            href="https://facebook.com/vanessa.igwe.35"
            rel="noreferrer"
            target="_blank"
          >
            facebook
          </a>{" "}
          or{" "}
          <a
            href="https://www.instagram.com/vanessa_christopher_i"
            rel="noreferrer"
            target="_blank"
          >
            instagram
          </a>
        </Typography>
      </Box>

      <a href="#/project">
        <Box align="start" sx={{ p: { md: 13, xs: 7 } }}>
          Projects <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </a>
    </Box>
  );
}
