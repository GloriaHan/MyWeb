import React from "react";
import { Root, Image } from "./Card.style";
import { DataProp } from "../Projects.d";

const Card = ({ image, description }: DataProp): JSX.Element => {
  return (
    <Root>
      <Image>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt="projectImage"
        />
      </Image>
      <p>{description}</p>
    </Root>
  );
};

export default Card;
