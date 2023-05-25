import styled from "styled-components";
import { keyframes } from "styled-components";
import Blob from "../assets/buttonblob.png";

/***Styles****/

const Header = styled.h1`
  color: black;
  text-align: right;
  margin-top: 50%;
`;

const Main = styled.body`
  font-family: "Manrope", sans-serif;
  display: inline-block;
  padding-left: 10px;
  text-align: right;
`;

const TagLine = styled.h2`
  width: 50vw;
`;

const transition = keyframes`
    0% {
      -webkit-transform: translateX(0) rotate(0deg);
              transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px) rotate(-540deg);
              transform: translateX(-1000px) rotate(-540deg);
      opacity: 0;
    }
  }
  `;

const Enter = styled.button`
  background-color: black;
  color: white;
  &:hover {
    scale: calc(1.1);
  }
  &:active {
    animation-name: ${transition};
    animation-duration: 5s;
    background-color: lightgray;
  }
`;

/*************************/

export default function EnterAnimation() {
  return (
    <Main>
      <Header>Hey! I'm Yael </Header>
      <h3>[Pronounced Yuh-Ell]</h3>
      <TagLine>
        I specialize in digital marketing and front-end software development
      </TagLine>
      <Enter>Enter</Enter>
    </Main>
  );
}
