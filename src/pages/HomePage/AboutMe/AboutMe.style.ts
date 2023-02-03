import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: ${palette.colour.GREY};
`;
