import React, { useContext } from "react";
import { DestinationContext } from "../Context/DestinationContext";
import styled from "styled-components";
import { Routes, Link, NavLink, Route } from "react-router-dom";

const DestinationHeader = () => {
  const { destinationArray } = useContext(DestinationContext);

  return (
    <Holder>
      {destinationArray.map((destination) => {
        return (
          <Leggo key={destination._id}>
            <Routes>
              <>
                <NLink to={`/BBL/${destination._id}`}>
                  <Button>
                    <p> {destination.Country}</p>
                  </Button>
                </NLink>
              </>
            </Routes>
          </Leggo>
        );
      })}
    </Holder>
  );
};

const Holder = styled.div`
  display: flex;
  gap: 10%;
  margin: auto;
  padding: 15%;
`;
const Button = styled.button`
  text-align: center;
  box-shadow: -4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2,
    -16px 16px #2196f3, -20px 20px #26c6da, -24px 24px #43a047,
    -28px 28px #eeff41, -32px 32px #f9a825, -36px 36px #ff5722;
  cursor: pointer;
  font-size: 45px;
`;

const Leggo = styled.div`
  display: flex;
`;

const NLink = styled(NavLink)`
  margin: auto;
`;
export default DestinationHeader;
