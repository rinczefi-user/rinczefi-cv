import React from "react";

const Footer: React.FC = () => (
  <footer style={footerStyle}>
    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
  </footer>
);

const footerStyle = {
  textAlign: "center" as const,
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  marginTop: "2rem",
};

export default Footer;
