import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleDestination = () => {
  const { Country } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    fetch(`/BBL/${Country}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDestination(json.Country);
        console.log(destination);
      });
  });
  return <div>SingleDestination</div>;
};

export default SingleDestination;
