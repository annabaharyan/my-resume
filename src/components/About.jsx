import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function About() {
  return (
    <>
    
      <h2>ABOUT ME</h2>
      <p>
        I’m a purposeful and hard-working person who is ready for new
        challenges. Programming is my third profession. I believe that
        collaboration in a team and hard work can help to achieve success. Eager
        to obtain a challenging position at a company that will expand my
        learning and grow up my skills.
      </p>
      <h2>CONTACTS</h2>
      <p>
        <MailIcon className="icon" /> annabaharyan91@gmail.com
      </p>
      <p>
        <SmartphoneIcon className="icon" />
        <a href="tel://+37494803112" className="contact">
          +374 94 80 31 12
        </a>
      </p>
      <p>
        <LinkedInIcon className="icon" />
        <a
          href="https://www.linkedin.com/in/anna-baharyan91"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          LinkedIn
        </a>
      </p>
      <h2 id="skills">LANGUAGES </h2>
      Armenian • English • Russian
    </>
  );
}
