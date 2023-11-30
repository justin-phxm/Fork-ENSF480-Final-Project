"use client";
import React, { useState } from "react";

export default function CancellationModal({
  isModalOpen,
  handleCancelClick,
  handleCancelFlight,
  transactionID,
}: {
  isModalOpen: boolean;
  handleCancelClick: () => void;
  handleCancelFlight: () => void;
  transactionID: number | undefined;
}) {
  return (
    <dialog open={isModalOpen}>
      <div className=" fixed top-0 left-0 w-full h-full flex items-center flex-col justify-center bg-black bg-opacity-20">
        <div className="rounded bg-slate-500 p-4 flex justify-center flex-col text-center items-center">
          <h2 className="p-2 font-bold">Cancel Flight {transactionID}</h2>
          <p className="p-2">Are you sure you want to cancel your flight?</p>
          <div className="flex gap-4">
            <button
              className="rounded p-2 bg-red-500"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="rounded p-2 bg-emerald-500"
              onClick={handleCancelFlight}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
