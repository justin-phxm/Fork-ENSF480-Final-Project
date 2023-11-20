import React from "react";
import flightInterface from "@/app/interfaces/flight";
export default function FlightInformation(props: flightInterface) {
  const {
    destinationCode,
    destinationLocation,
    originCode,
    originLocation,
    departureTime,
    arrivalTime,
  } = props;

  const formattedDepartureDate = departureTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedArrivalDate = arrivalTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <>
      <div className="self-stretch bg-slate-800 justify-between items-center inline-flex">
        {/* Location Details */}
        <div className="justify-start items-center flex">
          {/* Origin Details */}
          <div className="w-32 h-24 px-6 py-5 bg-slate-800 flex-col justify-start items-start inline-flex">
            <div className="w-20 text-neutral-50 text-2xl font-extrabold uppercase">
              {originCode}
            </div>
            <div className="w-20 text-violet-100 text-xs">{originLocation}</div>
          </div>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 16.0005H25.5M25.5 16.0005L18 8.50049M25.5 16.0005L18 23.5005"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Destination Details */}
          <div className="w-8 h-8 relative rounded" />
          <div className="w-32 h-24 px-6 py-5 bg-slate-800 flex-col justify-start items-start inline-flex">
            <div className="w-20 text-neutral-50 text-2xl font-extrabold uppercase">
              {destinationCode}
            </div>
            <div className="w-20 text-violet-100 text-xs font-normal">
              {destinationLocation}
            </div>
          </div>
        </div>
        {/* Time Details */}
        <div className="justify-start items-start flex">
          <div className="w-px h-22 bg-slate-800">
            <div className="w-px h-22 bg-slate-500" />
          </div>
          {/* Departure Time */}
          <div className="flex-col justify-start items-center inline-flex">
            <div className=" w-44 h-22 px-6 py-5 bg-indigo-500 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch">
                <span className="text-white text-base font-normal">
                  {formattedDepartureDate}
                </span>
              </div>
              <div className="self-stretch text-violet-100 text-xs font-normal">
                Departing
              </div>
            </div>
            <div className="w-5 h-px" />
          </div>
          {/* Arrival Time */}
          <div className="w-px h-22 bg-slate-800">
            <div className="w-px h-22 bg-slate-500" />
          </div>
          <div className="w-44 h-24 px-6 py-5 bg-slate-800 flex-col justify-center items-start gap-1 inline-flex">
            <div className="self-stretch">
              <span className="text-white text-base font-normal">
                {formattedArrivalDate}
              </span>
            </div>
            <div className="self-stretch text-violet-100 text-xs font-normal">
              Arriving
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
