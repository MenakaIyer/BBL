import React from "react";
import styled from "styled-components";

import DestinationHeader from "./destinationGrid";
const BoredingPass = () => {
  return (
    <Header>
      <T>ANTi-BoredingPass</T>
      <DestinationHeader />
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
