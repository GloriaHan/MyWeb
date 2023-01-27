import React, { useState } from "react";
import ContentDetails from "./ContentDetails/ContentDetails";
import {
  Root,
  Container,
  CircleContainer,
  Content,
  Circle,
  CircleButton,
  Nav,
} from "./HomePage.style";

const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Root>
      <Container isOpen={isOpen}>
        <CircleContainer>
          <Circle isOpen={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
            <CircleButton id="close">
              <span className="material-icons">close</span>
            </CircleButton>
            <CircleButton id="open">
              <span className="material-icons">menu</span>
            </CircleButton>
          </Circle>
        </CircleContainer>
        <Content>
          <ContentDetails />
        </Content>
      </Container>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <span className="material-icons">home</span>
            Home
          </li>
          <li>
            <span className="material-icons">person</span>
            About
          </li>
          <li>
            <span className="material-icons">mail</span>
            Contact
          </li>
        </ul>
      </Nav>
    </Root>
  );
};

export default HomePage;
