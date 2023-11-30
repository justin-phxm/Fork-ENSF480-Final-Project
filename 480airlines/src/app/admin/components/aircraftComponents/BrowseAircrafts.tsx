import aircraft2Interface from "@/app/interfaces/aircraft2";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function BrowseAircrafts() {
  const getAircrafts = async () => {
    const response = await fetch("api/aircraft", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setAircrafts(data);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast.promise(getAircrafts(), {
      pending: "Fetching Aircrafts...",
      success: `Aircrafts fetched!`,
      error: "Error fetching aircrafts",
    });
  };
  const [aircrafts, setAircrafts] = useState<aircraft2Interface[]>([]);
  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">Browse Aircrafts</h1>
          <form onSubmit={handleSubmit} className="flex">
            <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
              <div className="text-neutral-50 whitespace-nowrap">
                Browse Aircrafts
              </div>
            </button>
          </form>
          <ul className="mx-auto p-2 border border-slate-200 rounded">
            {aircrafts.map((aircraft) => (
              <li
                className="flex flex-row justify-between p-2 border border-slate-200 rounded hover:bg-indigo-400"
                key={aircraft.aircraftID}
              >
                <p>
                  <span className="font-bold">AircraftID:</span>
                  {aircraft.aircraftID}
                </p>
                <p>
                  <span className="font-bold">Aircraft Name:</span>{" "}
                  {aircraft.aircraftName}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
