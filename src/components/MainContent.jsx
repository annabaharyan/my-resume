import { Grid } from "@mui/material";
import React from "react";
import "../components/CSS/main.css";
import Profile from "./Profile";
import About from "./About";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Portfolios from "./Portfolios";
import Skil from "./Skil";
export default function MainContent() {
  return (
    <Grid container spacing={3} sx={{ justifyContent: "center" }}>
      <Grid item xs>
        <Profile />
      </Grid>
      <Grid item xs={9} sx={{ paddingBottom: "50px" }}>
        <About className="contentWrapper" id="about" />
        <Skil />
        <Experiences />
        <Educations />
        <Portfolios />
      </Grid>
    </Grid>
  );
}
