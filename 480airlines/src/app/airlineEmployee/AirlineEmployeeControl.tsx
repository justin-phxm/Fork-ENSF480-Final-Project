"use client";
import React from "react";
import BrowseFlights from "../admin/components/flightComponents/BrowseFlights";
import BrowsePassengers from "./components/BrowsePassengers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AirlineEmployeeControl() {
  return (
    <div>
      <h1 className="text-lg font-bold uppercase">Airline Employee Control</h1>
      <BrowseFlights></BrowseFlights>
      <BrowsePassengers></BrowsePassengers>
      <ToastContainer position="bottom-right"></ToastContainer>
    </div>
  );
}
