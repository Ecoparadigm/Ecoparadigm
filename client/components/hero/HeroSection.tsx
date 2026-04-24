"use client"

import HeroText from "./HeroText"
import ServiceGrid from "./ServiceGrid"

export default function HeroSection() {
  return (
    <section className="px-6 md:px-16 py-10 grid md:grid-cols-2 gap-10 items-start">

      <HeroText />
      <ServiceGrid />

    </section>
  )
}