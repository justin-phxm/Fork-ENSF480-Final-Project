import React from "react";

export default function SeatOptions() {
  const OrdinarySeatInfo = {
    title: "Ordinary",
    description:
      "Save money with our most affordable option. You'll still get a comfortable seat, but without the extra perks of our other options",
    benefits: [
      "Built-in entertainment system",
      "Complimentary snacks and drinks",
      "One free carry-on and personal item",
    ],
  };

  const EconomySeatInfo = {
    title: "Economy",
    description:
      "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service",
    benefits: [
      "Built-in entertainment system with enhanced video and audio",
      "Access to exclusive food and drink menu",
      "Two free carry-on and personal item",
    ],
  };
  const BusinessSeatInfo = {
    title: "Business",
    description:
      "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service",
    benefits: [
      "Extended leg room",
      "First two checked bags free",
      "Priority boarding",
      "Personalized service",
      "Enhanced food and drink service",
      "Seats that recline 40% more than economy",
    ],
  };

  return (
    <>
      <div className=" max-w-7xl self-stretch grow shrink basis-0 px-4 py-2 backdrop-blur-xl justify-center items-start gap-1 inline-flex">
        {/* Ordinary Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <div className="h-60 flex-col gap-4 flex">
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {OrdinarySeatInfo.title}
              </div>
              {/* <div className="px-1.5 py-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none">
                  Selected
                </div>
              </div> */}
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {OrdinarySeatInfo.description}
            </div>
            <div className="w-8 h-1 opacity-50 bg-emerald-300 p-1" />
            <ul className="">
              {OrdinarySeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-emerald-300 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Economy Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <div className="h-60 flex-col gap-4 flex">
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {EconomySeatInfo.title}
              </div>
              <div className="px-1.5 py-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none whitespace-nowrap">
                  Best Value
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {EconomySeatInfo.description}
            </div>
            <div className="w-8 h-1 p-1 opacity-50 bg-emerald-300" />
            <ul className="">
              {EconomySeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-emerald-300 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Business Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <div className="h-60 flex-col gap-4 flex">
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {BusinessSeatInfo.title}
              </div>
              <div className="px-1.5 py-0.5 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none">
                  Premium
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {BusinessSeatInfo.description}
            </div>
            <div className="w-8 h-1 p-1 opacity-50 bg-yellow-500" />
            <ul className="">
              {BusinessSeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
