import React from "react";
import { Typography } from "@mui/material";
import { StyledBox, TwoColumnContainer } from "./styled";
import { resumeData } from "../data/data";

const Education: React.FC = () => {
  return (
    <StyledBox>
      <Typography
        variant="h4"
        sx={{ marginBottom: "16px", color: "text.primary" }}
      >
        Education
      </Typography>
      <TwoColumnContainer>
        {resumeData.education.map((item, index) => (
          <StyledBox
            key={index}
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {item.degree}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              {item.institution}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "8px", color: "text.primary" }}
            >
              {item.duration}
            </Typography>
          </StyledBox>
        ))}
      </TwoColumnContainer>
    </StyledBox>
  );
};

export default Education;
