"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFlight from "./components/flightComponents/AddFlight";
import AddAircraft from "./components/aircraftComponents/AddAircraft";
import BrowseFlights from "./components/flightComponents/BrowseFlights";
import BrowseAircrafts from "./components/aircraftComponents/BrowseAircrafts";
import RemoveAircraft from "./components/aircraftComponents/RemoveAircraft";
import AddCrew from "./components/aircraftComponents/AddCrew";
import BrowseCrew from "./components/aircraftComponents/BrowseCrew";
import RemoveCrew from "./components/aircraftComponents/RemoveCrew";
import AddDestination from "./components/AddDestination";
import RemoveDestination from "./components/RemoveDestination";
import ViewRegistered from "./components/ViewRegistered";
import RemoveFlight from "./components/flightComponents/RemoveFlight";
import ModifyFlight from "./components/flightComponents/ModifyFlight";
export default function AdminControl() {
  return (
    <>
      <div>
        <h1 className="text-lg font-bold uppercase">Admin Page</h1>
        <BrowseFlights></BrowseFlights>
        <BrowseCrew></BrowseCrew>
        <BrowseAircrafts></BrowseAircrafts>
        <AddFlight></AddFlight>
        <AddAircraft></AddAircraft>
        <AddCrew></AddCrew>
        <ModifyFlight></ModifyFlight>
        <RemoveCrew></RemoveCrew>
        <RemoveAircraft></RemoveAircraft>
        <RemoveFlight></RemoveFlight>
        <ViewRegistered></ViewRegistered>
        <ToastContainer position="bottom-right"></ToastContainer>
      </div>
    </>
  );
}
