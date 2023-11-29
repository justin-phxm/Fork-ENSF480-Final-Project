import React from "react";
import SeatOrdinary from "./SeatOrdinary";
import seatsInterface from "@/app/interfaces/seats";
export default function RowComfort(props: {
  seats: seatsInterface[];
  setSelectedSeat: (chosenSeat: seatsInterface) => void;
  selectedSeat?: seatsInterface;
}) {
  const { seats, setSelectedSeat, selectedSeat } = props;

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
              <SeatOrdinary
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
