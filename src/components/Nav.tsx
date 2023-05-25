import styled from "styled-components";

const NavButton = styled.button`
  width: 40%;
  margin: 5%;
  border-radius: 5px;
  text-align:center;
  font-size:.9em;
  @media only screen and (min-width: 600px) {
    border-radius:100%;
    width: 90px ;
    height: 90px;
    display:block;
    margin: 20px auto;
    font-size: .7em;

`;
export default function VerticalNav() {
  return (
    <>
      <a href="#about">
        <NavButton>About</NavButton>
      </a>
      <NavButton id="Skills">Skills</NavButton>
      <NavButton id="Resume">Resume</NavButton>
      <NavButton id="SoftwareDevelopment">Software Development</NavButton>
      <NavButton id="DigitalMarketing">Digital Marketing</NavButton>
      <NavButton id="Connect">Connect</NavButton>
    </>
  );
}
