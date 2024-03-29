"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function AddFlight() {
  const addFlight = async () => {
    const res = await fetch("/api/flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        departureAirport: departureAirport,
        arrivalAirport: arrivalAirport,
        plane: { aircraftName: aircraftName },
        dateOfArrival: arrivalDateTime,
        dateOfDeparture: departureDateTime,
        departureCity: departureCity,
        arrivalCity: arrivalCity,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      departureAirport: departureAirport,
      arrivalAirport: arrivalAirport,
      plane: { aircraftName: aircraftName },
      dateOfArrival: arrivalDateTime,
      dateOfDeparture: departureDateTime,
      departureCity: departureCity,
      arrivalCity: arrivalCity,
    });
    toast.promise(addFlight(), {
      pending: "Adding Flight...",
      success: "Flight Added!",
      error: "Error Adding Flight",
    });
  };
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
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
  const [aircraftName, setAircraftName] = useState("");
  useEffect(() => {
    setDepartureDateTime(departureDate + "T" + departureTime + ":00");
    setArrivalDateTime(arrivalDate + "T" + arrivalTime + ":00");
  }, [departureDate, departureTime, arrivalDate, arrivalTime]);
  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div data-aos="fade-right" className="">
          <h1 className="text-lg font-bold">Add Flight</h1>
          <form onSubmit={handleSubmit} className="flex">
            {/* Cities */}
            <section className="">
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
                  placeholder="Where from?"
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
                  placeholder="Where to?"
                  value={arrivalCity}
                  onChange={(e) => setArrivalCity(e.target.value)}
                />
              </div>
            </section>
            {/* Airport Codes */}
            <div className="">
              {/* Departure Airport */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Departure Airport
                </span>
                <input
                  required
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Airport Code (eg. LAX)"
                  value={departureAirport}
                  onChange={(e) => setDepartureAirport(e.target.value)}
                />
              </div>
              {/* Arrival Airport */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Arrival Airport
                </span>
                <input
                  required
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Airport Code (eg. LAX)"
                  value={arrivalAirport}
                  onChange={(e) => setArrivalAirport(e.target.value)}
                />
              </div>
            </div>
            {/* Time */}
            <section className="">
              {/* Departure date */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Departure Date
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
              {/* Departure Time */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Departure Time
                </span>
                <input
                  type="time"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Depart - time"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                />
              </div>
            </section>

            <section>
              {/* Arrival date */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Arrival Date
                </span>
                <input
                  type="date"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Depart - Return"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
              {/* Arrival Time */}
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Arrival Time
                </span>
                <input
                  type="time"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Depart - time"
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                />
              </div>
            </section>
            {/* Aircraft Name */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Aircraft Name
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Aircraft Name"
                value={aircraftName}
                onChange={(e) => setAircraftName(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex"
            >
              <div className="text-neutral-50 whitespace-nowrap">
                Add Flight
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
