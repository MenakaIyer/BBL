import React, { useContext } from "react";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DestinationGrid = () => {
  const { destinationArray } = useContext(DestinationContext);

  return (
    <div>
      {destinationArray.map((destination) => {
        return <Lenko key={destination._id}> {destination.Country}</Lenko>;
      })}
    </div>
  );
};

const Lenko = styled.div`
  width: 100px;
`;

export default DestinationGrid;
