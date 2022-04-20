import { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const [currentUserV1, setCurrentUserV1] = useState("");
  return (
    <CurrentUserContext.Provider
      value={{
        currentUserV1,
        setCurrentUserV1,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
