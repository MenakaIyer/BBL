import React, { useContext } from "react";
import {
  CurrentUserContext,
  CurrentUserProvider,
} from "../Context/CurrentUserContext";

const PassPortProfile = ({ currentUser }) => {
  const { currentUserV1 } = useContext(CurrentUserContext);

  return (
    <div>
      PassPortProfile
      {currentUserV1}
    </div>
  );
};

export default PassPortProfile;
