import { motion, AnimatePresence } from "framer-motion"

function StepArea({ formData, setFormData, next }: any) {
  const options = [
    { label: "Wastewater treatment STP . ETP . ZLD", emoji: "💧" },
    { label: "Rainwater harvesting Collection & recharge", emoji: "🌧️" },
    { label: "Solid waste management SWM systems & design", emoji: "🗑️" },
    { label: "Lake restoration & Rejuvenation & ecology", emoji: "🌊" },
    { label: "Environmental audit Compliance & reporting", emoji: "🌿" },
    { label: "ESG advisory Strategy & disclosure", emoji: "🌱" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Which area do you need help with?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => (
          <motion.button
            whileHover={{ scale: 1.05 ,borderColor:'#000000',cursor:"pointer"}}
            whileTap={{ scale: 0.97 }}
            key={opt.label}
            onClick={() => {
              setFormData({ ...formData, area: opt.label })
              next()
            }}
            className="border border-gray-400 py-4 px-10 rounded-lg text-left flex gap-3 items-center"
          >
            <span className="text-3xl">{opt.emoji}</span>
            {opt.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
export default StepArea