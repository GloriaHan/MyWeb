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
        <button>Download Resume</button>
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
