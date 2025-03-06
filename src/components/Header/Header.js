import React, { useEffect, useState } from "react";
import { Bars } from "./HeaderElements";
import { Row } from "react-bootstrap";
import "./Header.css";

const Header = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container-fluid ${scrolled ? "nav-scrolled" : ""}`}
      style={{
        position: "fixed",
        width: "100%",
      }}
    >
      <Row>
        <div className="nav">
          <div className="nav-items d-flex">
            <a
              className={`menu-item ${scrolled ? "menu-item-color" : ""} `}
              href="#"
            >
              Home
            </a>
            <a
              className={`menu-item ${scrolled ? "menu-item-color" : ""} `}
              href="#about"
            >
              About
            </a>
            <a
              className={`menu-item ${scrolled ? "menu-item-color" : ""} `}
              href="#projects"
            >
              Projects
            </a>
            <a
              className={`menu-item ${scrolled ? "menu-item-color" : ""} `}
              href="#contact"
            >
              Contact
            </a>
            <a
              className={`menu-item ${scrolled ? "menu-item-color" : ""} `}
              href="https://drive.google.com/file/d/1NJZim0i5atR1YCox_PTcYJzxpeJpC7B_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="Download"
            >
              Resume
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Header;
