import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import DestinationStation from "./Components/DestinationStation";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import SingleDestination from "./Components/SingleDestination";
import ImageUpload from "./Components/ImageUpload";
function App() {
  return (
    <Main>
      <GlobalStyle />
      <BoredingPass />
      <Wrapper>
        <ImageUpload />

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
      </Wrapper>
    </Main>
  );
}

export default App;

const Main = styled.div`
  margin-top: 125px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Wrapper = styled.div`
  padding-top: 25px;
  flex-direction: column;
  display: flex;
  width: 90%;
  margin-top: 25px;
  margin: auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: space-between;
  padding-bottom: 155px;
`;
