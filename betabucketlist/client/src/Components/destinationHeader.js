import React, { useContext } from "react";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DestinationHeader = () => {
  const { destinationArray } = useContext(DestinationContext);

  return (
    <Holder>
      {destinationArray.map((destination) => {
        return <Lenko key={destination._id}> {destination.Country}</Lenko>;
      })}
    </Holder>
  );
};

const Holder = styled.div`
  display: flex;
  gap: 65px;
  margin: auto;
  padding: 15px;
`;
const Lenko = styled.h4`
  text-align: center;
`;

export default DestinationHeader;
