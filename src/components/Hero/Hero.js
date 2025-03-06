import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Daniyal.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Full-Stack Developer.",
                    1000,
                    "A .NET Core & React.js Expert.",
                    1000,
                    "A Problem Solver.",
                    1000,
                    "A Cloud Enthusiast.",
                    1000,
                    "An API Developer.",
                    1000,
                    "A Database Architect.",
                    1000,
                    "A Code Optimizer.",
                    1000,
                    "A Tech Explorer.",
                    1000,
                    "A Software Engineer.",
                    1000,
                    "A System Designer.",
                    1000,
                    "An Agile Developer.",
                    1000,
                    "A Passionate Coder.",
                    1000,
                    "An AI & Cloud Learner.",
                    1000,
                    "A Web App Builder.",
                    1000,
                    "A Performance Tuner.",
                    1000,
                    "A .NET API Architect.",
                    1000,
                    "A React Component Master.",
                    1000,
                    "An Azure Explorer.",
                    1000,
                    "Oh, you're still here? 😀",
                    1000,
                    "Okay... Let's check out my projects now!",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are cool! Go see them.",
                    1000,
                    "Alright... restarting the loop now!",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              {/* <Image src="/man-svgrepo-com.svg" alt="Daniyal Khan" /> */}
              <Image src="/Daniyal.png" alt="Daniyal Khan" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="about" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
