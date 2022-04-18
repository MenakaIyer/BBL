import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";

const SingleDestination = ({ destinationArray }) => {
  const [destination, setDestination] = useState({});
  const [loaded, setLoaded] = useState(false);
  const id = useParams();
  console.log(id.id, "Idbb");
  useEffect(() => {
    fetch(`/BBL/${id.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "JSAon");
        setDestination(json.data);
        setLoaded(true);
        console.log(json.data, "SingID");
      });
  }, [id]);
  console.log(destination, "dessttii");

  if (!loaded) {
    return <></>;
  } else {
    return (
      <>
        <Wrapper>
          <Div />
          <Wrap>
            <Div>
              <Flag src={destination?.FlagImg} alt="Flag" />
              <h1>{destination.Country}</h1>
              <h3> IATA Code: {destination.IATACode}</h3>
              <h3> {destination.MainAirportName}</h3>
              <h3>
                <i>Time zone:</i>
              </h3>
              {destination.TimeZone}
              <h3>Demonym:</h3>
              {destination.Demonym}
              <>
                {destination.HelloLang?.map((hello) => {
                  console.log(hello, "hello");
                  return (
                    <h4 key={hello}>
                      <i>How to say hello!</i> <br></br> {hello}
                    </h4>
                  );
                })}
              </>
              <h2> Capital City🏛: {destination.CapitalCity} </h2>
              <Currency>
                {" "}
                <h3>Currency💰:</h3> <h3>{destination.Currency}</h3>{" "}
              </Currency>

              <h4> Driving Side 🚗 🛣: {destination.DrivingSide}</h4>
            </Div>
          </Wrap>
        </Wrapper>
      </>
    );
  }
};

export default SingleDestination;

const Wrapper = styled.div`
  padding-top: 25px;
  display: flex;
  width: 90%;
  margin-top: 25px;
  margin: auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: space-between;
  padding-bottom: 155px;
`;

const Flag = styled.img`
  width: 65%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-self: center;
  margin-top: 15px;
`;

const Currency = styled.div`
  padding: 15px;
  gap: 15px;
  color: green;
  margin: auto;
  box-shadow: rgba(88, 235, 52, 0.35) 0px 5px 15px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  width: 30%;
  margin: auto;
  box-shadow: -4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2,
    -16px 16px #2196f3, -20px 20px #26c6da, -24px 24px #43a047,
    -28px 28px #eeff41, -32px 32px #f9a825, -36px 36px #ff5722;
  background-image: url("https://media2.giphy.com/media/VF59XWerSOv87ZZagn/200.gif");
  background-repeat: round space;
  padding-bottom: 55px;
`;

const Div = styled.div`
  background: white;
  opacity: 0.8;
  width: 60%;
  margin: auto;
`;
