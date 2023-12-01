import React from "react";
import MembershipFeatureCards from "./components/MembershipFeatureCards";
import MembershipHero from "./components/MembershipHero";
import MembershipFeatureCardLarge from "./components/MembershipFeatureCardLarge";
import LuggageImage from "../../../public/luggageImage";

export default function page() {
  const memberBenefits = [
    {
      title: "Airport Lounge Access at a Discounted Price",
      body: "Enjoy the luxury of airport lounges at a special discounted rate! As a registered member, you have access to premium airport lounges, making your travel experience even more comfortable.",
    },
    {
      title: "Free Companion Ticket Annually",
      body: "As a token of our appreciation, registered members receive a complimentary companion ticket every year! Travel with a friend or loved one and create lasting memories together.",
    },
    {
      title: "Monthly Promotion Newsletter",
      body: " Be the first to know about our monthly promotions and special offers. Our registered members receive exclusive access to our monthly newsletter, ensuring you never miss out on a great deal.",
    },
    {
      title: "Personalized Travel Experience",
      body: "Unlock a personalized travel experience tailored just for you. Our registered members enjoy perks that go beyond the ordinary, ensuring your journeys are extraordinary.",
    },
    {
      title: "Special Members-Only Events:",
      body: "Join our exclusive members-only events and gatherings. Connect with fellow travelers, share stories, and be part of a community that shares your passion for exploration.",
    },
    {
      title: "Dedicated Customer Support",
      body: "Enjoy priority access to our dedicated customer support. Our registered members receive enhanced assistance, ensuring a seamless and stress-free travel experience.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <MembershipHero></MembershipHero>

      {/* Benefits */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          {/* Large Card */}
          <MembershipFeatureCardLarge></MembershipFeatureCardLarge>
          {/* Smaller cards */}
          <ul className="grid md:grid-cols-2 gap-8">
            {memberBenefits.map((benefit, index) => (
              <MembershipFeatureCards
                benefit={benefit}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <section className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Pack Your Bags!
            </h2>
            {/* Image */}
            <LuggageImage></LuggageImage>
          </section>
        </div>
      </section>
    </div>
  );
}
