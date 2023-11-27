"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFlight from "./components/AddFlight";
import AddAircraft from "./components/AddAircraft";
import BrowseFlights from "./components/BrowseFlights";
import BrowseAircrafts from "./components/BrowseAircrafts";
import RemoveAircraft from "./components/RemoveAircraft";
import AddCrew from "./components/AddCrew";
import BrowseCrew from "./components/BrowseCrew";
import RemoveCrew from "./components/RemoveCrew";
import AddDestination from "./components/AddDestination";
import RemoveDestination from "./components/RemoveDestination";
import ViewRegistered from "./components/ViewRegistered";
import RemoveFlight from "./components/RemoveFlight";
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
        <RemoveCrew></RemoveCrew>
        <RemoveAircraft></RemoveAircraft>
        <RemoveFlight></RemoveFlight>
        {/* <AddDestination></AddDestination> */}
        {/* <RemoveDestination></RemoveDestination> */}
        <ViewRegistered></ViewRegistered>
        <ToastContainer position="bottom-right"></ToastContainer>
      </div>
    </>
  );
}
