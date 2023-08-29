import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img6 from "../image/6.png";
import img7 from "../image/7.png";
import img8 from "../image/8.png";
import img9 from "../image/9.png";
import img10 from "../image/10.png";

export default function Project() {
  return (
    <Box sx={{ py: 15 }}>
      <Typography
        className="dim"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "50px", md: "100px" },
          pl: { xs: 2, md: 5 },
        }}
      >
        Projects
      </Typography>
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://stunnersgalleria.com"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Stunners Galleria Website"
                height="100%"
                image={img1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stunners Galleria
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  No 1 online fashion and beauty store in Cameroon
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  React
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  NextJs
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://blog.stunnersgalleria.com"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Stunners Galleria blod website"
                height="100%"
                image={img2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stunners Galleria Blog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Official blog feed for Stunners Galleria, generated with
                  Jekyll
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Jekyll
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  JavaScript
                </Button>

                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Html
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Markdown
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://smswithoutborders.com"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="SMSWithoutBorders"
                height="100%"
                image={img3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SMSWithoutBorders
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Offline messaging tool (Just a contributor and maintainer)
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  React
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  API
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://impact-investment.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Impact investment website"
                height="100%"
                image={img4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Impact Investment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Business website for trading company and investment Portfolio
                  management
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Bootstrap
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://afkanerd.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Start up website"
                height="100%"
                image={img7}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Afkanerd
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tech startup company website.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Bootstrap
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://vanessachristopher.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Portfolio website"
                height="100%"
                image={img6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  My Portfolio V1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  My personal Portfolio version one.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Bootstrap
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://stunnersweet.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Pasteries website"
                height="100%"
                image={img8}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stunners Sweet Tooth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pasteries online store
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  SCSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  JavaScript
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://stunners.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Fashion business website"
                height="100%"
                image={img9}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stunners
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Perfumes, bags and make up online store
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Bootstrap
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ p: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a
            href="https://aroma-kitchen.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <Card sx={{ maxWidth: 445, bgcolor: "#000" }}>
              <CardMedia
                component="img"
                alt="Aroma kitchen website"
                height="100%"
                image={img10}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aroma Kitchen
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Food ordering website
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  HTML
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  CSS
                </Button>
                <Button
                  sx={{ borderRadius: 30, fontSize: 11 }}
                  disabled
                  variant="contained"
                  size="small"
                >
                  Bootstrap
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
        {/*  */}
      </Grid>
      <a href="#/resume">
        <Box align="start" sx={{ p: { md: 7, xs: 4 } }}>
          Resume <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </a>
    </Box>
  );
}
