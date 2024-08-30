import React from "react";
import { Paper, Typography } from "@mui/material";
import { resumeData } from "../data/data";

const AboutMe: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: "background.paper" }}>
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">{resumeData.summary}</Typography>
    </Paper>
  );
};

export default AboutMe;
