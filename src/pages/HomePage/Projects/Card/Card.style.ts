import styled, { css } from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  width: 8.125rem;
  background-color: ${palette.colour.BLACKBLUE};
  border-radius: 1rem;
  padding: 1.5rem;
  color: ${palette.colour.WHITE};

  p {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
  }

  @media (max-width: 480px) {
    width: 5.25rem;
    padding: 1.5rem 0.5rem;
  }
`;

export const Image = styled.div`
  height: 50%;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
