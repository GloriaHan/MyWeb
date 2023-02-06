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
  border: 0.375rem solid white;
  border-radius: 0.375rem;
  transform: rotate(-6deg);

  @media (max-width: 480px) {
    max-width: 14rem;
    max-height: 14rem;
    transform: rotate(0);
    border-radius: 50%;
  }
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

export const Details = styled.div`
  height: 20rem;
  font-size: 1.3rem;
  color: ${palette.colour.WHITE};
  margin-top: 50px;
  text-align: left;
  p {
    line-height: 1.5rem;
    margin: 0.8rem;
  }
`;
