import React from "react";

const Header: React.FC = () => (
  <header style={headerStyle}>
    <h1>Your Name</h1>
    <h2>Front-End Developer</h2>
    <p>Email: yourname@example.com | LinkedIn: /yourprofile</p>
  </header>
);

const headerStyle = {
  textAlign: "center" as const,
  padding: "1rem",
  backgroundColor: "#f5f5f5",
};

export default Header;
