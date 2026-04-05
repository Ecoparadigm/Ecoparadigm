import { motion } from "framer-motion"

function StepSchedule({ formData, setFormData, back, onClose }: any) {

  const handleSubmit = () => {
    console.log("FINAL DATA:", formData)

    // 👉 replace later with API / WhatsApp / Supabase

    onClose()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Pick a time (optional)
      </h2>

      <p className="text-gray-500 mb-4">
        Or skip and we’ll contact you soon 👍
      </p>

      <div className="space-y-3">
        <input
          type="date"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400 transition"
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />

        <input
          type="time"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400 transition"
          onChange={(e) =>
            setFormData({ ...formData, time: e.target.value })
          }
        />
      </div>

      <div className="flex justify-between mt-5">
        <button onClick={back} className="text-gray-500">
          ← Back
        </button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          className="bg-green-500 text-white px-5 py-2 rounded-lg"
        >
          Submit 🚀
        </motion.button>
      </div>
    </div>
  )
}

export default StepSchedule