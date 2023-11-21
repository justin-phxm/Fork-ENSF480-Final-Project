import React from "react";
import SeatOrdinary from "./SeatOrdinary";
export default function RowOrdinary(props: {
  seats: string[];
  setSelectedSeat: (seatCode: string) => void;
}) {
  const { seats, setSelectedSeat } = props;

  const seatsPerRow = 6;
  const numRows = Math.ceil(seats.length / seatsPerRow);

  return (
    <>
      {Array.from({
        length: numRows,
      }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="self-stretch p-1 bg-white justify-between items-center gap-1 inline-flex"
        >
          {/* Render first seats */}
          {seats
            .slice(
              rowIndex * seatsPerRow,
              rowIndex * seatsPerRow + seatsPerRow / 2
            )
            .map((seat, index) => (
              <SeatOrdinary
                availability={seat}
                key={index}
                seatCode={`Ordinary ${rowIndex + 1} - A${index}`}
                setSelectedSeat={setSelectedSeat}
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
              <SeatOrdinary
                availability={seat}
                key={index}
                seatCode={`Ordinary ${rowIndex + 1} - B${index}`}
                setSelectedSeat={setSelectedSeat}
              />
            ))}
        </div>
      ))}
    </>
  );
}