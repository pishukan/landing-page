"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, MapPin, ShieldCheck, PackageCheck } from "lucide-react";

const ResponsibleFishing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Full-Width Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800 text-center w-full mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sustainable Fishing & Quality Commitment
        </motion.h2>

        <p className="mt-4 text-center text-gray-600 w-6/6 mx-auto leading-relaxed font-light mb-6">
              At Pishukan Seafood, we source directly from the Arabian Sea along Gwadar’s pristine coastline, ensuring HACCP-compliant processing for maximum freshness. Committed to sustainability, we follow responsible fishing methods to protect marine biodiversity and preserve ocean life for future generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="text-left md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            {/* Key Highlights */}
            <div className="mt-0 space-y-6">
              <div className="flex items-center">
                <MapPin className="text-blue-600" size={28} />
                <p className="ml-3 text-sm md:text-lg font-light text-gray-700">
                  Catch Origin: Directly from the Arabian Sea along Gwadar’s coastline.
                </p>
              </div>

              <div className="flex items-center">
                <ShieldCheck className="text-green-600" size={28} />
                <p className="ml-3 text-sm md:text-lg font-light text-gray-700">
                  Handling & Processing: HACCP-certified facilities ensure food safety.
                </p>
              </div>

              <div className="flex items-center">
                <PackageCheck className="text-orange-600" size={28} />
                <p className="ml-3 text-sm md:text-lg font-light text-gray-700">
                  Custom Packing: Block Frozen, IQF, and Blast Frozen available per buyer needs.
                </p>
              </div>

              <div className="flex items-center">
                <Leaf className="text-purple-600" size={28} />
                <p className="ml-3 text-sm md:text-lg font-light text-gray-700">
                  Sustainability: Eco-friendly fishing methods protect marine biodiversity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/fishing.jpeg" // Replace with your image path
              alt="Responsible Fishing"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleFishing;
