"use client";
import React, { useEffect, useState } from "react";
import LeadModal from "@/components/form/LeadModal";

const page = () => {
  const [open, setOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    if (hasSeen) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setOpen(true);
        setHasSeen(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasSeen]);
  return (
    <div className="bg-white h-screen">
      <main>
        <button
          onClick={() => setOpen(true)}
          className="m-10 bg-green-500 text-white px-4 py-2"
        >
          Open Form
        </button>

        <LeadModal isOpen={open} onClose={() => setOpen(false)} />
      </main>
    </div>
  );
};

export default page;
