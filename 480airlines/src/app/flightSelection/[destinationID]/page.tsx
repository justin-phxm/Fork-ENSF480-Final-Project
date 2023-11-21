import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Searchbar from "@/app/components/Searchbar";
import FlightSelectionControl from "../components/FlightSelectionControl";
export default function page({
  params,
}: {
  params: { destinationID: string };
}) {
  return (
    <>
      <div className="p-4">
        <FlightSelectionControl></FlightSelectionControl>
        <h1>List of flights for {params.destinationID}</h1>
      </div>
    </>
  );
}
