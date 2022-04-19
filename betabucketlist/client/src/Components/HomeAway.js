import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import styled from "styled-components";
//import current user



const HomeAway = ({ flag, id }) => {
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
          
{/* img av tag <p> msg.author </p> */}

        {messages.map((msg) => {
          console.log(msg, "messssssagggemap");
          return (
            <Msg key={msg._id}>
              <p>
                {msg.newMessage}
                {/* {msg.idauthor} */}
              </p>
              <Meowdia src={msg.image} />
            </Msg>
          );
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  padding-top: 25px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: space-between;
`;

const Msg = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: auto;
  width: fit-content;
`;

const Meowdia = styled.img`
  position: relative;
  width: 60%;
`;

export default HomeAway;
