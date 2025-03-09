"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Where does Pishukan Seafood source its seafood from?",
    answer:
      "We source our seafood directly from our own fishing vessels and trusted local fishermen along the Arabian Sea near Gwadar, Pakistan. This ensures maximum freshness, quality, and sustainability.",
  },
  {
    question: "What certifications does Pishukan Seafood have?",
    answer:
      "Our facility is HACCP, ISO 22000, and Halal certified, ensuring that every product meets global food safety, hygiene, and traceability standards.",
  },
  {
    question: "What types of seafood do you offer?",
    answer:
      "We provide a wide range of seafood, including fishes, crabs, lobsters, shrimps, and shellfish, all processed and packed to meet international export standards.",
  },
  {
    question: "How do you ensure the quality of seafood?",
    answer:
      "Our state-of-the-art processing facility follows strict quality control measures, ensuring hygienic handling, proper freezing techniques, and traceability for every shipment.",
  },
  {
    question: "What packaging options are available for seafood exports?",
    answer:
      "We offer customized packaging based on buyer requirements, including Block Frozen, IQF (Individually Quick Frozen), and Blast Frozen options to preserve freshness and quality.",
  },
  {
    question: "Do you export seafood worldwide?",
    answer:
      "Yes! Pishukan Seafood exports to global markets, ensuring compliance with international food safety and trade regulations.",
  },
  {
    question: "Why should I choose Pishukan Seafood over other suppliers?",
    answer:
      "We offer direct-from-source freshness, a fully equipped and certified processing facility, expertise across fishing, processing, and export, and a wide product range with strict quality assurance.",
  },
  {
    question: "How do you ensure sustainability in fishing?",
    answer:
      "We follow responsible fishing practices to protect marine biodiversity and preserve ocean life, ensuring long-term sustainability.",
  },
  {
    question: "How can I place an order for bulk seafood export?",
    answer:
      "You can contact us through our website or email, and our export team will guide you through pricing, logistics, and shipment details.",
  },
  {
    question: "What is the lead time for seafood exports?",
    answer:
      "The lead time depends on the order quantity, product type, and destination, but we ensure fast processing and timely shipments to meet customer demands.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 font-opensans mb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6 font-bodoni italic">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-gray-600 w-6/6 mx-auto leading-relaxed font-light mb-6">
        Find answers to common questions about our seafood sourcing, certifications, quality standards, and export process.
        </p>

        {/* FAQ Grid - 1 Column on Mobile, 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white shadow-md rounded-lg px-5 py-3 border-1 border-gray-300"
            >
              <button
                className="flex justify-between items-center w-full text-left "
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-gray-500" size={24} />
                ) : (
                  <Plus className="text-gray-500" size={24} />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
