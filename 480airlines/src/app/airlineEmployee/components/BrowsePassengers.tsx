"use client";
import CustomerInterface from "@/app/interfaces/customer";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function BrowsePassengers() {
  const [passengers, setPassengers] = useState<CustomerInterface[]>([]);
  const [flightID, setFlightID] = useState("0");
  const getPassengers = async () => {
    const response = await fetch("api/flightAttendant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flightID: flightID,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPassengers(data);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast.promise(getPassengers(), {
      pending: "Fetching Passengers...",
      success: `Passengers fetched!`,
      error: "Error fetching passengers",
    });
  };
  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">View Passengers</h1>
          <form onSubmit={handleSubmit} className="flex">
            {/* Origin */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                flightID
              </span>
              <input
                type="number"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="flightID"
                value={flightID}
                onChange={(e) => setFlightID(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex"
            >
              <div className="text-neutral-50 whitespace-nowrap">
                View Passengers
              </div>
            </button>
          </form>
          <ul className="mx-auto p-2 border border-slate-200 rounded">
            {passengers.map((passenger) => (
              <li
                className="flex flex-row justify-between p-2 border border-slate-200 rounded hover:bg-indigo-400"
                key={passenger.customerID}
              >
                <p>
                  <span className="font-bold">Customer ID:</span>{" "}
                  {passenger.customerID}{" "}
                </p>
                <p>
                  <span className="font-bold">First Name:</span>
                  {passenger.firstName}
                </p>
                <p>
                  <span className="font-bold">Last Name:</span>{" "}
                  {passenger.lastName}{" "}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {passenger.email}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
