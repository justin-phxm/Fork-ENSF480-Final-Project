import React from "react";

export default function SeatOrdinary(props: { availability?: string }) {
  const { availability } = props;
  const seatColor =
    availability === "available"
      ? "from-emerald-300 to-teal-500"
      : availability === "selected"
      ? "from-indigo-500 to-indigo-700"
      : "from-violet-100 to-violet-100";
  return (
    <div className="w-5 h-8 flex-col justify-center items-center inline-flex">
      <div
        className={`w-5 h-8 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
