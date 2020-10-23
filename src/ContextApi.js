import React, { createContext, useState } from "react";

export const taskContext = createContext();

export const ContextApi = ({ children }) => {
  const [about, setAbout] = useState(false);
  const [bat, setBat] = useState(false);
  
  return (
    <taskContext.Provider
      value={{
        about,
        setAbout,
        bat,
        setBat,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
