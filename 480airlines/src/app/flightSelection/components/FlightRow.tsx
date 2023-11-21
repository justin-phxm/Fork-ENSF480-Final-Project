"use client";
import flightInterface from "@/app/interfaces/flight";
import React from "react";

export default function FlightRow(props: { flight: flightInterface }) {
  const { flight } = props;
  return (
    <>
      <div className="">
        <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
          {/* Image */}
          <div className="w-10 h-10 justify-center items-center flex">
            <img
              className="w-10 h-10"
              src="https://via.placeholder.com/40x40"
            />
          </div>
          <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              {/* Flight Duration */}
              <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
                16h 45m
              </div>
              {/* Local Flight Time */}
              <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
                7:00AM - 4:15PM
              </div>
              {/* Price */}
              <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
                $624
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                Hawaiian Airlines
              </div>
              <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                value
              </div>
              <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
                2h 45m in HNL
              </div>
              <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
                round trip
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch h-px bg-violet-100 p-1" />
        </div>
      </div>
    </>
  );
}
