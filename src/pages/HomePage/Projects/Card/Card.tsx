import React from "react";
import { Root, Image, Buttons, Button } from "./Card.style";
import { DataProp } from "../Projects.d";

const Card = ({ image, description, github, link }: DataProp): JSX.Element => {
  return (
    <Root>
      <Image>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt="projectImage"
        />
      </Image>
      <p>{description}</p>
      <Buttons>
        <Button href={github} target = "_blank">Github</Button>
        <Button href={link} opposite target = "_blank">
          Demo
        </Button>
      </Buttons>
    </Root>
  );
};

export default Card;
