"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

const Contact = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section  id="about" className="py-16 bg-blue-600  text-white rounded-tl-4xl rounded-tr-4xl">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <motion.div
        className="text-left self-start" // Ensures top alignment on mobile
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center font-bodoni italic">Get in Touch</h2>
        <p className="mt-4 text-lg font-thin text-center">
          Have any questions or want to place an order? Contact us anytime!
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <MapPin className="text-white" size={32} />
            <p className="ml-3 text-lg">Marine Avenue (Near Fish Harbour), Pishukan, Gwadar</p>
          </div>
          <div className="flex items-center">
            <Phone className="text-white" size={32} />
            <p className="ml-3 text-lg">+92-3212018025 (WhatsApp)</p>
          </div>
          <div className="flex items-center">
            <Mail className="text-white" size={32} />
            <p className="ml-3 text-lg">pishukansf@gmail.com</p>
          </div>
          <div className="flex items-center">
            <MessageCircle className="text-white" size={32} />
            <p className="ml-3 text-lg">Live Chat Available</p>
          </div>
        </div>
      </motion.div>

          {/* Right - Contact Form */}
          <motion.div
  className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-white"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58258.00208997143!2d62.17140621083984!3d25.15820083612321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb443e111111111%3A0x123456789abcdef!2sPishukan%2C%20Gwadar%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Pishukan Seafood Location"
    className="rounded-lg"
/>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
