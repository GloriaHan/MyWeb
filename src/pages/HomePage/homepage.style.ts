import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  text-align: center;
  background-color: ${palette.colour.BG_COLOR};
  padding: 8rem;

  @media (max-width: 480px) {
    padding: 1rem 0;
    width: 100vw;
  }
`;

export const Header = styled.header`
  color: ${palette.colour.WHITE};

  h5 {
    font-size: 1.3rem;

    &#role {
      color: ${palette.colour.GREY};
    }
  }

  h1 {
    font-size: 2.5rem;
  }

  button {
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${palette.colour.PRIMARY};
    background-color: transparent;
    border: solid 0.125rem ${palette.colour.PRIMARY};
    border-radius: 0.5rem;
    padding: 1rem;

    &:hover {
      color: ${palette.colour.DARKBLUE};
      border-color: ${palette.colour.DARKBLUE};
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contact = styled.div`
display: grid;
grid-template-columns: 30% 70%;
width: 100%;
padding:0;
align-items: center;
button{
  margin: 0.5rem 1rem; 
}
@media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height:100%
  }
`


export const CubeContainer = styled.div`
  padding: 8rem;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 8rem 0;
  }
`;

export const SkillsContainer = styled.div`
  font-size: 1.4rem;
  color: ${palette.colour.WHITE};
  padding-left: 15rem;
  @media (max-width: 480px) {
    margin-top: 5rem;
    padding-left: 0;
  }
`;

export const Skills = styled.ul`
  font-size: 1.4rem;

  color: ${palette.colour.WHITE};

  li {
    line-height: 1.5rem;
    text-align: left;
    padding: 0.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: left;
  }
`;
