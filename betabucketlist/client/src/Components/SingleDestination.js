import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../Context/DestinationContext";

const SingleDestination = ({ destinationArray }) => {
  const [destination, setDestination] = useState({});
  const id = useParams();
  console.log(id.id, "Idbb");
  useEffect(() => {
    fetch(`/BBL/${id.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json,"JSAon");
        setDestination(json.data);
        console.log(json.data, "SingID");
      });
  }, []);
  console.log(destination,"dessttii");
  return <div>MEw</div>;
};

export default SingleDestination;
