import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DestinationCard() {
  const cityName = "London";
  const price = "$490";
  const description = "London's calling! Discover the best hotels!";
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <Image
            width={400}
            height={300}
            className="rounded-t-lg"
            src="https://via.placeholder.com/411x397"
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
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Only {price}!
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
