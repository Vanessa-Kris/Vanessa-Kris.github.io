import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Reviews from "./Sections/Reviews";
import Experience from "./Sections/Experience";
import Blogs from "./Sections/Blogs";
import PageNotFound from "./Pages/404";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Name from "./Sections/Name";
import Layout from "./Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Intro from "./Sections/Intro";
import Loader from "./Components/Loader";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673147",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
      document.removeEventListener("contextmenu", disableRightClick);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path=""
              element={
                <Layout
                  nav={<NavBar />}
                  name={<Name />}
                  intro={<Intro />}
                  about={<About />}
                  experience={<Experience />}
                  portfolio={<Portfolio />}
                  reviews={<Reviews />}
                  blogs={<Blogs />}
                  contact={<Contact />}
                  footer={<Footer />}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
