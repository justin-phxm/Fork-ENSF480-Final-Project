"use client";
import React, { useState, useContext } from "react";
import DestinationCard from "./DestinationCard";
import { AppStateContext } from "./FlightContext";
export default function DestinationTable() {
  const flightProvider = useContext(AppStateContext);
  const flightArray = flightProvider?.appState.flights;
  return (
    <ul className="grid grid-cols-3 gap-4">
      {flightArray?.map((flight, index) => (
        <DestinationCard flight={flight} key={index} />
      ))}
    </ul>
  );
}
