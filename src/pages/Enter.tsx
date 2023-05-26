import styled from "styled-components";
import EnterButton from "../components/ButtonFlipLeft";

/***Styles****/

const Header = styled.h1`
  color: black;
  text-align: left;
  margin-top: 10%;
  @media only screen and (min-width: 600px) {
    margin-top: 30%;
  }
`;

const TagLine = styled.h2`
  width: 100%;
`;

/*************************/

export default function Enter() {
  return (
    <>
      <Header>Hey! I'm Yael. </Header>
      <h3>[Pronounced Yuh-Ell]</h3>
      <TagLine>
        I specialize in digital marketing and front-end development.
      </TagLine>
    </>
  );
}
