"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center font-opensans"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          We Are your Trusted Seafood Export Partner
        </motion.h2>

        {/* Text Section */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-600 leading-relaxed">
            Located along the rich Arabian Sea coastline, Pishukan Seafood is a premium seafood processing and export company.
            With years of expertise in fishing, we deliver the freshest seafood straight from the ocean to global markets.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our processing facility meets international standards, ensuring HACCP, ISO 22000, and Halal-certified seafood that's
            naturally fresh and sustainably sourced.
          </p>
        </motion.div>

        {/* Google Maps Section - Placed at the Bottom */}
        <motion.div
          className="relative w-full mt-10 rounded-lg overflow-hidden shadow-lg border-1 border-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          style={{ aspectRatio: "2 / 1" }} // Ensures 2:1 ratio
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117494.80878882483!2d62.20811165!3d25.302222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a16af6ed3fcf7a0!2zMjXCsDE4JzA4LjAiTiA2MsKwMTknNDEuMiJF!5e0!3m2!1sen!2sus!4v1709981765830!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pishukan Seafood Location"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
