import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";






function App() {
  return (
    <Main>
      <BoredingPass />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/BBL" element={<SignIn />}></Route>
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
