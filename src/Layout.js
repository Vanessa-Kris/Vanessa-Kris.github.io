import React, { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import MouseMotionCircle from "./Components/Motion";
import NavBar from "./Components/NavBar";
import Name from "./Sections/Name";

export default function Layout(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Grid
          id="layout"
          container
          columnSpacing={2}
          className={scrollPosition > 100 ? "transition-delay" : ""}
        >
          <Grid item md={scrollPosition > 100 ? 8 : 7} xs={12}>
            <Box id="intro">{props.intro}</Box>
            <Box id="about">{props.about}</Box>
            <Box id="experience">{props.experience}</Box>
            <Box id="portfolio">{props.portfolio}</Box>
            <Box id="reviews">{props.reviews}</Box>
            <Box id="blogs">{props.blogs}</Box>
            <Box id="contact">{props.contact}</Box>
            <Box id="footer">{props.footer}</Box>
          </Grid>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ bgcolor: "#a55f71", transition: "all 0.3s ease 0.5s" }}
          />
          <Box
            sx={{
              position: "fixed",
              right: 0,
              pr: 4,
            }}
          >
            <NavBar />
            {/* {props.nav} */}
          </Box>

          <Grid item md={scrollPosition > 100 ? 3 : 4} className="sticky-grid">
            <Name />
            {/* {props.name} */}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {/* {props.intro}
        {props.about}
        {props.experience}
        {props.portfolio}
        {props.reviews}
        {props.blogs}
        {props.contact}
        {props.footer} */}

        {props.nav}
        {props.name}
        <Box id="intro">{props.intro}</Box>
        <Box id="about">{props.about}</Box>
        <Box id="experience">{props.experience}</Box>
        <Box id="portfolio">{props.portfolio}</Box>
        <Box id="reviews">{props.reviews}</Box>
        <Box id="blogs">{props.blogs}</Box>
        <Box id="contact">{props.contact}</Box>
        {props.footer}
      </Box>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} />
      </Box>
    </Fragment>
  );
}
