import React from "react";
import { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const stateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(stateContext);
