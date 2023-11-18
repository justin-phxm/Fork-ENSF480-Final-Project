import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        <DestinationCard></DestinationCard>
        <DestinationCard></DestinationCard>
        <DestinationCard></DestinationCard>
      </div>

      {/* Explore more */}
      <Link className="flex justify-center py-4" href="/destinations">
        <div className="w-48 h-12 flex justify-center bg-indigo-500 rounded items-center">
          <div className="text-neutral-50 text-lg">Explore more stays</div>
        </div>
      </Link>

      <Footer />
    </>
  );
}
