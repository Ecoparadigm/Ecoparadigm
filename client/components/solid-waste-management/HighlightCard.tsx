// import Image from "next/image";

// interface Props {
//   title: string;
//   description: string;
//   image: string;
//   reverse?: boolean;
// }

// export default function HighlightCard({
//   title,
//   description,
//   image,
//   reverse = false,
// }: Props) {
//   return (
//     <div className="border-2">
//       <div
//         className={`grid grid-cols-1 md:grid-cols-2 h-[430px] ${
//           reverse ? "md:flex-row-reverse" : ""
//         }`}
//       >
//         {/* Text */}
//         <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
//           <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 mb-4">
//             {title}
//           </h3>
//           <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         {/* Image */}
//         <div className="relative w-full h-56 sm:h-64 md:h-full">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function HighlightCard({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <div className="border-2 rounded-xl overflow-hidden">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          reverse
            ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        {/* 🔹 TEXT */}
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
          <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
            {title}
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 🔹 IMAGE */}
        <div className="relative w-full h-50 sm:h-60 md:h-100">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
