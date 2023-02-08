import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33.33%);
  grid-gap: 3rem;
  justify-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
`;

export const Title = styled.h2`
  color: ${palette.colour.GREY};
`;

export const Name = styled.h1`
  color: ${palette.colour.PRIMARY};
`;

export const Button = styled.h1`
  color: ${palette.colour.PRIMARY};
`;
