export default function HeroText() {
  return (
    <div className="max-w-xl">

      <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
        <span className="text-blue-600">We solve your</span>{" "}
        <span className="text-green-500">environmental</span>{" "}
        <span className="text-blue-600">challenges</span>
      </h1>

      <p className="text-gray-600 mb-6">
        Full Spectrum Environmental Solutions
      </p>

      <button className="bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition">
        Talk to Our Expert
      </button>

    </div>
  )
}