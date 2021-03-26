
import React from "react";
import { render } from "react-dom";

const footerStyle = {
  backgroundColor: "#3f51b5",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "50px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

render(
    <div>
      hi
      <Footer>
        <span>Developed By Ozurumba Obinna</span>
      </Footer>
    </div>,
    document.getElementById("root")
  );
  

export default Footer;

// const Footer = (
    
// )