import CustomerInterface from "@/app/interfaces/customer";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ViewRegistered() {
  const [registered, setRegistered] = useState<CustomerInterface[]>([]);
  const getRegistered = async () => {
    const res = await fetch("/api/registered", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const filteredCustomers = data.response.filter(
      (customer: CustomerInterface) => customer.isMember === true
    );
    console.log(filteredCustomers);
    setRegistered(filteredCustomers);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast.promise(getRegistered(), {
      pending: "Getting Registered...",
      success: "Fetched Registered Users",
      error: "Error getting Registered",
    });
  };

  return (
    <>
      <div className=" border border-slate-400 p-2 rounded bg-white">
        <div className="" data-aos="fade-right">
          <h1 className="text-lg font-bold">Print Registered</h1>
          <form onSubmit={handleSubmit} className="flex">
            <button className=" px-5 py-3 hover:opacity-70 bg-indigo-500 rounded items-center gap-2 inline-flex">
              <div className="text-neutral-50 whitespace-nowrap">
                Print Registered
              </div>
            </button>
          </form>
          <ul className="mx-auto p-2 border border-slate-200 rounded">
            {registered.map((customer) => (
              <li
                className="flex flex-row justify-between p-2 border border-slate-200 rounded hover:bg-indigo-400"
                key={customer.customerID}
              >
                <p>
                  <span className="font-bold">Customer ID:</span>{" "}
                  {customer.customerID}{" "}
                </p>
                <p>
                  <span className="font-bold">First Name:</span>
                  {customer.firstName}
                </p>
                <p>
                  <span className="font-bold">Last Name:</span>{" "}
                  {customer.lastName}{" "}
                </p>
                <p>
                  <span className="font-bold">Companion Ticket:</span>{" "}
                  {customer.companionTicket ? "true" : "false"}{" "}
                </p>
                <p>
                  <span className="font-bold">Monthly Emails:</span>{" "}
                  {customer.monthlyEmails ? "true" : "false"}{" "}
                </p>
                <p>
                  <span className="font-bold">Lounge Discount:</span>{" "}
                  {customer.loungeDiscount ? "true" : "false"}{" "}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {customer.email}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
