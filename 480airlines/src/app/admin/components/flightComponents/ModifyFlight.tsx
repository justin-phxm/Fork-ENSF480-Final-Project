"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ModifyFlight() {
  const modifyFlight = async () => {
    const response = await fetch("api/flight", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flightID,
        departureAirport,
        arrivalAirport,
        dateOfArrival: departureDateTime,
        dateOfDeparture: arrivalDateTime,
        departureCity,
        arrivalCity,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      flightID,
      departureAirport,
      arrivalAirport,
      dateOfArrival: departureDateTime,
      dateOfDeparture: arrivalDateTime,
      departureCity,
      arrivalCity,
    });
    toast.promise(modifyFlight(), {
      pending: "Modifying Flight...",
      success: `Flight ${flightID} modified!`,
      error: "Error modifying flight",
    });
  };
  const [flightID, setFlightID] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [arrivalDate, setArrivalDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [departureTime, setDepartureTime] = useState(
    new Date().toISOString().slice(11, 16)
  );
  const [arrivalTime, setArrivalTime] = useState(
    new Date().toISOString().slice(11, 16)
  );
  const [departureDateTime, setDepartureDateTime] = useState(
    new Date().toISOString()
  );
  const [arrivalDateTime, setArrivalDateTime] = useState(
    new Date().toISOString()
  );
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  useEffect(() => {
    setDepartureDateTime(departureDate + "T" + departureTime + ":00");
    setArrivalDateTime(arrivalDate + "T" + arrivalTime + ":00");
  }, [departureDate, departureTime, arrivalDate, arrivalTime]);
  return (
    <>
      <div
        data-aos="fade-up"
        className=" border border-slate-400 p-2 rounded bg-white"
      >
        <h1 className="text-lg font-bold">Modify Flight</h1>
        <form onSubmit={handleSubmit} className="flex text-gray-900">
          {/* Flight ID */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Flight ID
            </span>
            <input
              required
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FlightID"
              value={flightID}
              onChange={(e) => setFlightID(e.target.value)}
            />
          </div>
          {/* Airport Codes */}
          <div className="">
            {/* Departure Airport */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Departure Airport Code
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Departure Airport Code (e.g. LAX)"
                value={departureAirport}
                onChange={(e) => setDepartureAirport(e.target.value)}
              />
            </div>
            {/* Arrival Airport */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Arrival Airport Code
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Arrival Airport Code (e.g. LAX)"
                value={arrivalAirport}
                onChange={(e) => setArrivalAirport(e.target.value)}
              />
            </div>
          </div>
          {/* Dates */}
          <div className="">
            {/* Departure Date */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <p className="text-sm font-light">Departure</p>
              </span>
              <input
                type="date"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Depart - Return"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            {/* Arrival Date */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <p className="text-sm font-light">Arrival</p>
              </span>
              <input
                required
                type="date"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Depart - Return"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
          </div>
          {/* Times */}
          <div className="">
            {/* Departure Time */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <p className="text-sm font-light">Departure Time</p>
              </span>
              <input
                type="time"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Depart - Return"
                value={departureTime}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            {/* Arrival Time */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <p className="text-sm font-light">Arrival Time</p>
              </span>
              <input
                type="time"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Depart - Return"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </div>
          </div>
          {/* Cities */}
          <div className="">
            {/* Departure City */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Departure City
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Departure City"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
              />
            </div>
            {/* Arrival City */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Arrival City
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Arrival City"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
            <div className="text-neutral-50 whitespace-nowrap">
              Modify Flight
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
