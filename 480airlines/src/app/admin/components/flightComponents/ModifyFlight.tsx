"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ModifyFlight() {
  const modifyFlight = async () => {
    const response = await fetch("api/flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flightID,
        departureAirport,
        arrivalAirport,
        dateOfArrival,
        dateOfDeparture,
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
      dateOfArrival,
      dateOfDeparture,
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
  const [dateOfArrival, setDateOfArrival] = useState("");
  const [dateOfDeparture, setDateOfDeparture] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  //   const [crew, setCrew] = useState(0);

  return (
    <>
      <div
        data-aos="fade-up"
        className=" border border-slate-400 p-2 rounded bg-white"
      >
        <h1 className="text-lg font-bold">Modify Flight</h1>
        <form onSubmit={handleSubmit} className="flex">
          {/* Flight ID */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.34152 9.97884C7.07104 9.89096 6.78638 10.067 6.74415 10.3482L6.23752 13.723C6.16495 14.2065 6.45251 14.6715 6.91742 14.8225L24.1767 20.4304C24.9832 20.6925 25.8494 20.2511 26.1114 19.4446C26.3838 18.6063 25.896 17.7113 25.0439 17.4859L19.7322 16.0805L18.4041 6.70728C18.349 6.31838 18.0772 5.99483 17.7037 5.87345C17.0777 5.67006 16.4244 6.09886 16.362 6.7541L15.6019 14.7384L8.34571 12.7959L7.64239 10.2921C7.60078 10.1439 7.48787 10.0264 7.34152 9.97884ZM26.1776 23.4521H5.64758V25.0314H26.1776V23.4521Z"
                  fill="#6E7491"
                />
              </svg>
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
          {/* Departure Airport */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.29285 16.3155C4.02797 16.419 3.91945 16.7356 4.06513 16.9799L5.81319 19.9108C6.06359 20.3306 6.58081 20.5079 7.0361 20.3299L23.9381 13.723C24.7279 13.4143 25.1179 12.5237 24.8092 11.734C24.4883 10.913 23.5436 10.5302 22.7417 10.8961L17.7432 13.1773L10.773 6.77125C10.4838 6.50546 10.0685 6.4276 9.70266 6.5706C9.08963 6.81023 8.85636 7.55604 9.22358 8.10227L13.6983 14.7584L6.85554 17.8571L4.72413 16.3669C4.59802 16.2787 4.43618 16.2594 4.29285 16.3155ZM25.6776 23.4521H5.14764V25.0313H25.6776V23.4521Z"
                  fill="#6E7491"
                />
              </svg>
            </span>
            <input
              required
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Airport Code"
              value={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
            />
          </div>
          {/* Arrival Airport */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.29285 16.3155C4.02797 16.419 3.91945 16.7356 4.06513 16.9799L5.81319 19.9108C6.06359 20.3306 6.58081 20.5079 7.0361 20.3299L23.9381 13.723C24.7279 13.4143 25.1179 12.5237 24.8092 11.734C24.4883 10.913 23.5436 10.5302 22.7417 10.8961L17.7432 13.1773L10.773 6.77125C10.4838 6.50546 10.0685 6.4276 9.70266 6.5706C9.08963 6.81023 8.85636 7.55604 9.22358 8.10227L13.6983 14.7584L6.85554 17.8571L4.72413 16.3669C4.59802 16.2787 4.43618 16.2594 4.29285 16.3155ZM25.6776 23.4521H5.14764V25.0313H25.6776V23.4521Z"
                  fill="#6E7491"
                />
              </svg>
            </span>
            <input
              required
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Arrival Airport Code"
              value={arrivalAirport}
              onChange={(e) => setArrivalAirport(e.target.value)}
            />
          </div>

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
              value={dateOfDeparture}
              onChange={(e) => setDateOfDeparture(e.target.value)}
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
              value={dateOfArrival}
              onChange={(e) => setDateOfArrival(e.target.value)}
            />
          </div>
          {/* Departure City */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.34152 9.97884C7.07104 9.89096 6.78638 10.067 6.74415 10.3482L6.23752 13.723C6.16495 14.2065 6.45251 14.6715 6.91742 14.8225L24.1767 20.4304C24.9832 20.6925 25.8494 20.2511 26.1114 19.4446C26.3838 18.6063 25.896 17.7113 25.0439 17.4859L19.7322 16.0805L18.4041 6.70728C18.349 6.31838 18.0772 5.99483 17.7037 5.87345C17.0777 5.67006 16.4244 6.09886 16.362 6.7541L15.6019 14.7384L8.34571 12.7959L7.64239 10.2921C7.60078 10.1439 7.48787 10.0264 7.34152 9.97884ZM26.1776 23.4521H5.64758V25.0314H26.1776V23.4521Z"
                  fill="#6E7491"
                />
              </svg>
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
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.34152 9.97884C7.07104 9.89096 6.78638 10.067 6.74415 10.3482L6.23752 13.723C6.16495 14.2065 6.45251 14.6715 6.91742 14.8225L24.1767 20.4304C24.9832 20.6925 25.8494 20.2511 26.1114 19.4446C26.3838 18.6063 25.896 17.7113 25.0439 17.4859L19.7322 16.0805L18.4041 6.70728C18.349 6.31838 18.0772 5.99483 17.7037 5.87345C17.0777 5.67006 16.4244 6.09886 16.362 6.7541L15.6019 14.7384L8.34571 12.7959L7.64239 10.2921C7.60078 10.1439 7.48787 10.0264 7.34152 9.97884ZM26.1776 23.4521H5.64758V25.0314H26.1776V23.4521Z"
                  fill="#6E7491"
                />
              </svg>
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

          {/* Number of Crew */}
          {/* <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p className="text-sm font-light">Crew</p>
            </span>
            <input
              required
              type="number"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1 adult"
              min={0}
              value={crew}
              onChange={(e) => setCrew(parseInt(e.target.value))}
            />
          </div> */}
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
