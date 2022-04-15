import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { DestinationContext } from "../Context/DestinationContext";





const BoredingPass = ({ destinationArray,
  status}) => {
// const {
//   destinationArray,
//   status,
// }= useContext(DestinationContext);
// const {
//   Country,
//   Demonym(s),
//   CapitalCity,
//   HelloNativeLanguages,
//   FlagImg,
//   Currency,
//   MainAirportName,
//   IATACode,
//   DrivingSide,
//   TimeZone,
// } = destination;


  return (
    <Header>
      <T>ANTi-BoredingPass</T>

    </Header>
  );
};

export default BoredingPass;

const Header = styled.header`
  background-color: #a7ba32;
  padding: 15px;
  display: flex;
  padding-bottom: 75px;
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
