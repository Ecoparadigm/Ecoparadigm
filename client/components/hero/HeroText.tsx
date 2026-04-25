"use client";

export default function HeroText() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
        <span className="text-blue-600">We solve your</span>{" "}
        <span className="text-green-500">environmental</span>{" "}
        <span className="text-blue-600">challenges</span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
        Full Spectrum Environmental Solutions
      </p>

      <button className="w-full sm:w-fit bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base hover:scale-105 transition">
        Talk to Our Expert
      </button>
    </div>
  );
}
