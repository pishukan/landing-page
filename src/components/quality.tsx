"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, FileText, CheckCircle, Award, Building,  ClipboardCheck, Users } from "lucide-react";  

const Quality = () => {
  const certifications = [
    {
      id: 1,
      title: "Marine Fisheries Department Export License",
      icon: <Users size={40} className="text-blue-600" />, // More relevant than Globe
    },
    {
      id: 2,
      title: "HACCP Certified Facility",
      icon: <ShieldCheck size={40} className="text-green-600" />, // Keeps security-based icon
    },
    {
      id: 3,
      title: "ISO 22000 - Food Safety Management System",
      icon: <ClipboardCheck size={40} className="text-pink-400" />, // Represents checklist & compliance
    },
    {
      id: 4,
      title: "Halal Certification",
      icon: <Award size={40} className="text-yellow-600" />, // Represents certification/recognition
    },
    {
      id: 5,
      title: "Certificate of Origin (Gwadar Chamber of Commerce)",
      icon: <FileText size={40} className="text-cyan-500" />, // Represents official documentation
    },
    {
      id: 6,
      title: "Health Certificate (Issued per shipment by Marine Fisheries Department)",
      icon: <ClipboardCheck size={40} className="text-blue-500" />, // Represents a verified checklist
    },
    {
      id: 7,
      title: "Factory Registration/Processing Plant License",
      icon: <Building size={40} className="text-red-400" />, // Represents factory or facility
    },
    {
      id: 8,
      title: "Membership - Karachi Chamber of Commerce & Industry",
      icon: <Users size={40} className="text-yellow-700" />, // Represents business memberships
    },
    {
      id: 9,
      title: "Membership - Pakistan Seafood Exporters Association (PSEA)",
      icon: <Users size={40} className="text-purple-500" />, // Represents community/membership
    },
  ];


  return (
    <section className="py-16  font-opensans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Current Certifications & Licenses
        </h2>

        {/* Quality & Sustainability */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 font-light text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            When you source from Pishukan Seafood, you get more than seafood  
            — you get <span className="font-semibold"> certified quality </span>, <span className="font-semibold">traceability</span>, and a <span className="font-semibold"> commitment to global food safety.</span>
            </p>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
            <motion.div
            key={cert.id}
            className="flex items-center bg-gradient-to-br from-[#023a45cb] via-[#000b0de6] to-[#0c2c35] shadow-md rounded-lg p-6 text-gray-800 border border-gray-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: cert.id * 0.1 }}
          >
            {/* Ensure the icon has a fixed size */}
            <div className="flex-shrink-0 w-12 h-12 text-white">
              {cert.icon}
            </div>
          
            {/* Text with proper spacing */}
            <p className="ml-4 text-lg text-white font-bodoni italic font-semibold">{cert.title}</p>
          </motion.div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Quality;
