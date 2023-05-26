import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundGradientAnim from "./BackgroundGradientAnim";
const NavButton = styled.button`
  margin: 2%;
  border-radius: 5px;
  text-align:center;
  font-size:.9em;
  border:transparent;
  padding:10px;
  width: 40%;
  &:hover {
    box-shadow: 2px 2px 4px black;
    border: 1px solid black;
    // font-weight:600;
    font-style:italic;
  }
  &:active{
    box-shadow: inset 0 0 5px gray;
    scale: calc(0.98);

  }
  @media only screen and (min-width: 600px) {
    border-radius:100%;
    width: 90px;
    height: 90px;
    display:block;
    margin: 13px auto;
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
        <NavButton>Software Development</NavButton>
      </Link>
      <Link to="digital_marketing">
        <NavButton>Digital Marketing</NavButton>
      </Link>
      <Link to="connect">
        <NavButton id="Connect">Connect</NavButton>
      </Link>
    </BackgroundGradientAnim>
  );
}
