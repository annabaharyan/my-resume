import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
export default function Config() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
