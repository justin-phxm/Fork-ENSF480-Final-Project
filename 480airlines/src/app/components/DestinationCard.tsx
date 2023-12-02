import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import flight2Interface from "../interfaces/flight2";
import { AppStateContext } from "./FlightContext";

export default function DestinationCard(props: { flight: flight2Interface }) {
  const flightProvider = useContext(AppStateContext);
  const { setChosenFlight, chosenFlight } = flightProvider!;
  const { flight } = props;
  const cityName = flight.arrivalCity;
  const flightID = flight.flightID;
  const description = cityName + "'s calling! Book your trip now!";
  const handleButtonClick = () => {
    setChosenFlight({ flight: flight });
    console.log(chosenFlight);
  };

  return (
    <>
      <div className="max-w-sm hover:opacity-90 transition ease-in hover:-translate-y-1 duration-300 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <Image
            width={400}
            height={300}
            className="rounded-t-lg"
            src="https://iso.500px.com/wp-content/uploads/2015/10/anthony-1500x995.jpg"
            alt="city Image"
          />
        </Link>
        <div className="p-5">
          <div className="self-stretch flex flex-row justify-between">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cityName}
              </h5>
            </Link>
            <Link
              onClick={handleButtonClick}
              href="/seatSelection"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              FlightID: {flightID}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
