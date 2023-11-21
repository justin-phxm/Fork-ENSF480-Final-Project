"use client";
import React from "react";
import BrowseFlights from "../admin/components/BrowseFlights";

export default function AirlineEmployeeControl() {
  return (
    <div>
      <h1 className="text-lg font-bold uppercase">Airline Employee Control</h1>
      <BrowseFlights></BrowseFlights>
    </div>
  );
}
