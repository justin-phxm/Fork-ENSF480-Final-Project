"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};
const AWS_SES = new AWS.SES(SES_CONFIG);

// import { sendEmail } from "@/app/api/email/membershipEmail";
export default function MembershipRegistrationControl() {
  const { data: session, status } = useSession();
  const sendEmail = async (email: string, name: string) => {
    let params = {
      Source: "480airlines@gmail.com",
      Destination: {
        ToAddresses: [email],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<html><body><h1>Hi ${name},</h1><p>Thank you for joining 480Airlines. We are excited to have you as a member. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at
                      <a href="mailto:480airlines@gmail.com">
                      480airlines@gmail.com
                      </a>
                      </p></body></html>`,
          },
          Text: {
            Charset: "UTF-8",
            Data: `Hi ${name}, Thank you for joining 480Airlines. We are excited to have you as a member. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at 480airlines@gmail.com`,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Welcome to 480Airlines, ${name}!`,
        },
      },
    };
    try {
      const res = await AWS_SES.sendEmail(params).promise();
      console.log("Email sent successfully", res);
      return res;
    } catch (error) {
      console.log("Error sending email", error);
      return error;
    }
  };
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
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <form className="w-full max-w-md mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Email sign-up
        </label>
        <div className="relative">
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
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}
