import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <div style={appStyle}>
    <Header />
    <AboutMe />
    <Experience />
    <Footer />
  </div>
);

const appStyle = {
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
  color: "#333",
};

export default App;
