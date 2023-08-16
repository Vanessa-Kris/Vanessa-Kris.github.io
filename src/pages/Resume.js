import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import resume from "../images/Resume.pdf";
import resumepng from "../images/resume.png";

function downloadUrl(url) {
  window.open(url, "_self");
}

function Resume() {
  return (
    <Box sx={{ my: { md: 17, xs: 10 } }}>
      <Box
        sx={{
          mb: 17,
          px: { md: "250px", xs: "0" },
        }}
      >
        <img src={resumepng} alt="Vanessa's Resume" width="100%" />
      </Box>
      <Box align="start" sx={{ pl: { md: 30, xs: 2 } }}>
        <Button
          href={resume}
          sx={{ px: 10 }}
          variant="outlined"
          onClick={downloadUrl}
        >
          Download
        </Button>
        <a href="#/contact">
          <Box sx={{ pt: 10, pl: 2 }}>
            Contact <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        </a>
      </Box>
    </Box>
  );
}

export default Resume;
