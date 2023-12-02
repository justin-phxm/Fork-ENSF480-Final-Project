"use client";
import React, { useEffect, useState } from "react";
import BrowseFlights from "../admin/components/flightComponents/BrowseFlights";
import BrowsePassengers from "./components/BrowsePassengers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import EmployeeInterface from "../interfaces/employee";
export default function AirlineEmployeeControl() {
  const { data: session } = useSession();
  const [authorizedUsers, setAuthorizedUsers] = useState<EmployeeInterface[]>(
    []
  );
  const [authorized, setAuthorized] = React.useState<boolean>(false);

  const getAuthorization = async () => {
    const res = await fetch("/api/employee", {
      method: "GET",
    });
    const data = await res.json();
    setAuthorizedUsers(data);
  };
  useEffect(() => {
    getAuthorization();
  }, []);
  useEffect(() => {
    const myEmail = session?.user?.email;
    const isEmailInArray = authorizedUsers.some(
      (employee) => employee.email === myEmail
    );
    setAuthorized(isEmailInArray);
  }, [authorizedUsers, session?.user?.email]);
  return authorized ? (
    <div>
      <h1 className="text-lg font-bold uppercase">Airline Employee Control</h1>
      <BrowseFlights></BrowseFlights>
      <BrowsePassengers></BrowsePassengers>
      <ToastContainer position="bottom-right"></ToastContainer>
    </div>
  ) : (
    <div className="">Unauthorized</div>
  );
}
