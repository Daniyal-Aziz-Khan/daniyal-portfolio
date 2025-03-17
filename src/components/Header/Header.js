import React, { useEffect, useState } from "react";
import { Bars } from "./HeaderElements";
import { Button, Row } from "react-bootstrap";
import "./Header.css";
import { useThemeContext } from "../ThemeSetting/ThemeSettings";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();

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
              href="https://drive.google.com/file/d/1flS-y9QsYIwmdXtvHqIlHsEa9TXHDrFK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="Download"
            >
              Resume
            </a>
            <a className={`menu-item ${scrolled ? "menu-item-color" : ""} `}>
              {/* Theme Toggle Button */}
              <span onClick={toggleTheme} style={{ marginTop: "3px" }}>
                {darkMode ? <FaMoon /> : <FaSun />}
              </span>
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Header;
