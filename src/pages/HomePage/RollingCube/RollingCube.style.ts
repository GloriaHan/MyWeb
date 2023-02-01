import styled, { css } from "styled-components";
import * as palette from "variables.style";

const handleTransform = (degree = 0, direction = "Y") => {
  return `transform: rotate${direction.toUpperCase()}(${degree}deg) translateZ(100px)`;
};

const Face = css`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: ${palette.colour.WHITE};
  user-select: none;
  background: linear-gradient(#020024, #090979, #00d4ff);
`;

export const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  animation: rotate 10s linear infinite;

  @keyframes rotate {
    from {
      transform: translateZ(-100px);
    }

    to {
      transform: translateZ(-100px) rotateY(360deg) rotateX(360deg);
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
