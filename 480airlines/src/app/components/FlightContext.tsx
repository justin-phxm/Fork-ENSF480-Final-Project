"use client";
import React, { createContext, useContext, useState } from "react";
import flight2Interface from "../interfaces/flight2";
import { ReactNode } from "react";
import { fakeFlight, fakeFlight2 } from "../fakeData/flight2";
interface AppState {
  flights?: flight2Interface[];
}
interface ChosenFlight {
  flight?: flight2Interface;
}
interface Props {
  children: ReactNode;
}

const defaultAppState: AppState = { flights: [] };
const defaultChosenFlight: ChosenFlight = { flight: undefined };

export const AppStateContext = createContext<
  | {
      appState: AppState;
      setAppState: React.Dispatch<React.SetStateAction<AppState>>;
      chosenFlight: ChosenFlight;
      setChosenFlight: React.Dispatch<React.SetStateAction<ChosenFlight>>;
    }
  | undefined
>(undefined);
const FlightContextProvider = (props: Props) => {
  const [appState, setAppState] = useState(defaultAppState);
  const [chosenFlight, setChosenFlight] = useState(defaultChosenFlight);
  return (
    <AppStateContext.Provider
      value={{ appState, setAppState, chosenFlight, setChosenFlight }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};
export default FlightContextProvider;
