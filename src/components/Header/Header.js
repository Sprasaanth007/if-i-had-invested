import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseSquare, AiOutlineTwitter } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [top, setTop] = useState("-120%");
  const [display, setDisplay] = useState("block");

  function show() {
    setDisplay("flex");
    setTop("0");
  }

  function close() {
    setTop("-120%");
  }

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" className="links">
          <h1>If I had Invested...</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <div className="individual_link hover-1">
          <Link to="/compound-interest-calculator" className="links">
            Compound Interest
          </Link>
        </div>
        <div className="button-30">
          <a
            href="https://twitter.com/iamprasaanths"
            target={"_blank"}
            className="links"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Follow me on <AiOutlineTwitter style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>
      <nav>
        <div className="openMenu" onClick={show}>
          <HiMenuAlt1 />
        </div>
        <ul className="mainMenu" style={{ display: display, top: top }}>
          <li className="menu-links">
            <Link
              to="/compound-interest-calculator"
              className="links"
              onClick={close}
            >
              Compound Interest
            </Link>
          </li>
          <li className="menu-button button-30">
            <a
              href="https://twitter.com/iamprasaanths"
              target={"_blank"}
              className="links"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Follow me on <AiOutlineTwitter style={{ marginLeft: "5px" }} />
            </a>
          </li>
          <div className="closeMenu" onClick={close}>
            <AiOutlineCloseSquare />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
