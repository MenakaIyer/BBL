import React, { useContext } from "react";
import {
  CurrentUserContext,
  CurrentUserProvider,
} from "../Context/CurrentUserContext";

import styled from "styled-components";

const PassPortProfile = ({ currentUser }) => {
  const { currentUserV1 } = useContext(CurrentUserContext);

  return (
    <div>
     <h1>Welcome {currentUserV1}!!</h1> 
      <img src={"https://media4.giphy.com/media/3o6MbqHAeLcNONJCEg/200.gif"} />
    </div>
  );
};

const Image = styled.img`
  width: 100px;
`;

export default PassPortProfile;
