import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  & > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 30rem) {
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

export const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  width: 100%;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 48px;
  min-height: 15rem;
  @media (max-width: 30rem) {
    column-gap: 8px;
    margin-top: 30px;
  }
`;

export const Details = styled.p`
  font-size: 32px;
  color: ${palette.colour.WHITE};
  margin-top: 1.875rem;
  text-align: left;
`;
