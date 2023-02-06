import styled, { css } from "styled-components";
import * as palette from "variables.style";

const handleTransform = (degree = 0, direction = "Y") => {
  return `transform: rotate${direction.toUpperCase()}(${degree}deg) translateZ(100px)`;
};

const Size = css`
  width: 12.5rem;
  height: 12.5rem;
`;

const Face = css`
  ${Size};

  position: absolute;
  border: 0.125rem solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1875rem;
  color: ${palette.colour.WHITE};
  user-select: none;
  background: ${palette.colour.CUBEGREY};
  box-shadow: 0 0 1.25rem 0 ${palette.colour.MILKWHITE};
  border: 1px solid ${palette.colour.BORDERGREY};

  img {
    width: 50%;
  }
`;

export const Cube = styled.div`
  ${Size};

  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-6.25rem);
  animation: rotate 10s linear infinite;

  @keyframes rotate {
    from {
      transform: translateZ(-6.25rem);
    }

    to {
      transform: translateZ(-6.25rem) rotateY(360deg) rotateX(360deg);
    }
  }
`;

export const Front = styled.div`
  ${Face};

  ${handleTransform(0, "Y")};
`;

export const Back = styled.div`
  ${Face};

  ${handleTransform(180, "Y")};
`;

export const Right = styled.div`
  ${Face};

  ${handleTransform(90, "Y")};
`;

export const Left = styled.div`
  ${Face};

  ${handleTransform(-90, "Y")};
`;

export const Top = styled.div`
  ${Face};

  ${handleTransform(90, "X")};
`;

export const Bottom = styled.div`
  ${Face};

  ${handleTransform(-90, "X")};
`;
