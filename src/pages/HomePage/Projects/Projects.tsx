import React from "react";
import { Root, Container, Name, Title } from "./Projects.style";

const Projects = (): JSX.Element => {
  return (
    <Root>
      <div>
        <Title>My Recent Projects</Title>
        <Name>Portfolio</Name>
      </div>
      <Container>test</Container>
    </Root>
  );
};

export default Projects;
