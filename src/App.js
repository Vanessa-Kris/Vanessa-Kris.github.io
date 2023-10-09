import React, { Component } from "react";
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

class App extends Component {
  disableRightClick = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    document.addEventListener("contextmenu", this.disableRightClick);
  }

  componentWillUnmount() {
    document.removeEventListener("contextmenu", this.disableRightClick);
  }

  render() {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
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
            {/* <Route path="about" element={<Layout about={<About />} />} />
            <Route
              path="/portfolio"
              element={<Layout portfolio={<Portfolio />} />}
            />
            <Route path="/services" element={<Layout />} />
            <Route
              path="/experience"
              element={<Layout experience={<Experience />} />}
            />
            <Route path="/reviews" element={<Layout reviews={<Reviews />} />} />
            <Route path="blogs" element={<Layout blogs={<Blogs />} />} />
            <Route path="/contact" element={<Layout contact={<Contact />} />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

export default App;
