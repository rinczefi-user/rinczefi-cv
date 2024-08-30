import React from "react";
import { StyledContainer, StyledBox, StyledPaper } from "./components/styled";
import {
  Header,
  Sidebar,
  AboutMe,
  Experience,
  Skills,
  Education,
} from "./components";

const App: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <StyledBox display="flex" flexDirection="row" gap={4}>
        {/* Left Sidebar */}
        <StyledBox flex="1">
          <Sidebar />
        </StyledBox>

        {/* Main Content */}
        <StyledBox flex="3">
          <StyledPaper>
            <Header />
            <AboutMe />
            <Experience />
            <Skills />
            <Education />
          </StyledPaper>
        </StyledBox>
      </StyledBox>
    </StyledContainer>
  );
};

export default App;
