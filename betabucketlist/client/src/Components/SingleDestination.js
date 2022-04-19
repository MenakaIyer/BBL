import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";
import HomeAway from "./HomeAway";
import ImageUpload from "./ImageUpload";

const SingleDestination = ({ destinationArray }) => {
  const [destination, setDestination] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [flag, setFlag] = useState(false);
  const { id } = useParams();
  console.log(id, "Idbb");
  useEffect(() => {
    fetch(`/BBL/${id}`)
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
      <Wrapper>
        <Siv>
          <ImageUpload setFlag={setFlag} flag={flag} id={id} />
          <HomeAway flag={flag} id={id} />
        </Siv>
        <Wrap>
          <Div>
            <D>
              <Flag src={destination?.FlagImg} alt="Flag" />
            </D>
            <D>
              <h1>{destination.Country}</h1>
            </D>
            <D>
              <h3> IATA Code: {destination.IATACode}</h3>
            </D>
            <D>
              <h3> {destination.MainAirportName}</h3>
            </D>
            <D>
              {" "}
              <h3>
                <i>Time zone:</i>
              </h3>
              {destination.TimeZone}
            </D>
            <D>
              <h3>Demonym:</h3>
              {destination.Demonym}
            </D>
            <D>
              {destination.HelloLang?.map((hello) => {
                console.log(hello, "hello");
                return (
                  <h4 key={hello}>
                    <i>How to say hello!</i> <br></br> {hello}
                  </h4>
                );
              })}
            </D>
            <D>
              {" "}
              <h2> Capital City🏛: {destination.CapitalCity} </h2>
            </D>
            <Currency>
              {" "}
              <h3>Currency💰:</h3> <h3>{destination.Currency}</h3>{" "}
            </Currency>

            <D>
              <h4> Driving Side 🚗 🛣: {destination.DrivingSide}</h4>
            </D>
          </Div>
        </Wrap>
      </Wrapper>
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
  color: white;
  background-color: green;
  margin: auto;
  box-shadow: rgba(88, 235, 52, 0.35) 0px 5px 15px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 55px;
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
  opacity: 0.9;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const D = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 100;
  height: 10%;
  padding-bottom: 1.5%;
  padding-top: 0.5%;
`;

const Siv = styled.div`
  flex-direction: column;
  display: flex;
`;
