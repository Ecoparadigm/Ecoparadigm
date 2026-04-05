// "use client";

// import { useEffect, useState } from "react";

// type FormData = {
//   area?: string;
//   timeline?: string;
//   date?: string;
//   time?: string;
//   name?: string;
//   email?: string;
//   phone?: string;
// };

// export default function LeadModal({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState<FormData>({});

//   const steps = ["area", "contact", "timeline", "schedule"];

//   const next = () => {
//     // smart skip
//     if (
//       steps[step] === "timeline" &&
//       formData.timeline === "Just researching"
//     ) {
//       setStep(step + 2);
//     } else {
//       setStep(step + 1);
//     }
//   };

//   const back = () => setStep((s) => s - 1);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//       <div className="bg-white w-150 max-w-[95%] rounded-xl p-6 relative">
//         {/* Close */}
//         <button onClick={onClose} className="absolute top-3 right-3 text-xl">
//           ✕
//         </button>

//         {/* Progress */}
//         <div className="mb-6">
//           <div className="h-2 bg-gray-200 rounded">
//             <div
//               className="h-2 bg-green-500 rounded transition-all"
//               style={{ width: `${((step + 1) / steps.length) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* STEP RENDERING */}
//         {steps[step] === "area" && (
//           <StepArea setFormData={setFormData} formData={formData} next={next} />
//         )}

//         {steps[step] === "contact" && (
//           <StepContact
//             setFormData={setFormData}
//             formData={formData}
//             next={next}
//             back={back}
//           />
//         )}

//         {steps[step] === "timeline" && (
//           <StepTimeline
//             setFormData={setFormData}
//             formData={formData}
//             next={next}
//             back={back}
//           />
//         )}

//         {steps[step] === "schedule" && (
//           <StepSchedule
//             setFormData={setFormData}
//             formData={formData}
//             back={back}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// /* ================== STEP 1 ================== */

// function StepArea({ formData, setFormData, next }: any) {
//   const options = [
//     "Wastewater treatment",
//     "Rainwater harvesting",
//     "Solid waste management",
//     "Lake restoration",
//     "Environmental audit",
//     "ESG advisory",
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">
//         Which area do you need help with?
//       </h2>

//       <div className="grid grid-cols-2 gap-4">
//         {options.map((opt) => (
//           <button
//             key={opt}
//             onClick={() => {
//               setFormData({ ...formData, area: opt });
//               next();
//             }}
//             className="border p-4 rounded-lg hover:border-green-500 text-left"
//           >
//             {opt}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ================== STEP 2 ================== */

// function StepContact({ formData, setFormData, next, back }: any) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Enter your details</h2>

//       <input
//         placeholder="Name"
//         className="w-full border p-2 mb-2 rounded"
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />

//       <input
//         placeholder="Email"
//         className="w-full border p-2 mb-2 rounded"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />

//       <input
//         placeholder="Phone"
//         className="w-full border p-2 mb-4 rounded"
//         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//       />

//       <div className="flex justify-between">
//         <button onClick={back}>Back</button>
//         <button
//           onClick={next}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ================== STEP 3 ================== */

// function StepTimeline({ formData, setFormData, next, back }: any) {
//   const options = ["Within 1 month", "1–3 months", "Just researching"];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">When do you need a solution?</h2>

//       <div className="space-y-3">
//         {options.map((opt) => (
//           <button
//             key={opt}
//             onClick={() => {
//               setFormData({ ...formData, timeline: opt });
//               next();
//             }}
//             className="w-full border p-3 rounded hover:border-green-500 text-left"
//           >
//             {opt}
//           </button>
//         ))}
//       </div>

//       <button onClick={back} className="mt-4">
//         Back
//       </button>
//     </div>
//   );
// }

// /* ================== STEP 4 ================== */

// function StepSchedule({ formData, setFormData, back }: any) {
//   const handleSubmit = async () => {
//     console.log("FINAL DATA:", formData);

//     // 👉 Replace with real backend call
//     // await fetch("/api/lead", { method: "POST", body: JSON.stringify(formData) })

//     alert("Submitted!");
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Schedule a call (optional)</h2>

//       <input
//         type="date"
//         className="w-full border p-2 mb-2 rounded"
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//       />

//       <input
//         type="time"
//         className="w-full border p-2 mb-4 rounded"
//         onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//       />

//       <div className="flex justify-between">
//         <button onClick={back}>Back</button>
//         <button
//           onClick={handleSubmit}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import StepArea from './StepArea'
import StepTimeline from "./StepTimeLine"
import StepContact from "./StepContact"
import StepSchedule from './StepSchedule'

type FormData = {
  area?: string
  timeline?: string
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
}

export default function LeadModal({ isOpen, onClose }: any) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({})

  const steps = ["area", "contact", "timeline", "schedule"]

  const next = () => {
    if (steps[step] === "timeline" && formData.timeline === "Just researching") {
      setStep(step + 2)
    } else {
      setStep(step + 1)
    }
  }

  const back = () => setStep((s) => s - 1)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white w-200 max-w-[95%] rounded-xl p-14 relative"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded">
            <motion.div
              className="h-2 bg-green-500 rounded"
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {steps[step] === "area" && (
              <StepArea formData={formData} setFormData={setFormData} next={next} />
            )}

            {steps[step] === "contact" && (
              <StepContact formData={formData} setFormData={setFormData} next={next} back={back} />
            )}

            {steps[step] === "timeline" && (
              <StepTimeline formData={formData} setFormData={setFormData} next={next} back={back} />
            )}

            {steps[step] === "schedule" && (
              <StepSchedule formData={formData} setFormData={setFormData} back={back} onClose={onClose} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}