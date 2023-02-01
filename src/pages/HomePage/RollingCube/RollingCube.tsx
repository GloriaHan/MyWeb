import React from "react";
import {
  Cube,
  Front,
  Back,
  Right,
  Left,
  Top,
  Bottom,
} from "./RollingCube.style";

const RollingCube = (): JSX.Element => {
  return (
    <Cube>
      <Front>
        <img src={process.env.PUBLIC_URL + "/images/javascript.svg"} alt="JS" />
      </Front>
      <Back>Back</Back>
      <Right>Right</Right>
      <Left>Left</Left>
      <Top>Top</Top>
      <Bottom>Bottom</Bottom>
    </Cube>
  );
};

export default RollingCube;
