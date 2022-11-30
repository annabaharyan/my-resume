import { Container } from "@mui/material";
import React from "react";
import MainContent from "./MainContent";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <MainContent />
      </Container>
    </>
  );
}
