import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Experience from "./Sections/Experience";
// import Blogs from "./Sections/Blogs";
import PageNotFound from "./Pages/404";
import GetInTouch from "./Pages/GetInTouch";
import Name from "./Sections/Name";
import Layout from "./Layout";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Intro from "./Sections/Intro";
import Loader from "./Components/Loader";
import Projects from "./Pages/Projects";
import RelaySMS from "./Projects/RelaySMS";
import SMSWithoutBorders from "./Projects/SMSWithoutBorders";
import Shortmesh from "./Projects/Shortmesh";
import Promisefru from "./Projects/Promisefru";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./Components/SEO";
import Afkanerd from "./Projects/Afkanerd";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: mode,
            primary: {
              main: "#681838",
            },
            secondary: {
              main: mode === "dark" ? "#fff" : "#000",
            },
            background: {
              default: mode === "dark" ? "#161616" : "#ffffff",
              paper: mode === "dark" ? "#191919" : "#fafafa",
            },
            text: {
              primary: mode === "dark" ? "#d7d0d7" : "#1a1a1a",
              secondary: mode === "dark" ? "#999" : "#666",
            },
          },
          typography: {
            fontFamily: "'Gabarito', sans-serif",
            body1: { fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 },
            body2: { fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 },
          },
          components: {
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  transition: "background-color 0.3s ease, color 0.3s ease",
                },
              },
            },
          },
        }),
      ),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);
    setTimeout(() => {
      setIsLoading(false);
      document.removeEventListener("contextmenu", disableRightClick);
    }, 3000);
  }, []);

  useEffect(() => {
    document.body.className = mode === "dark" ? "dark-mode" : "light-mode";
  }, [mode]);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoading ? (
            <Loader />
          ) : (
            <Routes>
              <Route
                path=""
                element={
                  <>
                    <SEO />
                    <Layout
                      mode={mode}
                      toggleTheme={toggleTheme}
                      name={<Name />}
                      intro={<Intro />}
                      about={<About />}
                      portfolio={<Portfolio />}
                      experience={<Experience />}
                      // blogs={<Blogs />}
                    />
                  </>
                }
              />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/projects"
                element={
                  <>
                    <SEO
                      title="Projects - Vanessa Christopher"
                      description="See projects Vanessa has worked on including RelaySMS, ShortMesh, and other web applications."
                      url="/projects"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <Projects />
                    </Layout>
                  </>
                }
              />
              <Route
                path="/get-in-touch"
                element={
                  <>
                    <SEO
                      title="Get in touch - Vanessa Christopher"
                      description="Have a project, collaboration, or just want to say hello? Get in touch with Vanessa Christopher."
                      url="/get-in-touch"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <GetInTouch />
                    </Layout>
                  </>
                }
              />
              <Route
                path="projects/relaysms"
                element={
                  <>
                    <SEO
                      title="RelaySMS - Project by Vanessa Christopher"
                      description="Product page redesign and desktop app for RelaySMS, built with React and Material-UI. Showcasing clean design and a user-friendly interface."
                      url="/projects/relaysms"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <RelaySMS />
                    </Layout>
                  </>
                }
              />
              <Route
                path="projects/smswithoutborders"
                element={
                  <>
                    <SEO
                      title="SMSWithoutBorders - Project by Vanessa Christopher"
                      description="An analytics dashboard for RelaySMS featuring data visualization, real-time metrics, and comprehensive user insights."
                      url="/projects/smswithoutborders"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <SMSWithoutBorders />
                    </Layout>
                  </>
                }
              />
              <Route
                path="projects/afkanerd"
                element={
                  <>
                    <SEO
                      title="Afkanerd - Project by Vanessa Christopher"
                      description="Brand identity and website for an African team of engineers, researchers and creatives."
                      url="/projects/afkanerd"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <Afkanerd />
                    </Layout>
                  </>
                }
              />
              <Route
                path="projects/relaysms-website"
                element={<Navigate to="/projects/relaysms" replace />}
              />
              <Route
                path="projects/relaysms-desktop"
                element={<Navigate to="/projects/relaysms" replace />}
              />
              <Route
                path="projects/relaysms-telemetry"
                element={<Navigate to="/projects/smswithoutborders" replace />}
              />
              <Route
                path="projects/shortmesh"
                element={
                  <>
                    <SEO
                      title="Shortmesh - Project by Vanessa Christopher"
                      description="Designed and developed the Shortmesh Authy website, Authy widget, and Interface API dashboard experience."
                      url="/projects/shortmesh"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <Shortmesh />
                    </Layout>
                  </>
                }
              />
              <Route
                path="projects/promisefru"
                element={
                  <>
                    <SEO
                      title="Promise Fru - Project by Vanessa Christopher"
                      description="Brand identity, colour scheme, logo and website design for Promise Fru, a cryptographic protocol and backend engineer."
                      url="/projects/promisefru"
                    />
                    <Layout mode={mode} toggleTheme={toggleTheme}>
                      <Promisefru />
                    </Layout>
                  </>
                }
              />
            </Routes>
          )}
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
