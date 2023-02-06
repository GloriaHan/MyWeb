import React from "react";
import RollingCube from "./RollingCube/RollingCube";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import { Root, Header, Main, CubeContainer, Skills, SkillsContainer } from "./homepage.style";

const HomePage = (): JSX.Element => {
  return (
    <Root>
      <Header>
        <h5>Hey I'm</h5>
        <h1>Gloria Han</h1>
        <h5 id="role">Front End Developer</h5>
        <a href='https://file-store-gloria.s3.ap-southeast-2.amazonaws.com/Front-end+Developer+resume-Ning+Han.pdf'>
        <button>Download Resume</button>
        </a>
      </Header>
      <Main>
        <CubeContainer>
          <RollingCube />
          <SkillsContainer>
          <Skills>
            <p>HTML5, CSS3, JavaScript, RESTful API,GraphQL</p>
            <p>ReactJS and Redux</p>
            <p>Front End libraries –Router, Axios, LESS/SASS, Bootstrap, lodash, immutable</p>
            <p>Front End test – Jest, Jasmine, Karma, etc.</p>
            <p>CSS-in-JS (styled-component) and CSS framework (Tailwind), etc.</p>
            <p>Agile Methodologies; Jira, scrum, Kanban</p>
            <p>AWS Cloud, CI/CD with GitHub pipeline, Webpack, NPM, and Yarn</p>
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
