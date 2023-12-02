"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddCrew() {
  const addCrew = async (
    firstName: string,
    lastName: string,
    email: string,
    employeeRole: string
  ) => {
    const body = {
      firstName,
      lastName,
      email,
      employeeRole,
    };
    console.log(body);
    const res = await fetch("api/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    console.log(json);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      role,
    });
    toast.promise(addCrew(firstName, lastName, email, role), {
      pending: "Adding Crew...",
      success: "Crew Added!",
      error: "Error Adding Crew",
    });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">Add Crew</h1>
          <form onSubmit={handleSubmit} className="flex">
            {/* FirstName */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                First Name
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {/* LastName */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Last Name
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Email
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Role */}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Role
              </span>
              <input
                required
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
              <div className="text-neutral-50 whitespace-nowrap">
                Add Crew Member
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
