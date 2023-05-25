import styled from "styled-components";
import { keyframes } from "styled-components";

/* ----------------------------------------------
 * Generated by Animista on 2023-5-25 8:8:53
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation color-change-5x
 * ----------------------------------------
 */
const anim = keyframes`
    0% {
      background-color: #000000;
    }
    12% {
      background-color: #232650;
    }
    24% {
      background-color: #2D35A0;
    }
    36% {
      background-color: #4601A9;
    }
    48% {
      background-color: #3A2357;
    }
    60% {
        background-color: #4601A9;
      }
    72% {
        background-color: #2D35A0;
      }
    84% {
        background-color: #232650;
      }
    100% {
        background-color: #000000;
      }
  }
 
  `;

const Background = styled.div`
  animation-name: ${anim};
  animation-duration: 20s;
  background-color: #19dcea;
  animation-iteration-count: infinite;
  width: 100%;
  height: 20vh;
  opacity: 0.8;
  @media only screen and (min-width: 600px) {
    height: 100vh;
    width: 100%;
    margin-right: 20px;
    grid-template-columns: 1 / span1;
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function BackgroundGradientAnim({ children }: Props) {
  return <Background>{children}</Background>;
}
