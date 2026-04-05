import { motion } from "framer-motion"
import { useState } from "react"

function StepContact({ formData, setFormData, next, back }: any) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all fields")
      return
    }
    setError("")
    next()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        📞 Enter your details
      </h2>

      <div className="space-y-3">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="👤 Name"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="📧 Email"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="📱 Phone"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
      </div>

      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}

      <div className="flex justify-between mt-6">
        <button onClick={back}>← Back</button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="bg-green-500 text-white px-5 py-2 rounded"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  )
}

export default StepContact;