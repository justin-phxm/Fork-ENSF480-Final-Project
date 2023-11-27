"use client";
import React from "react";
import FlightRow from "./FlightRow";
import flightInterface from "@/app/interfaces/flight";

export default function FlightTable(props: { flights: flightInterface[] }) {
  const { flights } = props;
  return (
    <ul className="bg-white p-4 rounded-lg border border-violet-100 gap-2 flex-col inline-flex w-full">
      {flights.map((flight, index) => (
        <FlightRow key={index} flight={flight} />
      ))}
    </ul>
  );
}
