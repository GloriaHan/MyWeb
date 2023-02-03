import styled from "styled-components";
import * as palette from "variables.style";

export const Root = styled.div`
  text-align: center;
  background-color: ${palette.colour.BG_COLOR};
  padding: 4rem;

  @media (max-width: 480px) {
    padding: 1rem;
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

export const CubeContainer = styled.main`
  padding: 8rem;
`;
