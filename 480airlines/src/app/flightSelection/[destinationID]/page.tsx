import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <h1>List of flights for {params.destinationID}</h1>
        <FlightSelectionControl></FlightSelectionControl>
      </div>
    </>
  );
}
