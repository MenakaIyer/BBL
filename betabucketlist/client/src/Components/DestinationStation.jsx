import React, { useState, useEffect, useContext } from "react";
import { DestinationContextProvider } from "../Context/DestinationContext";
import styled from "styled-components";

const DestinationStation = () => {
  const [destinations, setDestinations] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/destinations")
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setDestinations(data);
        setLoaded(true);
      });
  }, []);

  const arrayDes = destinations?.destinationArray;

  return (
    <div>
      DestinationStation
      {loaded ? (
        arrayDes.map((key) => {
          return key.Country;
        })
      ) : (
        <Loading src="https://media4.giphy.com/media/AAO7CYEKrIGfGphpFO/200.gif" />
      )}
    </div>
  );
};

export default DestinationStation;

const Loading = styled.img`
  margin: auto;
  clip-path: circle(50% at 50% 50%);
  width: 675px;
  -webkit-animation: rotate-hor-center 0.5s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) 3ms both;
  animation: rotate-hor-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 3ms
    both;
  @-webkit-keyframes rotate-hor-center {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
      transform: rotateX(-360deg);
    }
  }
  @keyframes rotate-hor-center {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
      transform: rotateX(-360deg);
    }
  }
`;
