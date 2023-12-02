import EmployeeInterface from "@/app/interfaces/employee";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function BrowseCrew() {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const getCrew = async () => {
    const response = await fetch("api/employee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setEmployees(data);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast.promise(getCrew(), {
      pending: "Fetching Crew...",
      success: `Crew fetched!`,
      error: "Error fetching crew",
    });
  };

  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">Browse Crew</h1>
          <form onSubmit={handleSubmit} className="flex">
            <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
              <div className="text-neutral-50 whitespace-nowrap">
                Browse Crew
              </div>
            </button>
          </form>
          <ul className="mx-auto p-2 border border-slate-200 rounded">
            {employees.map((employee) => (
              <li
                className="flex flex-row justify-between p-2 border border-slate-200 rounded hover:bg-indigo-400"
                key={employee.id}
              >
                <p>
                  <span className="font-bold">ID:</span> {employee.id}{" "}
                </p>
                <p>
                  <span className="font-bold">First Name:</span>
                  {employee.firstName}
                </p>
                <p>
                  <span className="font-bold">Last Name:</span>{" "}
                  {employee.lastName}{" "}
                </p>
                <p>
                  <span className="font-bold">Role:</span>{" "}
                  {employee.employeeRole}{" "}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {employee.email}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
