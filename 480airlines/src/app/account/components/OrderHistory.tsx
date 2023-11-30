"use client";
import React, { useState } from "react";
import OrderRow from "./OrderRow";
import orderTransactionInterface from "@/app/interfaces/orderTransaction";
import CancellationModal from "./CancellationModal";
import { toast } from "react-toastify";

export default function OrderHistory(props: {
  transactions?: orderTransactionInterface[];
}) {
  const { transactions } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cancelFlight = async () => {
    const res = await fetch("/api/transaction", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transactionID: transactionID,
      }),
    });
    console.log(res);
    res.json();
  };
  const handleCancelClick = () => {
    setIsModalOpen(false);
  };
  const handleCancelFlight = () => {
    setIsModalOpen(false);
    console.log("flight cancelled");
    toast.promise(cancelFlight(), {
      pending: "Cancelling flight...",
      success: "Flight cancelled",
      error: "Error cancelling flight",
    });
  };
  const [transactionID, setTransactionID] = useState<number | undefined>();
  return (
    <>
      <ul className="bg-white p-4 rounded-lg border border-violet-100 gap-2 flex-col inline-flex w-full">
        {transactions &&
          transactions.map((flight, index) => (
            <button
              key={index}
              onClick={() => {
                console.log(flight.iD);
                setTransactionID(flight.iD);
                setIsModalOpen(true);
              }}
            >
              <OrderRow key={index} transaction={flight} />
            </button>
          ))}
        {transactions && transactions.length === 0 && (
          <div>No orders found</div>
        )}
        <CancellationModal
          isModalOpen={isModalOpen}
          handleCancelClick={handleCancelClick}
          handleCancelFlight={handleCancelFlight}
          transactionID={transactionID}
        ></CancellationModal>
      </ul>
    </>
  );
}
