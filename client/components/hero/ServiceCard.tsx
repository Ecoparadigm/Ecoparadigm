import { motion } from "framer-motion"

export default function ServiceCard({ service }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="h-48 w-full">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-700 text-white p-4 flex justify-between items-center">

        <div>
          <h3 className="font-semibold">{service.title}</h3>
          {service.desc && (
            <p className="text-sm opacity-80">{service.desc}</p>
          )}
        </div>

        {/* Arrow */}
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
          →
        </div>

      </div>
    </motion.div>
  )
}