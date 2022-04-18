import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import DestinationStation from "./Components/DestinationStation";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import SingleDestination from "./Components/SingleDestination";

function App() {
  return (
    <Main>
      {/* <GlobalStyle/> */}
      <BoredingPass />
      <BrowserRouter>
        <Switch>
          <Route path="/BBL/:id">
            <SingleDestination />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Switch>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/BBL"> <SignIn /></Route>
          <Route path="/BBL/:Aruba" element={<SingleDestination />}></Route>
          <Route path="/BBL/:id" element={<SingleDestination />}></Route>
        </Switch>
      </BrowserRouter> */}
    </Main>
  );
}

export default App;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
