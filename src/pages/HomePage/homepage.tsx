import React from "react";
import { Root, Header } from "./HomePage.style";

const HomePage = (): JSX.Element => {
  return (
    <Root>
      <Header>
        <h5>Hey I'm</h5>
        <h1>Ning Han</h1>
        <h5 id="role">Front End Developer</h5>
        <button>Download Resume</button>
      </Header>
    </Root>
  );
};

export default HomePage;
