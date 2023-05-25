import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundGradientAnim from "./BackgroundGradientAnim";
const NavButton = styled.button`
  width: 40%;
  
  margin: 2%;
  border-radius: 5px;
  text-align:center;
  font-size:.9em;
  padding:10px;
  border:transparent;
  &:hover {
    box-shadow: 2px 2px 4px black;
  }
  &:active{
    box-shadow: inset 0 0 5px gray;
    scale: calc(0.98);

  }
  @media only screen and (min-width: 600px) {
    border-radius:100%;
    width: 80px;
    height: 80px;

    display:block;
    margin: 20px auto;
    font-size: .7em;
    

`;
export default function Nav() {
  return (
    <BackgroundGradientAnim>
      <Link to="">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="about">
        <NavButton>About</NavButton>
      </Link>
      <Link to="skills">
        <NavButton>Skills</NavButton>
      </Link>
      <Link to="resume">
        <NavButton>Resume</NavButton>
      </Link>
      <Link to="software_development">
        <NavButton id="SoftwareDevelopment">Software Development</NavButton>
      </Link>
      <Link to="digital_marketing">
        <NavButton id="DigitalMarketing">Digital Marketing</NavButton>
      </Link>
      <Link to="connect">
        <NavButton id="Connect">Connect</NavButton>
      </Link>
    </BackgroundGradientAnim>
  );
}
