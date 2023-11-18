import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
export default function Hero() {
  return (
    <>
      <section className="bg-cover bg-center bg-[url(/Hero.png)] dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 items-center flex flex-col mx-auto">
          <h1 className="max-w-2xl animate-pulse  text-8xl text-center py-2 mb-4 font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            {"It's more than just a trip"}
          </h1>
          <div className="py-10">
            <Searchbar></Searchbar>
          </div>
        </div>
      </section>
    </>
  );
}
