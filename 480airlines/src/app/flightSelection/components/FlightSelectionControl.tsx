"use client";
import React, { useEffect } from "react";
import Searchbar from "@/app/components/Searchbar";
import FlightTable from "./FlightTable";
import flightInterface from "@/app/interfaces/flight";
import { flight, flight2 } from "@/app/fakeData/flight";
export default function FlightSelectionControl() {
  const currentDate = new Date();
  const [flights, setFlights] = React.useState([flight, flight2]);
  useEffect(() => {
    // fetch("/api/flight")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setFlights(data);
    //   });
  }, []);

  return (
    <div className="mx-auto max-w-4xl bg-white rounded p-4">
      <Searchbar />
      <div className="py-2">
        {/* <h2 className=" italic font-semibold py-2">Choose a flight</h2> */}
        <FlightTable flights={flights} />
      </div>
    </div>
  );
}
