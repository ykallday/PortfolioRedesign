import PageOrg from "./pages/PageOrg";
import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";

const Main = styled.body`
  font-family: "Manrope", sans-serif;
  text-align: left;
  display: inline-block;
  width: 100%;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 30% 70%;
    // padding: 0px 0px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
  @media only screen and (min-width: 600px) {
    padding: 0px;
    grid-column: 2 / span1;
    margin-left: 20px;
    text-align: left;
  }
`;

function App() {
  return (
    <>
      <Main>
        <Nav />
        <RightSide>
          <PageOrg />
        </RightSide>
      </Main>
    </>
  );
}

export default App;
