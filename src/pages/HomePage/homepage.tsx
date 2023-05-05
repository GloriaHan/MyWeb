import React from "react";
import RollingCube from "./RollingCube/RollingCube";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import {
  Root,
  Header,
  Main,
  CubeContainer,
  Skills,
  SkillsContainer,
  Contact,
  Social
} from "./homepage.style";

const HomePage = (): JSX.Element => {
  return (
    <Root>
      <Header>
        <h5>Hey I'm</h5>
        <h1>Gloria Han</h1>
        <h5 id="role">Front End Developer</h5>
        <Contact>
        <a href="https://file-store-gloria.s3.ap-southeast-2.amazonaws.com/Front-end+Developer+resume-Ning+Han.pdf" target = "_blank">
          <button>Download Resume</button>
        </a>
        <Social>
          <a href='https://www.linkedin.com/in/gloria-han-b6698b127/' target='_blank'>
            <img src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt='linkedin'></img>
          </a>
          <a href='https://www.seek.com.au/profile/gloria-han-jwz3bN22oU' target='_blank'>
            <img src={process.env.PUBLIC_URL + "/images/seek.png"} alt='seek'></img>
          </a>
          <a href='https://github.com/GloriaHan' target='_blank'>
            <img src={process.env.PUBLIC_URL + "/images/github.png"} alt='github'></img>

          </a>
        </Social>
        </Contact>
       
      </Header>
      <Main>
        <CubeContainer>
          <RollingCube />
          <SkillsContainer>
            <Skills>
              <li>HTML5, CSS3, JavaScript, RESTful API,GraphQL</li>
              <li>ReactJS and Redux</li>
              <li>
                Front End libraries &#x2D;Router, Axios, LESS/SASS, Bootstrap,
                lodash, immutable
              </li>
              <li>Front End test &#x2D; Jest, Jasmine, Karma, etc.</li>
              <li>
                CSS-in-JS (styled-component) and CSS framework (Tailwind), etc.
              </li>
              <li>
                Agile Methodologies; AWS Cloud, CI/CD with GitHub pipeline
              </li>
              <li>Jira, scrum, Kanban,Webpack, NPM, and Yarn</li>
              <li>Web Accessibility, WCAG Compliance</li>
            </Skills>
          </SkillsContainer>
        </CubeContainer>

        <AboutMe />

        <Projects />
      </Main>
    </Root>
  );
};

export default HomePage;
