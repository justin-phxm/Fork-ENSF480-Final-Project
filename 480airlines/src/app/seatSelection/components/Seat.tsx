import React from "react";

export default function Seat(props: { availability?: string }) {
  const { availability } = props;
  const seatColor =
    availability === "available"
      ? "from-yellow-300 to-yellow-500"
      : availability === "selected"
      ? "from-indigo-500 to-indigo-700"
      : "from-violet-100 to-violet-100";
  return (
    <div className="w-7 h-10 flex-col justify-center items-center inline-flex">
      <div
        className={`w-7 h-10 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
