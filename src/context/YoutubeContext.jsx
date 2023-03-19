import { createContext, useContext, useState } from "react";

// context initialization
const YTContext = createContext();

// custom hook to access context
export const useYTContext = () => useContext(YTContext);

const YTProvider = ({ children }) => {
  // initializing states for context
  const [ytVideoId, setYtVideoId] = useState("");

  // setting context states as provider value
  const value = { ytVideoId, setYtVideoId };

  // returning provider wrapping around its child with values
  return <YTContext.Provider value={value}>{children}</YTContext.Provider>;
};

export default YTProvider;
