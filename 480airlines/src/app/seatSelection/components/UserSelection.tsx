"use client";
import flightInterface from "@/app/interfaces/flight2";
import React, { useEffect, useState } from "react";
import PaymentModal from "./PaymentModal";
import { useSession } from "next-auth/react";
import seatsInterface from "@/app/interfaces/seats";

export default function UserSelection(props: {
  selectedSeat?: seatsInterface;
}) {
  const { selectedSeat } = props;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { data: session } = useSession();
  const [insurance, setInsurance] = useState(0);
  const price =
    500 *
    (selectedSeat?.seatType === "Business"
      ? 1.9
      : selectedSeat?.seatType === "Comfort"
      ? 1.4
      : 1) *
    (insurance ? 1.15 : 1);
  // useEffect(()=>{
  //   if (insurance === 1) {
  //     setPrice(price + 100);
  //   }
  // }, [insurance])
  return (
    <div className="self-stretch h-24 bg-slate-50 flex-col justify-start items-start flex">
      <div className="self-stretch h-px flex-col justify-start items-center gap-2.5 flex">
        <div className="self-stretch h-px bg-slate-300" />
      </div>
      <div className="self-stretch px-6 py-4 justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-16 justify-start items-start gap-4 flex">
          {/* Passenger Info */}
          <div className="p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-40 text-slate-400 text-sm font-normal">
              Passenger 1
            </div>
            <div className="text-slate-500 text-lg font-semibold">
              {session ? session?.user?.name : "Guest"}
            </div>
          </div>
          {/* Seat Code */}
          <div className="grow shrink basis-0 p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-slate-400 text-sm font-normal">Seat code</div>
            <div className="text-slate-500 text-lg font-semibold">
              {selectedSeat?.seatCode}
            </div>
          </div>
          {/* Seat Class */}
          <div className=" shrink p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-slate-400 text-sm font-normal">Seat class</div>
            <div className="text-slate-500 text-lg font-semibold">
              {selectedSeat?.seatType}
            </div>
          </div>
          {/* Price */}
          <div className="shrink p-2 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-slate-400 text-sm font-normal">Price</div>
            <div className="text-slate-500 text-lg font-semibold">
              ${price.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-4 flex">
          {/* Paymemt Button */}
          <button
            className="w-36 px-5 py-3 rounded border bg-indigo-500 justify-start items-center gap-2 flex"
            onClick={() => setIsPaymentModalOpen(true)}
            disabled={!selectedSeat}
          >
            <div className="text-white text-base font-normal">
              {selectedSeat ? "Proceed to payment" : "Please select a seat"}
            </div>
          </button>
          {isPaymentModalOpen && (
            <PaymentModal
              insurance={insurance}
              setInsurance={setInsurance}
              selectedSeat={selectedSeat}
              onClose={() => setIsPaymentModalOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
