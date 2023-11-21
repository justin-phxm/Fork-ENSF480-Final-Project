import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function BrowseCrew() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("GET /api/crew");
    toast.success("Crew found!");
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className=" border border-slate-400 p-2 rounded bg-white"
      >
        <h1 className="text-lg font-bold">Browse Crew</h1>
        <form onSubmit={handleSubmit} className="flex">
          <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
            <div className="text-neutral-50 whitespace-nowrap">Browse Crew</div>
          </button>
        </form>
      </div>
    </>
  );
}
