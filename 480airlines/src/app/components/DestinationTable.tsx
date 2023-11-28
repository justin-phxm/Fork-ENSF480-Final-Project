"use client";
import React, { useState, useContext, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { AppStateContext } from "./FlightContext";
export default function DestinationTable() {
  const flightProvider = useContext(AppStateContext);
  const { appState, setAppState } = flightProvider!;
  const flightArray = flightProvider?.appState.flights;

  useEffect(() => {
    fetch("/api/flight")
      .then((res) => res.json())
      .then((data) => {
        setAppState({ flights: data });
      });
  }, []);
  return (
    <ul data-aos={"fade-right"} className="grid grid-cols-3 gap-4">
      {flightArray?.map((flight, index) => (
        <DestinationCard flight={flight} key={index} />
      ))}
    </ul>
  );
}
