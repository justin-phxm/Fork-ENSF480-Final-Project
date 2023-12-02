"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFlight from "./components/flightComponents/AddFlight";
import AddAircraft from "./components/aircraftComponents/AddAircraft";
import BrowseFlights from "./components/flightComponents/BrowseFlights";
import BrowseAircrafts from "./components/aircraftComponents/BrowseAircrafts";
import RemoveAircraft from "./components/aircraftComponents/RemoveAircraft";
import AddCrew from "./components/crewComponents/AddCrew";
import BrowseCrew from "./components/crewComponents/BrowseCrew";
import RemoveCrew from "./components/crewComponents/RemoveCrew";
import AddDestination from "./components/AddDestination";
import RemoveDestination from "./components/RemoveDestination";
import ViewRegistered from "./components/ViewRegistered";
import RemoveFlight from "./components/flightComponents/RemoveFlight";
import ModifyFlight from "./components/flightComponents/ModifyFlight";
import Searchbar from "../components/Searchbar";
import EmployeeInterface from "../interfaces/employee";
import { useSession } from "next-auth/react";
export default function AdminControl() {
  const { data: session } = useSession();

  const getAuthorization = async () => {
    const res = await fetch("/api/employee", {
      method: "GET",
    });
    const data = await res.json();
    // console.log(data);
    setAuthorizedUsers(data);
    // console.log(authorizedUsers);
  };

  const [authorizedUsers, setAuthorizedUsers] = useState<EmployeeInterface[]>(
    []
  );

  useEffect(() => {
    getAuthorization();
  }, []);
  useEffect(() => {
    console.log(authorizedUsers);
    const myEmail = session?.user?.email;
    // const myEmail = "justin.phamx4@gmail.com";
    const isEmailInArray = authorizedUsers.some(
      (employee) => employee.email === myEmail
    );
    // console.log(authorizedUsers);
    console.log(isEmailInArray);
    setAuthorized(isEmailInArray);
  }, [authorizedUsers]);

  const [authorized, setAuthorized] = React.useState<boolean>(false);
  return authorized ? (
    <>
      <div>
        <h1 data-aos="fade-right" className="text-lg font-bold uppercase">
          Admin Page
        </h1>
        {/* <BrowseFlights></BrowseFlights> */}
        <div className="border border-slate-400 p-2 rounded bg-white">
          <div data-aos="fade-right">
            <h1 className="text-lg font-bold">Browse Flights</h1>
            <Searchbar></Searchbar>
          </div>
        </div>
        <AddFlight></AddFlight>
        <ModifyFlight></ModifyFlight>
        <AddAircraft></AddAircraft>
        <RemoveAircraft></RemoveAircraft>
        <RemoveFlight></RemoveFlight>
        <RemoveCrew></RemoveCrew>
        <AddCrew></AddCrew>
        <ViewRegistered></ViewRegistered>
        <BrowseCrew></BrowseCrew>
        <BrowseAircrafts></BrowseAircrafts>
        <ToastContainer position="bottom-right"></ToastContainer>
      </div>
    </>
  ) : (
    <div className="">Unauthorized</div>
  );
  // return (
  // <>
  //   <div>
  //     <h1 data-aos="fade-right" className="text-lg font-bold uppercase">
  //       Admin Page
  //     </h1>
  //     {/* <BrowseFlights></BrowseFlights> */}
  //     <div className="border border-slate-400 p-2 rounded bg-white">
  //       <div data-aos="fade-right">
  //         <h1 className="text-lg font-bold">Browse Flights</h1>
  //         <Searchbar></Searchbar>
  //       </div>
  //     </div>
  //     <AddFlight></AddFlight>
  //     <ModifyFlight></ModifyFlight>
  //     <AddAircraft></AddAircraft>
  //     <RemoveAircraft></RemoveAircraft>
  //     <RemoveFlight></RemoveFlight>
  //     <RemoveCrew></RemoveCrew>
  //     <AddCrew></AddCrew>
  //     <ViewRegistered></ViewRegistered>
  //     <BrowseCrew></BrowseCrew>
  //     <BrowseAircrafts></BrowseAircrafts>
  //     <ToastContainer position="bottom-right"></ToastContainer>
  //   </div>
  // </>
  // );
}
