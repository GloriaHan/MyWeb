import styled, { css } from "styled-components";
import * as palette from "variables.style";
import { StyledRoot } from "../AboutMe.d";

export const Root = styled.div<StyledRoot>`
  width: 8.125rem;
  background-color: ${palette.colour.BLACKBLUE};
  border-radius: 1rem;
  padding: 1.5rem;
  color: ${palette.colour.WHITE};
  border: solid 3px ${palette.colour.BLACKBLUE};

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border-color: ${palette.colour.PRIMARY};

  }

  ${(props) =>
    props.selected &&
    css`
      border-color: ${palette.colour.PRIMARY};
    `}

  @media (max-width: 480px) {
    width: 5.25rem;
    padding: 1.5rem 0.5rem;
  }
`;

export const Title = styled.h3`
  color: ${palette.colour.WHITE};

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.h5`
  color: ${palette.colour.GREY};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
