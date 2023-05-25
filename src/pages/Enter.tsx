import styled from "styled-components";
import EnterButton from "../components/ButtonFlipLeft";
import BackgroundGradientAnim from "../components/BackgroundGradientAnim";
import VerticalNav from "../components/VerticalNav";
/***Styles****/

const Header = styled.h1`
  color: black;
  text-align: left;
  margin-top: 50%;
`;

const Main = styled.body`
  font-family: "Manrope", sans-serif;
  text-align: left;
  display: inline-block;
  width: 100%;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 40% 60%
    padding: 0px 10px;
  }
`;

const TagLine = styled.h2`
  width: 100%;
`;

const RightSide = styled.div`
  width: 100%;
  padding: 10px;
  @media only screen and (min-width: 600px) {
    padding: 0px;
    grid-column: 2 / span1;
    margin-left: 20px;
  }
`;

/*************************/

export default function EnterAnimation() {
  return (
    <Main>
      <BackgroundGradientAnim>
        <VerticalNav />
      </BackgroundGradientAnim>
      <RightSide>
        <Header>Hey! I'm Yael. </Header>
        <h3>[Pronounced Yuh-Ell]</h3>
        <TagLine>
          I specialize in digital marketing and front-end development.
        </TagLine>
        <EnterButton text="Enter" />
      </RightSide>
    </Main>
  );
}
