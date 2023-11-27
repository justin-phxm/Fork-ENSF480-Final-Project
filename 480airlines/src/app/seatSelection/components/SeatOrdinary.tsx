import React from "react";

export default function SeatOrdinary(props: {
  availability: boolean;
  setSelectedSeat: (seatCode: string) => void;
  seatCode: string;
  selectedSeat: string;
}) {
  const { availability, seatCode, setSelectedSeat, selectedSeat } = props;
  const seatColor =
    selectedSeat === seatCode
      ? "from-indigo-300 to-indigo-500"
      : availability
      ? "from-emerald-300 to-teal-500"
      : "from-violet-100 to-violet-100";
  const handleClick = () => {
    if (availability) {
      setSelectedSeat(seatCode);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`w-7 h-10 ${
        availability && "cursor-pointer"
      } flex-col justify-center items-center inline-flex`}
    >
      <div
        className={`w-5 h-8 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
