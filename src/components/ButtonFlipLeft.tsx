import styled from "styled-components";
import { keyframes } from "styled-components";

/***Styles****/

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

const ButtonFlip = styled.button`
  background-color: black;
  margin-bottom: 10px;
  color: white;
  &:hover {
    scale: calc(1.1);
  }
  &:active {
    animation-name: ${transition};
    animation-duration: 3s;
    background-color: lightgray;
    border: 1px solid black;
    color: black;
  }
`;

interface Props {
  text: string;
}

export default function ButtonFlipLeft({ text }: Props) {
  return <ButtonFlip>{text}</ButtonFlip>;
}
