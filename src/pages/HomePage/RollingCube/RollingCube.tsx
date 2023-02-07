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
      <Back>
        <img src={process.env.PUBLIC_URL + "/images/react.svg"} alt="REACT" />
      </Back>
      <Right> 
        <img src={process.env.PUBLIC_URL + "/images/redux.svg"} alt="REDUX" />
      </Right>
      <Left>
      <img src={process.env.PUBLIC_URL + "/images/aws.svg"} alt="AWS" />
        </Left>
      <Top>
      <img src={process.env.PUBLIC_URL + "/images/github.svg"} alt="GITHUB" />
        </Top>
      <Bottom>      
        <img src={process.env.PUBLIC_URL + "/images/html5.svg"} alt="HTML5" />
      </Bottom>
    </Cube>
  );
};

export default RollingCube;
