import React from "react";
// import background from "../resources/images/background2.jpg";
import logo from "../resources/images/logo.png";

const Navbar = ({ title }) => {
  const divStyle = {
    margin: "0px",
    padding: "0px",
    width: "100%",
    //backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    height: "150px",
  };

  return (
    <nav className="navbar navbar-dark bg-dark " style={divStyle}>
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          <img src={logo} alt="logo" style={{ width: "350px" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
