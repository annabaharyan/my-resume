import { Box } from "@mui/material";
import React from "react";

export default function Skil() {
  const skills = [
    { name: "HTML", range: 100 },
    { name: "CSS", range: 100 },
    { name: "SCSS", range: 100 },
    { name: "Figma", range: 80 },
    { name: "JavaScript", range: 95 },
    { name: "React.js", range: 80 },
    { name: "Redux", range: 80 },
    { name: "MobX", range: 80 },
    { name: "jQuery", range: 80 },
    { name: "Material-UI", range: 90 },
    { name: "TailwindCSS", range: 90 },
    { name: "git/GitHub", range: 90 },
    { name: "MS Office Suite", range: 100 },
  ];
  return (
    <div>
      <h2>PROFESSIONAL SKILLS</h2>
      <div className="mySkills">
        {skills.map((skill, index) => (
          <Box sx={{ width: "40%", marginTop: "10px" }} key={index}>
            {skill.name}
            <div className="max">
              <div
                className="myPersent"
                style={{ width: `${skill.range}%` }}
              ></div>
            </div>
          </Box>
        ))}
      </div>
      <p id="experiences"></p>
    </div>
  );
}
