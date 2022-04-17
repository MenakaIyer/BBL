import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";

const SingleDestination = ({ destinationArray }) => {
  const [destination, setDestination] = useState({});
  const id = useParams();
  console.log(id.id, "Idbb");
  useEffect(() => {
    fetch(`/BBL/${id.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "JSAon");
        setDestination(json.data);
        console.log(json.data, "SingID");
      });
  }, []);
  console.log(destination, "dessttii");
  return (
    <>
      <Wrapper>
        <>
          {destination.HelloNativeLanguages?.map((langi) => {
            console.log(langi, "MOTH");
            return <h1 key={langi}>{langi}</h1>;
          })}
        </>
        <Flag src={destination.FlagImg} alt="Flag" />
        <h1>{destination.Country}</h1>
        <h1> IATA Code: {destination.IATACode}</h1>

        <h2>Demonym: {destination.Demonym}</h2>
        <h2> Capital City🏛: {destination.CapitalCity} </h2>
        <Currency>
          {" "}
          <h3>Currency💰:</h3> <h3>{destination.Currency}</h3>{" "}
        </Currency>

        <h4> Driving Side 🚗 🛣: {destination.DrivingSide}</h4>
      </Wrapper>
    </>
  );
};

export default SingleDestination;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 25px;
  display: flex;
  gap: 15px;
  margin: auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: right;
`;

const Flag = styled.img`
  width: 15%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-self: center;
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
  justify-items: right;
  gap: 5px;
  padding: 15px;
`;
