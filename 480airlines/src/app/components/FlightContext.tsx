"use client";
import React, { createContext, useContext, useState } from "react";
import flight2Interface from "../interfaces/flight2";
import { ReactNode } from "react";
import { fakeFlight } from "../fakeData/flight2";
interface AppState {
  flight?: flight2Interface;
}
interface Props {
  children: ReactNode;
}

const defaultAppState: AppState = { flight: fakeFlight };
const AppStateContext = createContext<
  | {
      appState: AppState;
      setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    }
  | undefined
>(undefined);
const FlightContextProvider = (props: Props) => {
  const [appState, setAppState] = useState(defaultAppState);
  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
export default FlightContextProvider;
