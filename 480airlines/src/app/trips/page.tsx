import React from "react";
import UserBlock from "./components/userBlock";
import Weather from "./components/Weather";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Weather></Weather>
      <div className="">
        <UserBlock />
      </div>
      page
      <Link href="/">MyLink</Link>
    </div>
  );
}
