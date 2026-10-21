import React, { Fragment, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Name from "./Sections/Name";
import { useThemeColors } from "./hooks/useThemeColors";

export default function Layout(props) {
  const colors = useThemeColors();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScrolled = scrollPosition > 100;

  const smoothShiftTransition = {
    transition: "flex-basis 0.95s cubic-bezier(0.22, 0.61, 0.36, 1), max-width 0.95s cubic-bezier(0.22, 0.61, 0.36, 1), width 0.95s cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "flex-basis, max-width, width",
  };

  const sectionSpacing = { mb: { md: 25, xs: 6 } };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = <NavBar mode={props.mode} toggleTheme={props.toggleTheme} />;
  const footer = <Footer />;

  if (props.children) {
    return (
      <Fragment>
        {nav}
        <Box sx={{ pt: { md: 9, xs: 8 } }}>{props.children}</Box>
        {footer}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {nav}
      <Box sx={{ display: { md: "block", xs: "none" }, pt: 9 }}>
        <Grid
          id="layout"
          container
          columnSpacing={2}
          className={isScrolled ? "transition-delay" : ""}
        >
          <Grid item md={isScrolled ? 8.5 : 7.5} xs={12} sx={smoothShiftTransition}>
            <Box id="intro" sx={sectionSpacing}>{props.intro}</Box>
            <Box id="portfolio" sx={sectionSpacing}>{props.portfolio}</Box>
            <Box id="footer">{footer}</Box>
          </Grid>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              display: { md: "none", xl: "block" },
              bgcolor: colors.borderPrimary,
              width: "1px",
              transition: "all 0.95s cubic-bezier(0.22, 0.61, 0.36, 1)",
            }}
          />

          <Grid
            item
            className="sticky-grid"
            sx={{
              ...smoothShiftTransition,
              width: isScrolled
                ? { md: 340, lg: 380, xl: 440 }
                : { md: 420, lg: 480, xl: 560 },
            }}
          >
            <Name />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" }, pt: 8 }}>
        {props.name}
        <Box id="intro" sx={sectionSpacing}>{props.intro}</Box>
        <Box id="portfolio" sx={sectionSpacing}>{props.portfolio}</Box>
        {footer}
      </Box>
    </Fragment>
  );
}
