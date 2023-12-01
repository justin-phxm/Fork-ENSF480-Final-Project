"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import AccountInterface from "../interfaces/account";
const SigninButton = () => {
  const { data: session } = useSession();
  const createAccount = async (userInfo: AccountInterface) => {
    const res = await fetch("/api/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    // const data = await res.json();
    // console.log(data);
  };
  if (session?.user?.name && session.user.email) {
    let [firstName, lastName] = ["", ""];
    [firstName, lastName] = session.user.name.split(/\s+/, 2);
    const userInfo: AccountInterface = {
      email: session.user.email,
      firstName: firstName,
      lastName: lastName,
      onflight: 0,
    };
    createAccount(userInfo);

    return (
      <div className="flex gap-4 ml-auto">
        <Link href="/account" className="text-sky-600">
          {session.user.name}
        </Link>
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="profile picture"
            width={25}
            height={25}
            className="rounded-full"
          />
        )}
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
