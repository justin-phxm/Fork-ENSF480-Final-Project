"use client";
import React from "react";
import OrderRow from "./OrderRow";
import orderTransactionInterface from "@/app/interfaces/orderTransaction";

export default function OrderHistory(props: {
  transactions?: orderTransactionInterface[];
}) {
  const { transactions } = props;
  return (
    <ul className="bg-white p-4 rounded-lg border border-violet-100 gap-2 flex-col inline-flex w-full">
      {transactions &&
        transactions.map((flight, index) => (
          <OrderRow key={index} transaction={flight} />
        ))}
      {transactions && transactions.length === 0 && <div>No orders found</div>}
    </ul>
  );
}
