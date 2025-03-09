"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/15 backdrop-blur-md ">
      <div className="container mx-auto px-3 md:px-12 lg:px-20 flex justify-between items-center py-2">
        {/* Logo & Company Name */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="Pishukan Seafood Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-medium text-white font-opensans">Pishukan Seafood</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-3 text-white ">
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#products" className="hover:text-blue-600 transition">Products</Link>
          {/* <Link href="#quality" className="hover:text-blue-600 transition">Quality</Link>
          <Link href="#fishing" className="hover:text-blue-600 transition">Sustainability</Link> */}
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden  text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  bg-white/5 backdrop-blur-md p-4 space-y-4">
          <Link href="#about" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#products" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Products</Link>
          {/* <Link href="#quality" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Quality</Link>
          <Link href="#fishing" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Sustainability</Link> */}
          <Link href="#contact" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
