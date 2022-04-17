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
        <h1>{destination.Country}</h1>

        <h2> Capital City: {destination.CapitalCity} </h2>
        <Currency> $$$: {destination.Currency} </Currency>

        <Flag src={destination.FlagImg} alt="Flag" />
      </Wrapper>
    </>
  );
};

export default SingleDestination;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 75%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  gap: 45px;
  margin: auto;
  text-align: center;
`;

const Flag = styled.img`
  width: 45%;
`;

const Currency = styled.div`
  color: green;
  font-size: 45px;
`;
