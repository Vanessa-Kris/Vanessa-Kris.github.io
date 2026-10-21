import { Box, Typography, Divider, Grid, List, ListItem } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function About() {
  const colors = useThemeColors();
  
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: colors.textSecondary, px: {xs: 1.5} }}>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}>
        About Me
        <Divider
          flexItem
          sx={{ bgcolor: colors.divider, width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography>
        With over two years of hands-on experience designing and developing
        real-world applications. Originally from the vibrant city of Port
        Harcourt and now based in Cameroon. I’m open to collaborations,
        freelance projects, and opportunities that challenge me.
      </Typography>

      <Grid container sx={{ my: 5 }}>
        <Grid item md={3} xs={4}>
          <List>
            <ListItem> NAME </ListItem>
            <ListItem> PRONOUNS </ListItem>
            <ListItem> BIRTHDAY </ListItem>
            <ListItem> ADDRESS </ListItem>
            <ListItem> NATIONALITY </ListItem>
            <ListItem> INTERESTS</ListItem>
            <ListItem> EMAIL </ListItem>
          </List>
        </Grid>
        <Grid item md={4} xs={8} sx={{ color: colors.textPrimary }}>
          <List>
            <ListItem> Vanessa Christopher Igwe </ListItem>
            <ListItem> She/Her </ListItem>
            <ListItem> 10th August </ListItem>
            <ListItem> Cameroon </ListItem>
            <ListItem> Nigerian </ListItem>
            <ListItem> Food, Open Source, Music. </ListItem>
            <ListItem> info@vanessaigwe.com </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
