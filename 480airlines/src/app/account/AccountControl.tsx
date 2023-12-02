"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import OrderHistory from "./components/OrderHistory";
import orderTransactionInterface from "../interfaces/orderTransaction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountControl() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState<orderTransactionInterface[]>(
    []
  );
  const uri = `/api/transaction?email=${session?.user?.email}`;
  useEffect(() => {
    console.log(uri);
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      });
  }, [uri]);

  return (
    <div className=" p-4">
      <h1 className=" font-bold text-xl">Welcome, {session?.user?.name}</h1>
      <div className="mx-auto max-w-4xl bg-slate-100 rounded p-4 gap-4">
        <div className="py-2">
          <h1 className="font-bold">
            Order History {"  "}
            <span className="font-normal text-sm">
              -- Click on a flight to cancel
            </span>
          </h1>
          <OrderHistory transactions={transactions}></OrderHistory>
        </div>
      </div>
      <ToastContainer position="bottom-right"></ToastContainer>
    </div>
  );
}
