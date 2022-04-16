import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import DestinationStation from "./Components/DestinationStation";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
// import GlobalStyle from "./globalStyles";
import SingleDestination from "./Components/SingleDestination";

function App() {
  return (
    <Main>
      <BoredingPass />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/BBL" element={<DestinationStation />}></Route>
          <Route path="/BBL/Aruba" element={<SingleDestination />}></Route>
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
