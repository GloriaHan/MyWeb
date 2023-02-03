import React from "react";
import { Root, Title, Description } from "./Card.style";

const Card = ({
  icon,
  title,
  description,
}: {
  icon?: string;
  title?: string;
  description?: JSX.Element;
}): JSX.Element => {
  return (
    <Root>
      <span className="material-icons">{icon}</span>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Root>
  );
};

export default Card;
