"use client";

import { Mail, Phone, MapPin, Globe, User } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-3">
      <div className="container mx-auto px-3 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info & Logo */}
          <div className="flex flex-col items-center md:items-center">
            {/* Company Logo */}
            <div className="relative w-36 h-36 mb-4">
              <Image src="/logo.png" alt="Pishukan Seafood Logo" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-center">Pishukan Seafood</h3>
            <p className="mt-2 text-gray-400 font-thin text-center">
              Bringing the finest seafood from Gwadar’s coastline to the world.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4 font-bodoni italic">Contact Information</h4>
            <div className="flex items-start gap-x-3 text-gray-400">
              <MapPin size={30} className="text-blue-500 mt-1" />
              <p>Marine Avenue (Near Fish Harbour) Pishukan, Gwadar</p>
            </div>
            <div className="flex items-start gap-x-3 text-gray-400 mt-2">
              <Phone size={20} className="text-green-500 mt-1" />
              <p>+92-3212018025 (WhatsApp)</p>
            </div>
            <div className="flex items-start gap-x-3 text-gray-400 mt-2">
              <Mail size={20} className="text-yellow-500 mt-1" />
              <p>pishukansf@gmail.com</p>
            </div>
            <div className="flex items-start gap-x-3 text-gray-400 mt-2">
              <Globe size={20} className="text-red-500 mt-1" />
              <p>www.pishukanseafood.com</p>
            </div>
          </div>

          {/* Stakeholders */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4 font-bodoni italic">Company Stakeholders</h4>
            <div className="flex items-start gap-x-3 text-gray-400">
              <User size={20} className="text-blue-400 mt-1" />
              <p>Muhammad Akbar - Proprietor</p>
            </div>
            <div className="flex items-start gap-x-3 text-gray-400 mt-2">
              <User size={20} className="text-green-400 mt-1" />
              <p>Khayyam Akbar - Director Sales & Marketing</p>
            </div>
            <div className="flex items-start gap-x-3 text-gray-400 mt-2">
              <User size={20} className="text-yellow-400 mt-1" />
              <p>Hassam Akbar - Director Finance</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 mt-10 pt-6 text-white opacity-20 font-thin">
          <p>© {new Date().getFullYear()} Pishukan Seafood. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
