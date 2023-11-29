import seatsInterface from "@/app/interfaces/seats";
import React from "react";

export default function SeatOrdinary(props: {
  seat?: seatsInterface;
  // availability: boolean;
  setSelectedSeat: (chosenSeat: seatsInterface) => void;
  // seatCode: string;
  selectedSeat?: seatsInterface;
}) {
  const {
    // availability, seatCode,
    setSelectedSeat,
    selectedSeat,
    seat,
  } = props;
  const seatColor =
    selectedSeat?.seatCode === seat?.seatCode
      ? "from-indigo-300 to-indigo-500"
      : seat?.availability
      ? "from-emerald-300 to-teal-500"
      : "from-violet-100 to-violet-100";
  const handleClick = () => {
    if (seat?.availability) {
      setSelectedSeat(seat);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`w-7 h-10 ${
        seat?.availability && "cursor-pointer"
      } flex-col justify-center items-center inline-flex`}
    >
      <div
        className={`w-5 h-8 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
