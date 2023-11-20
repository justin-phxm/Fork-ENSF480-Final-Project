"use client";
import React, { useState } from "react";

export default function PaymentModal({ onClose }: { onClose: () => void }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your payment processing logic here
    alert("Payment Successful!");
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
