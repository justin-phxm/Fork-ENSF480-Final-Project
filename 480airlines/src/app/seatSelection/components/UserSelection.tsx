"use client";
import flightInterface from "@/app/interfaces/flight";
import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
export default function UserSelection(props: {
  flight: flightInterface;
  selectedSeat: string;
}) {
  const { flight, selectedSeat } = props;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="self-stretch h-24 bg-slate-50 flex-col justify-start items-start flex">
      <div className="self-stretch h-px flex-col justify-start items-center gap-2.5 flex">
        <div className="self-stretch h-px bg-slate-300" />
      </div>
      <div className="self-stretch px-6 py-4 justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-16 justify-start items-start gap-4 flex">
          <div className="p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-40 text-slate-400 text-sm font-normal">
              Passenger 1
            </div>
            <div className="text-slate-500 text-lg font-semibold">
              Sofia Knowles
            </div>
          </div>
          <div className="grow shrink basis-0 p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-slate-400 text-sm font-normal">
              Seat number
            </div>
            <div className="text-slate-500 text-lg font-semibold">
              {selectedSeat}
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-4 flex">
          <button
            className="w-36 px-5 py-3 rounded border bg-indigo-500 justify-start items-center gap-2 flex"
            onClick={() => setIsPaymentModalOpen(true)}
          >
            <div className="text-white text-base font-normal">
              Proceed to payment
            </div>
          </button>
          {isPaymentModalOpen && (
            <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
