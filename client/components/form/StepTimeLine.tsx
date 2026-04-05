import { motion } from "framer-motion"

function StepTimeline({ formData, setFormData, next, back }: any) {
  const options = [
    { label: "Within 1 month", emoji: "⚡" },
    { label: "1–3 months", emoji: "📅" },
    { label: "Just researching", emoji: "🔍" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        ⏳ When do you need a solution?
      </h2>

      <div className="space-y-3">
        {options.map((opt) => (
          <motion.button
            key={opt.label}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setFormData({ ...formData, timeline: opt.label })
              next()
            }}
            className="w-full border p-4 rounded flex items-center gap-3 text-left hover:border-green-500"
          >
            <span className="text-xl">{opt.emoji}</span>
            {opt.label}
          </motion.button>
        ))}
      </div>

      <button onClick={back} className="mt-4">
        ← Back
      </button>
    </div>
  )
}

export default StepTimeline;