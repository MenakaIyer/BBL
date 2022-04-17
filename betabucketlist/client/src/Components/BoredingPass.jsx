import React, { useContext } from "react";
import styled from "styled-components";
import { DestinationContext } from "../Context/DestinationContext";
import { NavLink } from "react-router-dom";
import SingleDestination from "./SingleDestination";

const BoredingPass = () => {
  const { destinationArray } = useContext(DestinationContext);
  return (
    <Header>
      <T>ANTi-BoredingPass</T>
      <Holder>
        {destinationArray.map((destination) => {
          return (
            <Leggo key={destination._id}>
              <Button onclick
                path
                to={`/BBL/${destination._id}`}
                element={<SingleDestination />}
              >
                <p> {destination.Country}</p>
              </Button>
            </Leggo>
          );
        })}
      </Holder>
    </Header>
  );
};

export default BoredingPass;

const Header = styled.header`
  background-color: #a7ba32;
  padding: 15px;
  display: flex;
  flex-direction: column;
  mix-blend-mode: color-burn;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const T = styled.h1`
  margin: auto;
  text-align: right;
  font-weight: 400;
  font-size: 62px;
  line-height: 35px;
  letter-spacing: -0.035em;
  color: orange;
  text-shadow: -1px -1px 0 #fffaab, 1px -1px 0 #fffaab, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Holder = styled.div`
  display: flex;
  gap: 65px;
  margin: auto;
  padding: 35px;
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

const NLink = styled.div`
  margin: auto;
`;
