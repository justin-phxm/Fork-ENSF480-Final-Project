import React from "react";
import flightInterface from "@/app/interfaces/flight";
export default function FlightInformation(props: flightInterface) {
  const { destinationCode, destinationLocation, originCode, originLocation } =
    props;
  return (
    <>
      <div className="self-stretch bg-slate-800 justify-between items-center inline-flex">
        {/* Location Details */}
        <div className="justify-start items-center flex">
          <div className="w-32 h-20 px-6 py-5 bg-slate-800 flex-col justify-start items-start inline-flex">
            <div className="w-20 text-neutral-50 text-2xl font-extrabold uppercase">
              {originCode}
            </div>
            <div className="w-20 text-violet-100 text-xs font-normal">
              {originLocation}
            </div>
          </div>
          <div className="w-8 h-8 relative rounded" />
          <div className="w-32 h-20 px-6 py-5 bg-slate-800 flex-col justify-start items-start inline-flex">
            <div className="w-20 text-neutral-50 text-2xl font-extrabold uppercase">
              {destinationCode}
            </div>
            <div className="w-20 text-violet-100 text-xs font-normal">
              {destinationLocation}
            </div>
          </div>
        </div>
        {/* Time Details */}
        {/* <div className="justify-start items-start flex">
    <div className="w-px h-20 relative bg-slate-800">
      <div className="w-px h-20 left-0 top-0 absolute bg-slate-500" />
    </div>
    <div className="flex-col justify-start items-center inline-flex">
      <div className="w-52 h-20 px-6 py-5 bg-indigo-500 flex-col justify-center items-start gap-1 flex">
        <div className="self-stretch">
          <span className="text-white text-base font-normal">
            Feb 25
          </span>
          <span className="text-slate-400 text-base font-normal">
            {" "}
            |{" "}
          </span>
          <span className="text-white text-base font-normal">
            7:00AM
          </span>
        </div>
        <div className="self-stretch text-violet-100 text-xs font-normal">
          Departing
        </div>
      </div>
      <div className="w-5 h-px relative" />
    </div>
    <div className="w-px h-20 relative bg-slate-800">
      <div className="w-px h-20 left-0 top-0 absolute bg-slate-500" />
    </div>
    <div className="w-52 h-24 px-6 py-5 bg-slate-800 flex-col justify-center items-start gap-1 inline-flex">
      <div className="self-stretch">
        <span className="text-white text-base font-normal">
          Mar 21
        </span>
        <span className="text-slate-400 text-base font-normal">
          {" "}
          |{" "}
        </span>
        <span className="text-white text-base font-normal">
          12:15PM
        </span>
      </div>
      <div className="self-stretch text-violet-100 text-xs font-normal">
        Arriving
      </div>
    </div>
  </div> */}
      </div>
    </>
  );
}
