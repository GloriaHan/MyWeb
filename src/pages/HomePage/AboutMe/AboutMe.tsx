import React from "react";
import Card from "./Card/Card";
import {
  Root,
  Container,
  Title,
  Name,
  Image,
  IntroductionContainer,
  Skills,
} from "./AboutMe.style";

const AboutMe = (): JSX.Element => {
  return (
    <Root>
      <div>
        <Title>Get To Know</Title>
        <Name>About Me</Name>
      </div>
      <Container>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/images/javascript.svg"}
            alt="portfolio"
          />
        </div>
        <IntroductionContainer>
          <Skills>
            <Card
              icon="workspace_premium"
              title="Experience"
              description={<p>testst</p>}
            />
            <Card icon="person" title="Hobby" description={<p>testst</p>} />
            <Card icon="star" title="experience" description={<p>testst</p>} />
          </Skills>
        </IntroductionContainer>
      </Container>
    </Root>
  );
};

export default AboutMe;
