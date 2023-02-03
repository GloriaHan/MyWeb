import React from "react";
import { Root, Title, Description } from "./Card.style";
import { CardProp } from "../AboutMe.d";

const Card = ({
  icon,
  title,
  description,
  selectetedCard,
  setSelectetedCard,
}: CardProp): JSX.Element => {
  const handleClick = () => {
    setSelectetedCard({
      title: title,
      icon: icon,
      description: description,
    });
  };

  return (
    <Root
      onClick={handleClick}
      selected={selectetedCard.title === title && selectetedCard.icon === icon}
    >
      <span className="material-icons">{icon}</span>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Root>
  );
};

export default Card;
