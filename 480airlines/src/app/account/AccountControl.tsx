"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function AccountControl() {
  const { data: session } = useSession();
  //   const [flights, setFlights] = useState([]);
  //   useEffect(() => {
  //     if (appState?.flights?.length === 0) {
  //       fetch("/api/flight")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setAppState({ flights: data });
  //         });
  //     }
  //   }, []);
  //   useEffect(() => {
  // setFlights(appState.flights);
  //   }, [appState]);

  return (
    <div className=" p-4">
      <h1 className=" font-bold text-xl">Welcome, {session?.user?.name}</h1>
      <div className="mx-auto max-w-4xl bg-slate-100 rounded p-4 gap-4">
        <div className="py-2">
          <h1 className="font-bold">Order History</h1>
          {/* <FlightTable flights={flights} /> */}
        </div>
      </div>
    </div>
  );
}
