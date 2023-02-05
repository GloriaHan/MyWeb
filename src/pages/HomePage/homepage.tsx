import React from "react";
import RollingCube from "./RollingCube/RollingCube";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import { Root, Header, Main, CubeContainer } from "./homepage.style";

const HomePage = (): JSX.Element => {
  return (
    <Root>
      <Header>
        <h5>Hey I'm</h5>
        <h1>Gloria Han</h1>
        <h5 id="role">Front End Developer</h5>
        <a href='https://file-store-gloria.s3.ap-southeast-2.amazonaws.com/resume-Ning+Han.pdf'>
        <button>Download Resume</button>
        </a>
      </Header>
      <Main>
        <CubeContainer>
          <RollingCube />
        </CubeContainer>

        <AboutMe />

        <Projects />
      </Main>
    </Root>
  );
};

export default HomePage;
