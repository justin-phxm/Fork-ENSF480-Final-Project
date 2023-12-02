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
  signupLoungeDiscountEmail,
} from "@/app/api/email/membershipEmail";
export default function MembershipRegistrationControl() {
  const { data: session, status } = useSession();
  const signupMembership = async (email: string) => {
    const res = await fetch("/api/membership", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const data = await res.json();
    getMembershipDetails();
    return data;
  };
  const handleSignupCompanionTicket = async (email: string) => {
    const uri = `/api/membershipPerks?companionTicket=true`;
    console.log(uri);
    const res = await fetch(uri, {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const data = await res.json();
    getMembershipDetails();
    return data;
  };

  const handleSignupMonthlyEmail = async (email: string) => {
    const uri = `/api/membershipPerks?monthlyEmails=true`;

    const res = await fetch(uri, {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const data = await res.json();
    getMembershipDetails();
    return data;
  };

  const handleSignupLoungeDiscount = async (email: string) => {
    const uri = `/api/membershipPerks?loungeDiscount=true`;

    const res = await fetch(uri, {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const data = await res.json();
    getMembershipDetails();
    return data;
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (session && session.user?.email && session.user?.name) {
      const res = await signupMembership(session.user.email);
      console.log(res);
      toast.promise(sendEmail(session.user.email, session.user.name), {
        pending: "Signing you up for membership...",
        success: `You have successfully signed up for membership!`,
        error: "Error signing you up for membership",
      });
      // try {
      //     toast.promise(
      //       signupMonthlyEmail(session.user.email, session.user?.name),
      //       {
      //         pending: "Signing you up for monthly newsletters...",
      //         success: `You have successfully signed up for monthly newsletters!`,
      //         error: "Error signing you up for monthly newsletters",
      //       }
      //     );
      //     toast.promise(
      //       signupCompanionTicketEmail(session.user.email, session.user?.name),
      //       {
      //         pending: "Signing you up for companion ticket membership...",
      //         success: `You have successfully signed up for the promotional companion ticket!`,
      //         error:
      //           "Error signing you up for the promotional companion ticket",
      //       }
      //     );
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
      console.log("Please make sure you are logged in");
    }
  };
  const getMembershipDetails = async () => {
    const res = await fetch(`/api/membership?email=${session?.user?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.text();
    console.log(data);
    setMembershipDetails(data);
  };
  useEffect(() => {
    if (session) {
      getMembershipDetails();
    }
  }, [session]);

  const handleOnSubmitCT = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (session && session.user?.email && session.user?.name) {
      const res = await handleSignupCompanionTicket(session.user.email);
      console.log(res);
      toast.promise(
        signupCompanionTicketEmail(session.user.email, session.user?.name),
        {
          pending: "Signing you up for the promotional companion ticket...",
          success: `You have successfully signed up for the promotional companion ticket!`,
          error: "Error signing you up for the promotional companion ticket",
        }
      );
    } else {
      console.log("Please make sure you are logged in");
    }
  };
  // Monthly Emails
  const handleOnSubmitPN = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (session && session.user?.email && session.user?.name) {
      const res = await handleSignupMonthlyEmail(session.user.email);
      console.log(res);
      toast.promise(
        signupMonthlyEmail(session.user.email, session.user?.name),
        {
          pending: "Signing you up for the monthly email newsletter...",
          success: `You have successfully signed up for the monthly email newsletter!`,
          error: "Error signing you up for the monthly email newsletter",
        }
      );
    } else {
      console.log("Please make sure you are logged in");
    }
  };
  // Lounge Discounts
  const handleOnSubmitLD = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (session && session.user?.email && session.user?.name) {
      const res = await handleSignupLoungeDiscount(session.user.email);
      console.log(res);
      toast.promise(
        signupLoungeDiscountEmail(session.user.email, session.user?.name),
        {
          pending: "Signing you up for the promotional lounge discount...",
          success: `You have successfully signed up for the promotional lounge discount!`,
          error: "Error signing you up for the promotional lounge discount",
        }
      );
    } else {
      console.log("Please make sure you are logged in");
    }
  };
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
            {/* Sign up button */}
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
            {!membershipDetails.includes("Basic Membership") && (
              <button
                type="submit"
                onClick={handleOnSubmit}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            )}
          </div>
        </form>
        <div className="w-full max-w-md mx-auto">
          <div className="block w-full p-4 ps-10 border rounded-lg border-gray-300 bg-white ">
            <h1 className=" font-bold">Your Current Membership:</h1>
            <p className="text-sm italic">{membershipDetails}</p>
            <div className="">
              {membershipDetails.includes("Basic Membership") && (
                <>
                  <div className="py-4 font-bold">
                    What you are missing out on:
                  </div>
                  <ul className="flex flex-col gap-2">
                    {/* Free Annual Companion Ticket */}
                    {!membershipDetails.includes("Companion Ticket") && (
                      <li className="flex flex-row items-center justify-between gap-4">
                        <p className="text-sm italic">
                          Free Companion Ticket Annually
                        </p>
                        <button
                          onClick={handleOnSubmitCT}
                          className="text-white p-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Sign up
                        </button>
                      </li>
                    )}
                    {/* Monthly Promotion Newsletter */}
                    {!membershipDetails.includes(
                      "Monthly Email Subscription"
                    ) && (
                      <li className="flex flex-row items-center justify-between gap-4">
                        <p className="text-sm italic">
                          Monthly Promotion Newsletter
                        </p>

                        <button
                          onClick={handleOnSubmitPN}
                          className="text-white p-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Sign up
                        </button>
                      </li>
                    )}
                    {/* Lounge Discount */}
                    {!membershipDetails.includes("Airport Lounge Discount") && (
                      <li className="flex flex-row items-center justify-between gap-4">
                        <p className="text-sm italic">Lounge Discount</p>

                        <button
                          onClick={handleOnSubmitLD}
                          className="text-white p-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Sign up
                        </button>
                      </li>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}
