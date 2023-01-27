import styled, { css } from "styled-components";
import { Props } from "./types";

export const Root = styled.div`
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
`;

export const Container = styled.div<Props>`
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-20deg);
    `};
`;

export const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  h1 {
    margin: 0;
  }

  small {
    color: #555;
    font-style: italic;
  }

  p {
    color: #333;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export const Circle = styled.div<Props>`
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-70deg);
    `};
`;

export const CircleButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;

  ${(props) =>
    props.id === "close" &&
    css`
      top: 60%;
      transform: rotate(90deg);
      transform-origin: top left;
    `};

  ${(props) =>
    props.id === "open" &&
    css`
      left: 60%;
    `};
`;

export const Nav = styled.nav<Props>`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;

  ul {
    list-style-type: none;
    padding-left: 30px;

    li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;

      span {
        font-size: 20px;
        margin-right: 10px;
      }

      &:nth-child(2) {
        margin-left: 15px;
        transform: translateX(-150%);
      }

      &:nth-child(3) {
        margin-left: 30px;
        transform: translateX(-200%);
      }
    }
  }

  ${(props) =>
    props.isOpen &&
    css`
      ul {
        li {
          transform: translateX(0) !important;
          transition-delay: 0.3s;
        }
      }
    `};
`;
