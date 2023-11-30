"use client";
import React, { useContext, useEffect } from "react";
import Searchbar from "@/app/components/Searchbar";
import FlightTable from "./FlightTable";
import flight2Interface from "@/app/interfaces/flight2";
// import { fakeFlight, fakeFlight2 } from "@/app/fakeData/flight2";
import { AppStateContext } from "@/app/components/FlightContext";
export default function FlightSelectionControl() {
  const flightProvider = useContext(AppStateContext);
  const { appState, setAppState, chosenFlight, setChosenFlight } =
    flightProvider!;
  const [flights, setFlights] = React.useState(
    flightProvider?.appState.flights
  );
  useEffect(() => {
    if (appState?.flights?.length === 0) {
      fetch("/api/flight")
        .then((res) => res.json())
        .then((data) => {
          setAppState({ flights: data });
        });
    }
  }, []);
  useEffect(() => {
    setFlights(appState.flights);
  }, [appState]);

  return (
    <div className="bg-white border-t p-4">
      <div className="mx-auto max-w-4xl bg-slate-100 rounded p-4 gap-4">
        <Searchbar />
        <div className="py-2">
          {/* <h2 className=" italic font-semibold py-2">Choose a flight</h2> */}
          <FlightTable flights={flights} />
        </div>
      </div>
    </div>
  );
}
