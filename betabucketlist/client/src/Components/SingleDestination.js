import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../Context/DestinationContext";
const SingleDestination = ({ destinationArray }) => {
  const [destination, setDestination] = useState({});

  const { destinationIndex } = useContext(DestinationContext);

  useEffect(() => {
    fetch(`/BBL/Aruba`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDestination(json.data);
        console.log(json.data[0], "meew");
      });
  }, []);
  console.log(Object.values(destination));
  return <div>MEw</div>;
};

export default SingleDestination;
