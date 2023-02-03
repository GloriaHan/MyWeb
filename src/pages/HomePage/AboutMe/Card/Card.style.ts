import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  width: 8.125rem;
  height: 100%;
  background-color: ${palette.colour.BLACKBLUE};
  border-radius: 1rem;
  padding: 1.5rem;
  color: ${palette.colour.WHITE};
  border: solid 3px ${palette.colour.BLACKBLUE};

  &:hover {
    cursor: pointer;
    background-color: transparent;
  }

  @media (max-width: 480px) {
    width: 6.25rem;
    padding: 1.5rem 0.5rem;
  }
`;

export const Title = styled.h3`
  color: ${palette.colour.WHITE};
`;

export const Description = styled.h5`
  color: ${palette.colour.GREY};
`;
