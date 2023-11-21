"use client";
import React from "react";
import FlightRow from "./FlightRow";
import flightInterface from "@/app/interfaces/flight";

export default function FlightTable(props: { flights: flightInterface[] }) {
  const { flights } = props;
  return (
    <div className="w-96 h-96 rounded-xl border border-violet-100 justify-center items-center inline-flex">
      <div className="w-96 p-4 bg-white rounded-lg border border-violet-50 flex-col justify-start items-start inline-flex">
        {/* <FlightRow></FlightRow> */}
        {flights.map((flight, index) => (
          <FlightRow key={index} flight={flight} />
        ))}
        {/* <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
          <div className="w-10 h-10 pt-0.5 pb-1 justify-center items-center flex">
            <img className="w-10 h-8" src="https://via.placeholder.com/40x32" />
          </div>
          <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
                18h 22m
              </div>
              <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
                7:35 AM - 12:15 PM
              </div>
              <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
                1 stop
              </div>
              <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
                $663
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                Japan Airlines
              </div>
              <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                value
              </div>
              <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
                50m in HKG
              </div>
              <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
                round trip
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch h-px bg-violet-100" />
        </div> */}
        {/* <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 justify-center items-center flex">
        <img
          className="w-10 h-10"
          src="https://via.placeholder.com/40x40"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            18h 04m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            8:20 AM - 2:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $690
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
            1h 50m in PVG
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-[-2px] absolute" />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            18h 52m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            9:47 AM - 4:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $756
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Delta
          </div>
          <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            4h 05m in ICN
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 p-1 justify-center items-center flex">
        <img
          className="w-8 h-8"
          src="https://via.placeholder.com/32x32"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            16h 05m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            11:15 AM - 7:45 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            Nonstop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $837
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Hawaiian Airlines
          </div>
          <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 opacity-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 pt-1 pb-1.5 justify-center items-center flex">
        <img
          className="w-10 h-7"
          src="https://via.placeholder.com/40x28"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            15h 45m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            10:55 AM - 8:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            Nonstop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $839
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Hawaiian Airlines
          </div>
          <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 opacity-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-[-2px] absolute" />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            18h 20m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            1:00 PM - 9:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $886
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Delta
          </div>
          <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            4h 45m in ICN
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 px-1 py-1.5 flex-col justify-center items-start gap-0.5 inline-flex">
        <div className="w-8 h-5 relative flex-col justify-start items-start flex" />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            18h 55m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            2:15 PM - 11:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $913
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            EVA Air
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
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 p-1 justify-center items-center flex">
        <img
          className="w-8 h-8"
          src="https://via.placeholder.com/32x32"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            22h 37m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            6:45 PM - 7:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            2 stops
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $989
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Korean Air
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Arrives next day
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in PVG...
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 pt-0.5 pb-1 justify-center items-center flex">
        <img
          className="w-10 h-8"
          src="https://via.placeholder.com/40x32"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            20h 23m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            7:00AM - 4:15PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            2 stops
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $624
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Japan Airlines
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Arrives next day
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HKG...
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 pt-0.5 pb-1 justify-center items-center flex">
        <img
          className="w-10 h-8"
          src="https://via.placeholder.com/40x32"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            16h 45m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            7:00AM - 4:15PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            Nonstop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $1,079
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Japan Airlines
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Arrives next day
          </div>
          <div className="grow shrink basis-0 opacity-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 px-1 py-1.5 flex-col justify-center items-start gap-0.5 inline-flex">
        <div className="w-8 h-5 relative flex-col justify-start items-start flex" />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            16h 10m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            7:00AM - 4:15PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            Nonstop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $1,114
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            EVA Air
          </div>
          <div className="grow shrink basis-0 opacity-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 opacity-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 p-1 justify-center items-center flex">
        <img
          className="w-8 h-8"
          src="https://via.placeholder.com/32x32"
        />
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            14h 37m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            7:20 AM - 1:15 PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            Nonstop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $1,347
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Korean Air
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 opacity-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 relative" />
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            19h 45m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            9:00AM - 1:15PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $1,392
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Air France
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            5h 45m in HNL
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-2 py-1 bg-white flex-col justify-start items-center gap-2.5 flex">
      <div className="self-stretch h-px bg-violet-100" />
    </div>
    <div className="self-stretch px-4 py-1 bg-white rounded justify-start items-center gap-2 inline-flex">
      <div className="w-10 h-10 p-1 justify-center items-center flex">
        <div className="w-8 h-8 relative">
          <img
            className="w-6 h-4 left-[3.51px] top-[6.98px] absolute"
            src="https://via.placeholder.com/25x16"
          />
        </div>
      </div>
      <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            16h 55m
          </div>
          <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
            7:10AM - 4:35PM
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            1 stop
          </div>
          <div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal font-['Nunito Sans']">
            $1,403
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            Emirates
          </div>
          <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
            value
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            2h 45m in HKG
          </div>
          <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
            round trip
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}
