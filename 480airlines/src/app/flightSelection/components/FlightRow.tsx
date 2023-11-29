"use client";
import { AppStateContext } from "@/app/components/FlightContext";
import flightInterface from "@/app/interfaces/flight2";
import Link from "next/link";
import React, { useContext } from "react";

export default function FlightRow(props: { flight?: flightInterface }) {
  const { flight } = props;
  const dateOfArrival = flight ? new Date(flight.dateOfArrival) : new Date();
  const dateOfDeparture = flight
    ? new Date(flight.dateOfDeparture)
    : new Date();
  const timeDifference = dateOfArrival.getTime() - dateOfDeparture.getTime();
  const flightDurationHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const flightDurationMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  const arrivalTime = dateOfArrival.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const departureTime = dateOfDeparture.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const flightProvider = useContext(AppStateContext);
  const { setChosenFlight } = flightProvider!;

  return (
    <>
      <Link
        onClick={() => setChosenFlight({ flight: flight })}
        href="/seatSelection"
      >
        <li className="px-4 py-1 inline-flex w-full cursor-pointer transition ease-in hover:-translate-y-1 duration-300 hover:bg-indigo-200 border-b-2 shadow border-violet-500 rounded gap-2">
          {/* Image */}
          <div className="w-10 h-10 my-auto items-center flex">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08964 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          {/* Details */}
          <div className="flex w-full flex-col text-slate-800 whitespace-nowrap">
            <section className="flex w-full px-4 py-2 flex-row justify-between rounded-full bg-indigo-300 ">
              {/* Flight ID */}
              <div className="text-slate-800 whitespace-nowrap">
                ID:{flight && flight.flightID}
              </div>
              {/* Flight Duration */}
              <div className="text-slate-800 whitespace-nowrap">
                Duration: {flightDurationHours}h {flightDurationMinutes}m
              </div>
              {/* Local Flight Time */}
              <div className=" text-slate-800 whitespace-nowrap">
                {departureTime} -{arrivalTime}
              </div>
              {/* Price */}
              <div className=" text-slate-800">
                ${flight && flight.flightID}
              </div>
            </section>
            <div className="flex flex-row gap-2 justify-between">
              <div className="">Origin City: {flight?.departureCity}</div>
              <div className="">Destination: {flight?.arrivalCity}</div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}
