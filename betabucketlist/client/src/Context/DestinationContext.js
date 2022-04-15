import { createContext, useState, useEffect } from "react";

export const DestinationContext = createContext(null);
export const DestinationContextProvider = ({ children }) => {
  const [status, setStatus] = useState("loading");
  const [destinationArray, setDestinationArray] = useState([]);

  useEffect(() => {
    fetch("/destinations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setDestinationArray(data.data);
        setStatus("loaded");
      })
      .catch((error) => {
        console.log(error.message);
        setStatus("ERROR");
      });
  }, []);

  return (
    <DestinationContext.Provider
      value={{
        destinationArray,
        status,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};
