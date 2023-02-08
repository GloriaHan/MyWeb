import React from "react";
import intro from "data.json";
import Card from "./Card/Card";
import { Root, Container, Name, Title } from "./Projects.style";

const Projects = (): JSX.Element => {
  return (
    <Root>
      <div>
        <Title>My Recent Projects</Title>
        <Name>Portfolio</Name>
      </div>
      <Container>
        {intro.products.map((item) => (
          <Card
            image={item.image}
            description={item.description}
            github={item.github}
            link={item.link}
          />
        ))}
      </Container>
    </Root>
  );
};

export default Projects;
