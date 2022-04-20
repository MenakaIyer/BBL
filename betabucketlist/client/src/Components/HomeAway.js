import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";

const moment = require("moment");

const HomeAway = ({ flag, id }) => {
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { currentUserV1 } = useContext(CurrentUserContext);

  useEffect(() => {
    fetch(`/get-messages/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "messges");
        setMessages(json.data);
        setLoaded(true);
        console.log(json.data, "J.dmessages");
      });
  }, [flag]);

  console.log(messages, "Workingmessages");

  if (!loaded) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        {messages.map((msg) => {
          console.log(msg, "messssssagggemap");
          return (
            <Msg key={msg._id}>
              <p> {msg.newMessage} </p>
              <p>{moment(msg.timeStamp).format("MMMM Do YYYY, h:mma ")}</p>
              <p>{currentUserV1}</p>
              <Meowdia src={msg.image} />
            </Msg>
          );
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 25px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: space-between;
  gap: 15px;
`;

const Msg = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Meowdia = styled.img`
  position: relative;
  width: 60%;
`;

export default HomeAway;
