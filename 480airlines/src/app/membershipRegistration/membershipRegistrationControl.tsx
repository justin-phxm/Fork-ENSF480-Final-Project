"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
import {
  sendEmail,
  signupMonthlyEmail,
  signupCompanionTicketEmail,
} from "@/app/api/email/membershipEmail";
export default function MembershipRegistrationControl() {
  const { data: session, status } = useSession();
  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (session) {
      console.log({ email: session.user?.email, name: session.user?.name });

      try {
        if (session.user?.email && session.user?.name) {
          toast.promise(sendEmail(session.user.email, session.user?.name), {
            pending: "Signing you up for membership...",
            success: `You have successfully signed up for membership!`,
            error: "Error signing you up for membership",
          });
          toast.promise(
            signupMonthlyEmail(session.user.email, session.user?.name),
            {
              pending: "Signing you up for monthly newsletters...",
              success: `You have successfully signed up for monthly newsletters!`,
              error: "Error signing you up for monthly newsletters",
            }
          );
          toast.promise(
            signupCompanionTicketEmail(session.user.email, session.user?.name),
            {
              pending: "Signing you up for companion ticket membership...",
              success: `You have successfully signed up for the promotional companion ticket!`,
              error:
                "Error signing you up for the promotional companion ticket",
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getMembershipDetails = async () => {
    const res = await fetch(`/api/customer?email=${session?.user?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    if (session) {
      getMembershipDetails();
    }
  }, [session]);

  const [membershipDetails, setMembershipDetails] = useState("Loading...");
  return (
    <>
      <div className="flex flex-col gap-4">
        <form className="w-full max-w-md mx-auto">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Email sign-up
          </label>
          <div className="relative">
            {/* Image */}
            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={
                session
                  ? session.user?.email || "Please make sure you are logged in"
                  : `Please make sure you are logged in`
              }
              disabled
            />
            <button
              type="submit"
              onClick={handleOnSubmit}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="w-full max-w-md mx-auto">
          <div className="block w-full p-4 ps-10 border rounded-lg border-gray-300 bg-white ">
            <h1 className=" font-bold">Your Current Membership:</h1>
            <p className="text-sm italic">{membershipDetails}</p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}
