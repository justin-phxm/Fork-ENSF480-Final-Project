"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function RemoveCrew() {
  const deleteCrew = async (employeeID: string) => {
    const res = await fetch("api/employee", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: employeeID,
      }),
    });
    const json = await res.json();
    console.log(json);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast.promise(deleteCrew(employeeID), {
      pending: "Deleting Crew...",
      success: "Crew Deleted!",
      error: "Error Deleting Crew",
    });
  };

  const [employeeID, setEmployeeID] = useState("");

  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">Remove Crew</h1>
          <form onSubmit={handleSubmit} className="flex">
            {/* Employee ID */}
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
                placeholder="employeeID"
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
              />
            </div>
            <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
              <div className="text-neutral-50 whitespace-nowrap">
                Remove Crew
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
