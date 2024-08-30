import styled from "styled-components";
import { Box, Container, Paper } from "@mui/material";

// Styled Container with background image and padding
export const StyledContainer = styled(Container)`
  margin-top: 16px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  background-image: url("https://source.unsplash.com/random"); /* Background image URL */
  background-size: cover;
  background-position: center;
  padding: 16px;
`;

// Floating effect using gradients without borders
export const StyledPaper = styled(Paper)`
  padding: 24px;
  background-color: ${(props) => props.theme.paperBackground};
  border-radius: 12px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.paperBackground},
    ${(props) => props.theme.paperBackgroundLight}
  );
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

// Styled Box for flexible layout without borders
export const StyledBox = styled(Box)`
  padding: 16px;
  background-color: ${(props) => props.theme.boxBackground};
  border-radius: 12px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.boxBackground},
    ${(props) => props.theme.boxBackgroundLight}
  );
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
  }
`;

// Container for two-column layout
export const TwoColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  > div {
    flex: 1;
    min-width: 250px; /* Adjust as needed for responsiveness */
  }
`;
