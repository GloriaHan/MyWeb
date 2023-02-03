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

export const Image = styled.img`
  max-width: 18.75rem;
  max-height: 18.75rem;
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
  column-gap: 3rem;
  min-height: 240px;
  @media (max-width: 480px) {
    column-gap: 0.5rem;
    margin-top: 1.875rem;
  }
`;

export const Details = styled.p`
  font-size: 2rem;
  color: ${palette.colour.WHITE};
  margin-top: 30px;
  text-align: left;
  min-height: 18.75rem;
`;
