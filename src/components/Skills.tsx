import React from "react";
import { Paper, Typography, Box, Chip } from "@mui/material";
import { resumeData } from "../data/data";

const Skills: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: "background.paper" }}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {resumeData.skills.map((skill, index) => (
          <Chip key={index} label={skill.name} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Box>
    </Paper>
  );
};

export default Skills;
