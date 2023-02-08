import styled, { css } from "styled-components";
import { ButtonProp } from "../Projects.d";
import * as palette from "variables.style";

export const Root = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  max-width: 300px;
  height: 31.25rem;
  background-color: ${palette.colour.BLACKBLUE};
  border-radius: 16px;
  padding: 3rem;
  color: ${palette.colour.WHITE};

  p {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const Image = styled.div`
  border-radius: 8px;

  img {
    max-width: 50%;
    max-height: 50%;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const Button = styled.a<ButtonProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  height: 3.125rem;
  width: 6.25rem;
  background-color: transparent;
  border: solid 2px ${palette.colour.PRIMARY};
  color: ${palette.colour.PRIMARY};
  font-size: 1rem;
  font-weight: bold;
  text-decoration-line: none;

  &:hover {
    cursor: pointer;
    background-color: ${palette.colour.PRIMARY};
    color: ${palette.colour.BLACKBLUE};
  }

  ${(props) =>
    props.opposite &&
    css`
      background-color: ${palette.colour.PRIMARY};
      color: ${palette.colour.BLACKBLUE};

      &:hover {
        background-color: ${palette.colour.BLACKBLUE};
        color: ${palette.colour.PRIMARY};
      }
    `}
`;
