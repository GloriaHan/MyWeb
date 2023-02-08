import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  & > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  color: ${palette.colour.GREY};
`;

export const Name = styled.h1`
  color: ${palette.colour.PRIMARY};
`;
