"use client";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Rulessection from "./components/Rulessection";
import Aboutsection from "./components/Aboutsection";
import Pricesection from "./components/Pricesection";
import Contactsection from "./components/Contactsection";
import Facilitiessection from "./components/Facilitiessection";
import Locationsection from "./components/Locationsection";
import Footersection from "./components/Footersection";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["200", "400", "600", "800"],
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${poppins.className}`}>
      <Navbar />
      <div className="w-full">
          <Herosection />
          <Aboutsection />
          {/* <Rulessection />
          <Pricesection />
          <Contactsection />
          <Facilitiessection />
          <Locationsection /> */}
      </div>
      <div>
        {/* <Footersection /> */}
      </div>
    </main>
  );
}
