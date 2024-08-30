import React from "react";
import { Paper, Avatar, Box, Typography } from "@mui/material";
import { resumeData } from "../data/data";

const Sidebar: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3, bgcolor: "background.paper", height: "100%" }}
    >
      {/* Profile Picture */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Avatar
          alt={resumeData.header.name}
          src={resumeData.header.photo}
          sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Typography variant="h5" align="center">
          {resumeData.header.name}
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          {resumeData.header.title}
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1">
          Email: {resumeData.contacts.email}
        </Typography>
        <Typography variant="body1">
          Phone: {resumeData.contacts.phone}
        </Typography>
        <Typography variant="body1">
          LinkedIn:{" "}
          <a
            href={resumeData.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resumeData.contacts.linkedin}
          </a>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Sidebar;
