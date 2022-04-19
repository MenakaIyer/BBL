import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import styled from "styled-components";

const HomeAway = () => {
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/getmessages`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "messges");
        setMessages(json.data);
        setLoaded(true);
        console.log(json.data, "J.dmessages");
      });
  }, []);

  console.log(messages, "Workingmessages");

  if (!loaded) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        {messages.map((msg) => {
          console.log(msg, "messssssagggemap");
          return (
            <div key={msg._id}>
              <p>{msg.bucketmsg}</p>
            </div>
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

export default HomeAway;
