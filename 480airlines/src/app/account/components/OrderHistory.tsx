"use client";
import React, { useEffect, useState } from "react";
import OrderRow from "./OrderRow";
import orderTransactionInterface from "@/app/interfaces/orderTransaction";
import CancellationModal from "./CancellationModal";
import { toast } from "react-toastify";
import { ticketCancellationEmail } from "@/app/api/email/membershipEmail";
import { useSession } from "next-auth/react";
export default function OrderHistory(props: {
  transactions?: orderTransactionInterface[];
  setTransactions: React.Dispatch<
    React.SetStateAction<orderTransactionInterface[]>
  >;
}) {
  const { data: session } = useSession();
  const { transactions, setTransactions } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cancellingOrder, setCancellingOrder] = useState<
    orderTransactionInterface | undefined
  >();
  // useEffect(() => {
  //   console.log({ cancellingOrder });
  // }, [cancellingOrder]);
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
    if (cancellingOrder && session?.user?.name) {
      toast.promise(
        ticketCancellationEmail(
          cancellingOrder.email,
          session.user.name,
          cancellingOrder.iD,
          cancellingOrder.ticket.origin,
          cancellingOrder.ticket.destination
        ),
        {
          pending: "Sending email...",
          success: "Email sent!",
          error: "Error sending email",
        }
      );
    }
    if (transactions) {
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.iD !== transactionID
      );
      setTransactions(updatedTransactions);
    }
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
                setCancellingOrder(flight);
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
