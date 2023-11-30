"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
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
