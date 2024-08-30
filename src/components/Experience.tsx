import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { StyledBox, TwoColumnContainer } from "./styled";
import { resumeData } from "../data/data";

const Experience: React.FC = () => {
  return (
    <StyledBox sx={{ padding: "16px" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "16px", color: "text.primary" }}
      >
        Experience
      </Typography>
      <TwoColumnContainer>
        {resumeData.experiences.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              maxWidth: 345,
              marginBottom: "16px",
              backgroundColor: "background.paper",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontStyle: "italic", color: "text.secondary" }}
              >
                {item.company} | {item.duration}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "8px", color: "text.primary" }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" sx={{ marginLeft: "auto" }}>
                More Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </TwoColumnContainer>
    </StyledBox>
  );
};

export default Experience;
