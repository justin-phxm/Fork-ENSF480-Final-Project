import seatsInterface from "@/app/interfaces/seats";
import React from "react";

export default function Seat(props: {
  seat?: seatsInterface;
  // availability: boolean;
  // seatCode: string;
  setSelectedSeat: (chosenSeat: seatsInterface) => void;
  selectedSeat?: seatsInterface;
}) {
  const {
    //  availability, seatCode,
    setSelectedSeat,
    selectedSeat,
    seat,
  } = props;
  const seatColor =
    selectedSeat && selectedSeat.seatCode === seat?.seatCode
      ? "from-indigo-300 to-indigo-500"
      : seat?.availability
      ? "from-yellow-300 to-yellow-500"
      : "from-violet-100 to-violet-100";

  const handleClick = () => {
    if (seat && seat.availability) {
      setSelectedSeat(seat);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`w-7 h-10 ${
        seat && seat.availability && "cursor-pointer"
      } flex-col justify-center items-center inline-flex`}
    >
      <div
        className={`w-7 h-10 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
