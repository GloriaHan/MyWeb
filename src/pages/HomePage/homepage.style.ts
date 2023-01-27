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
  padding: 3.125rem;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-20deg);
    `};
`;

export const CircleContainer = styled.div`
  position: fixed;
  top: -6.25rem;
  left: -6.25rem;
`;

export const Content = styled.div`
  max-width: 62.5rem;
  margin: 3.125rem auto;

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

export const Circle = styled.button<Props>`
  cursor: pointer;
  border: none;
  background-color: #ff7979;
  height: 12.5rem;
  width: 12.5rem;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-70deg);
    `};
`;

export const CircleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 6.25rem;
  background: transparent;
  border: 0;
  font-size: 1.625rem;
  color: #fff;

  span {
    font-size: 2rem;
    font-weight: 900;
  }

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
  bottom: 2.5rem;
  left: 0;
  z-index: 100;

  ul {
    list-style-type: none;
    padding-left: 1.875rem;

    li {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: #fff;
      margin: 2.5rem 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;

      span {
        font-size: 1.5rem;
        margin-right: 0.625rem;
      }

      &:nth-child(2) {
        margin-left: 0.9375rem;
        transform: translateX(-150%);
      }

      &:nth-child(3) {
        margin-left: 1.875rem;
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
