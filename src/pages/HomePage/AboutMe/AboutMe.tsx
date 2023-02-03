import React, { useState } from "react";
import Card from "./Card/Card";
import intro from "./data.json";
import { DataProp } from "./AboutMe.d";
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
  const [selectetedCard, setSelectetedCard] = useState(intro[0]);
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
            {intro.map(
              (item: DataProp): JSX.Element => (
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  selectetedCard={selectetedCard}
                  setSelectetedCard={setSelectetedCard}
                />
              )
            )}
          </Skills>
        </IntroductionContainer>
      </Container>
    </Root>
  );
};

export default AboutMe;
