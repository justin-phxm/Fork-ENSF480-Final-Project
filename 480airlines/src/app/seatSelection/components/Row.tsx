import React from "react";
import Seat from "./Seat";
import seatsInterface from "@/app/interfaces/seats";
export default function Row(props: {
  seats: seatsInterface[];
  setSelectedSeat: (chosenSeat: seatsInterface) => void;
  selectedSeat?: seatsInterface;
}) {
  const { seats, setSelectedSeat, selectedSeat } = props;

  const seatsPerRow = 4;
  const numRows = Math.ceil(seats.length / seatsPerRow);

  return (
    <>
      {Array.from({
        length: numRows,
      }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="self-stretch px-2 py-1 bg-white justify-between items-center inline-flex"
        >
          {/* Render first seats */}
          {seats
            .slice(
              rowIndex * seatsPerRow,
              rowIndex * seatsPerRow + seatsPerRow / 2
            )
            .map((seat, index) => (
              <Seat
                seat={seat}
                // availability={seat.availability}
                key={index}
                // seatCode={seat.seatCode}
                setSelectedSeat={setSelectedSeat}
                selectedSeat={selectedSeat}
              />
            ))}

          {/* Row Number */}
          <div className="w-7 h-8 flex-col justify-center items-center inline-flex">
            <div className="w-7 h-8 text-center text-slate-400 text-sm font-normal">
              {rowIndex + 1}
            </div>
          </div>

          {/* Render second seats */}
          {seats
            .slice(
              rowIndex * seatsPerRow + seatsPerRow / 2,
              rowIndex * seatsPerRow + seatsPerRow
            )
            .map((seat, index) => (
              <Seat
                seat={seat}
                // availability={seat.availability}
                key={index}
                // seatCode={seat.seatCode}
                setSelectedSeat={setSelectedSeat}
                selectedSeat={selectedSeat}
              />
            ))}
        </div>
      ))}
    </>
  );
}
