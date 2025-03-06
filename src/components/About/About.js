import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Daniyal Aziz</strong>, a Full-Stack .NET
              Developer with <strong>3+ years</strong> of experience building
              scalable web applications.
              <br />
              <br />
              My expertise includes .NET Core, React.js, Clean Architecture, and
              Repository Design Patterns. I specialize in: Developing secure,
              high-performance web applications, Building RESTful APIs and
              integrating third-party services, Database design & optimization,
              Cloud deployments on Azure, Agile methodologies
              <br />
              <br />
              Passionate about clean code and problem-solving, I have
              successfully developed and maintained complex applications while
              optimizing performance through efficient coding and database
              queries. I ensure maintainable and scalable solutions.
              <br />
              <br />I thrive in collaborative environments, continuously
              exploring new technologies to enhance software efficiency.
              <div className="tagline2">Technologies I work with:</div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
