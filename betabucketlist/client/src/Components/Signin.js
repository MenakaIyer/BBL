import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../Context/CurrentUserContext";

function SignIn({
  allUsers,
  setLoggedInUser,
  setUserFriends,
  setCurrentUser,
  loggedInUser,
}) {
  const { currentUserV1, setCurrentUserV1 } = useContext(CurrentUserContext);
  const [inputValue, setInputValue] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const history = useHistory();
  console.log(allUsers, "Signingngngngng");

  const handleInput = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleButton = (ev) => {
    ev.preventDefault();
    console.log(inputValue, "inputvaluebatich");
    for (let i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].name.toLowerCase().includes(inputValue.toLowerCase()) &&
        inputValue
      ) {
        console.log(allUsers[i].name);
        setLoggedInUser(allUsers[i].name);
        setUserFriends(allUsers[i].friends);
        setCurrentUser(allUsers[i].name);
        setCurrentUserV1(allUsers[i].name);

        history.push(`/BetaBL/${allUsers[i].name}`);
      } else {
        setErrMessage(`${inputValue}! You don't have an account with us.`);
      }
    }
  };
  console.log(loggedInUser, "LOG");
  return (
    <Background>
      <Form onSubmit={handleButton}>
        <h2>Find your friend?</h2>
        <Input
          onChange={handleInput}
          type="text"
          placeholder="Your First Name"
        />
        <Button type="submit">Sign In</Button>
        {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
      </Form>
    </Background>
  );
}

const ErrMessage = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 18px;
  font-family: "Tahoma";
`;

const Input = styled.input`
  background-color: lightgreen;
  font-family: "Allerta Stencil", sans-serif;
  font-size: 20px;
  border: 3px solid transparent;
  &:focus {
    outline: none;
    border: 3px solid #292929;
    color: #292929;
  }
`;

const Button = styled.button`
  width: 304px;
  height: 40px;
  margin-top: 8px;
  font-family: "Tahoma";
  font-size: 20px;
  border: none;
  color: greenyellow;
  background-color: rebeccapurple;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #0096ff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 170px;
  background-color: white;
  border-radius: 3px;
  margin-top: -40px;
  padding: 15px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default SignIn;
