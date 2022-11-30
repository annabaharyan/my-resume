import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Portfolios() {
  return (
    <div>
      <h4 >You can see my work on my GitHub page</h4>
      <p>
        <a
          href="https://github.com/annabaharyan"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <GitHubIcon className="icon" sx={{ marginRight: "5px" }} />
          GitHub
        </a>
      </p>
    </div>
  );
}
