import React from "react";
import { Typography } from "@mui/material";
import { StyledBox } from "./styled";
import { resumeData } from "../data/data";

const Header: React.FC = () => {
  return (
    <StyledBox sx={{ padding: "16px", textAlign: "center" }}>
      <Typography
        variant="h2"
        sx={{ marginBottom: "8px", color: "text.primary" }}
      >
        {resumeData.header.name}
      </Typography>
      <Typography variant="h5" sx={{ color: "text.secondary" }}>
        {resumeData.header.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "16px", color: "text.primary" }}
      >
        {resumeData.summary}
      </Typography>
    </StyledBox>
  );
};

export default Header;
