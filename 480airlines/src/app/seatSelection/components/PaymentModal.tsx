"use client";
import { AppStateContext } from "@/app/components/FlightContext";
import seatsInterface from "@/app/interfaces/seats";
import transactionInterface from "@/app/interfaces/transaction";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ticketPurchaseEmail } from "@/app/api/email/membershipEmail";
export default function PaymentModal({
  onClose,
  selectedSeat,
}: {
  onClose: () => void;
  selectedSeat?: seatsInterface;
}) {
  const { data: session } = useSession();
  const flightProvider = useContext(AppStateContext);
  const { chosenFlight } = flightProvider!;
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [ticketCancellation, setTicketCancellation] = useState(false);
  const [insurance, setInsurance] = useState(0);
  const handleTicketCancellationChange = (event: React.ChangeEvent) => {
    setTicketCancellation(!ticketCancellation);
    if (ticketCancellation) {
      setInsurance(0);
    } else {
      setInsurance(1);
    }
  };
  const createTransaction = async () => {
    const body = {
      customerID: session?.user?.email,
      flightID: chosenFlight.flight?.flightID,
      seatCode: selectedSeat?.seatCode,
      plane: chosenFlight.flight?.plane.aircraftID,
      insurance: insurance,
      seatType: selectedSeat?.seatType,
      aircraftID: chosenFlight.flight?.plane.aircraftID,
    };
    const response = await fetch("/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.promise(createTransaction(), {
      pending: "Creating Transaction...",
      success: "Transaction Created!",
      error: "Error Creating Transaction",
    });
    if (
      session &&
      session.user &&
      session.user.email &&
      session.user.name &&
      chosenFlight.flight?.flightID &&
      selectedSeat?.seatCode &&
      chosenFlight.flight?.plane.aircraftID &&
      insurance &&
      selectedSeat?.seatType &&
      chosenFlight.flight?.plane.aircraftID
    ) {
      console.log(
        session?.user?.email,
        session?.user?.name,
        "TicketID: faukjljkl1214xz",
        chosenFlight.flight?.flightID,
        selectedSeat?.seatCode,
        chosenFlight.flight?.plane.aircraftID,
        insurance,
        selectedSeat?.seatType,
        chosenFlight.flight?.plane.aircraftID
      );
      toast.promise(
        ticketPurchaseEmail(
          session?.user?.email,
          session?.user?.name,
          "TicketID: faukjljkl1214xz",
          chosenFlight.flight?.flightID,
          selectedSeat?.seatCode,
          chosenFlight.flight?.plane.aircraftID,
          insurance,
          selectedSeat?.seatType,
          chosenFlight.flight?.plane.aircraftID
        ),
        {
          pending: "Sending Payment Receipt Email...",
          success: "Email Sent!",
          error: "Error Sending Payment Receipt Email",
        }
      );
    } else {
      toast.error("Error Sending Payment Receipt Email");
    }

    onClose();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-1/2">
        <span
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <label className="block mb-2" htmlFor="cardNumber">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={cardNumber}
            onChange={(e) => {
              // Remove non-numeric characters
              const input = e.target.value.replace(/\D/g, "");

              // Limit to 16 characters
              const truncatedInput = input.substring(0, 16);

              // Update state
              setCardNumber(truncatedInput);
            }}
            required
          />

          {/* Expiration Date */}
          <label className="block mb-2" htmlFor="expirationDate">
            Expiration Date:
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={expirationDate}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, "");

              // Limit to 16 characters
              const truncatedInput = input.substring(0, 4);
              setExpirationDate(truncatedInput);
            }}
            required
          />

          {/* CVV */}
          <label className="block mb-2" htmlFor="cvv">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={cvv}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, "");

              // Limit to 16 characters
              const truncatedInput = input.substring(0, 3);
              setCVV(truncatedInput);
            }}
            required
          />
          {/* Ticket Cancellation Insurance */}
          <label className="block mb-2" htmlFor="cvv">
            Cancellation Insurance
          </label>
          <input
            type="checkbox"
            id="cancellationInsurance"
            name="cancellationInsurance"
            className="p-2 mb-4 border justify-start border-gray-300 rounded"
            checked={ticketCancellation}
            onChange={handleTicketCancellationChange}
          />
          <div className=""></div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}
