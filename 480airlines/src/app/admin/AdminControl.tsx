"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFlight from "./components/AddFlight";
import AddAircraft from "./components/AddAircraft";
export default function AdminControl() {
  return (
    <>
      <div>
        <h1 className="text-lg font-bold uppercase">Admin Page</h1>
        <AddFlight></AddFlight>
        <AddAircraft></AddAircraft>
        <ToastContainer position="bottom-right"></ToastContainer>
      </div>
    </>
  );
}
