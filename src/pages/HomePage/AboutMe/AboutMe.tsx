import React, { useState } from "react";
import Card from "./Card/Card";
import intro from "data.json";
import { DataProp } from "./AboutMe.d";
import {
  Root,
  Container,
  Title,
  Name,
  Image,
  IntroductionContainer,
  Skills,
  Details,
} from "./AboutMe.style";

const AboutMe = (): JSX.Element => {
  const [selectetedCard, setSelectetedCard] = useState(intro.aboutme[0]);
  return (
    <Root>
      <div>
        <Title>Get To Know</Title>
        <Name>About Me</Name>
      </div>
      <Container>
        <div>
          <Image
            src={
              "https://file-store-gloria.s3.ap-southeast-2.amazonaws.com/fishing.jpg"
            }
            alt="portfolio"
          />
        </div>
        <IntroductionContainer>
          <Skills>
            {intro.aboutme.map(
              (item: DataProp): JSX.Element => (
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  details={item.details}
                  selectetedCard={selectetedCard}
                  setSelectetedCard={setSelectetedCard}
                />
              )
            )}
          </Skills>
          <Details
            dangerouslySetInnerHTML={{ __html: selectetedCard.details }}
          />
        </IntroductionContainer>
      </Container>
    </Root>
  );
};

export default AboutMe;
