import React from "react";

export default function Seat(props: {
  availability: boolean;
  seatCode: string;
  setSelectedSeat: (seatCode: string) => void;
  selectedSeat: string;
}) {
  const { availability, seatCode, setSelectedSeat, selectedSeat } = props;
  const seatColor =
    selectedSeat === seatCode
      ? "from-indigo-300 to-indigo-500"
      : availability
      ? "from-yellow-300 to-yellow-500"
      : "from-violet-100 to-violet-100";

  const handleClick = () => {
    if (availability) {
      setSelectedSeat(seatCode);

      // alert(seatCode);
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
        className={`w-7 h-10 relative rounded bg-gradient-to-b ${seatColor}`}
      />
    </div>
  );
}
