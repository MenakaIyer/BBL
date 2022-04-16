import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleDestination = () => {
  const { country } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    fetch(`/BBL/${country}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDestination(json.Country);
        console.log(destination, "meew");
      });
  });
  return <div>{destination.Country}</div>;
};

export default SingleDestination;
