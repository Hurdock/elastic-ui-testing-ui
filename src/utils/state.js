import React, { useState, createContext, useContext, useEffect } from 'react';

const Context = createContext();

export default (props) => {
  const [account, setAccount] = useState(null);
  const [configuration, setConfiguration] = useState(null);
  // const [lightsOff, setLights] = useState(localStorage.dark_mode ? (localStorage.dark_mode === "true" ? true : false) : false);

  return (<Context.Provider value={{ 
    account,
    setAccount,
    configuration,
    setConfiguration,
    // lightsOff,
    // setLights
   }}>{props.children}</Context.Provider>)
}

export const AppState = () => useContext(Context);