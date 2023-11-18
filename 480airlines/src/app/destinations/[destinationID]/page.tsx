import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function page({
  params,
}: {
  params: { destinationID: string };
}) {
  return (
    <>
      <div>destination for {params.destinationID}</div>
    </>
  );
}
