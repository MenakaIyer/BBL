import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import DestinationStation from "./Components/DestinationStation";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import SingleDestination from "./Components/SingleDestination";
import ImageUpload from "./Components/ImageUpload";
import PassPortProfile from "./Components/PassPortProfile";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [userFriends, setUserFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [linkDisabled, setLinkDisabled] = useState(false);

  useEffect(() => {
    fetch("/getUsers").then((response) =>
      response.json().then((json) => {
        setAllUsers(json.data);
        console.log(json.data, "USERSSSS");
      })
    );
  }, []);

  return (
    <Main>
      <GlobalStyle />
      <BoredingPass
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        allUsers={allUsers}
        userFriends={userFriends}
        setUserFriends={setUserFriends}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Wrapper>
        {/* <ImageUpload /> */}

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SignIn
                allUsers={allUsers}
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
                userFriends={userFriends}
                setUserFriends={setUserFriends}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                linkDisabled={linkDisabled}
                setLinkDisabled={setLinkDisabled}
              />
            </Route>
            <Route path="/BBL/:id">
              <SingleDestination
                allUsers={allUsers}
                userFriends={userFriends}
                setUserFriends={setUserFriends}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>
            <Route
              path="/BetaBL/:name"
              allUsers={allUsers}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              userFriends={userFriends}
              setUserFriends={setUserFriends}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            >
              <PassPortProfile />
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
