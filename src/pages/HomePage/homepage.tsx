import React from "react";
import RollingCube from "./RollingCube/RollingCube";
import { Root, Header, Main } from "./Homepage.style";

const HomePage = (): JSX.Element => {
  return (
    <Root>
      <Header>
        <h5>Hey I'm</h5>
        <h1>Ning Han</h1>
        <h5 id="role">Front End Developer</h5>
        <button>Download Resume</button>
      </Header>
      <Main>
        <RollingCube />
      </Main>
    </Root>
  );
};

export default HomePage;
