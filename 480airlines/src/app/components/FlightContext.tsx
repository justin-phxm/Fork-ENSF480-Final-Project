import React, { createContext, useContext, useState } from "react";
import flightInterface from "../interfaces/flight";
import { ReactNode } from "react";
interface AppState {
  flight?: flightInterface;
}
interface Props {
  children: ReactNode;
}

const defaultAppState: AppState = { flight: undefined };
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
