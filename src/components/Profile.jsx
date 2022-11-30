import React from "react";
import nkar from "./images/nkar.jpg";
export default function Profile() {
  return (
    <>
      <img src={nkar} className="profilePic" alt="" />
      <h2>Anna Baharyan</h2>
      <h3>Front-end Developer</h3>
    </>
  );
}
