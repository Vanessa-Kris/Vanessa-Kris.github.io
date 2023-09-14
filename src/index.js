import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landing from "./pages/Landing";
import ResponsiveAppBar from "./components/navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import PageNotFound from "./pages/404";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Particle from "./components/Particle";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <React.StrictMode>
        <RouterProvider router={router} />
        <CssBaseline />
        <ResponsiveAppBar />
        <Footer />
        <Particle />
      </React.StrictMode>
    </ThemeProvider>
  );
}

root.render(<Index />);
