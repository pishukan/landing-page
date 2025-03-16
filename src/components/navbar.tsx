"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenProductDialog?: () => void;
}

const Navbar = ({ onOpenProductDialog }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // First close mobile menu if open
    setIsOpen(false);
    
    // Scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
      
      // Make sure we're actually receiving the function and it's callable
      console.log("Function received:", !!onOpenProductDialog);
      
      // Delay opening the dialog to allow scrolling to complete
      if (onOpenProductDialog) {
        setTimeout(() => {
          console.log("Opening product dialog now");
          onOpenProductDialog();
        }, 800);
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/15 backdrop-blur-md">
      <div className="container mx-auto px-3 md:px-12 lg:px-20 flex justify-between items-center py-2">
        {/* Logo & Company Name */}
        <a href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="Pishukan Seafood Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-medium text-white font-opensans">Pishukan Seafood</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-3 text-white">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          {/* Very explicitly handle click */}
          <button 
            className="hover:text-blue-600 transition text-white bg-transparent"
            onClick={handleProductsClick}
          >
            Products
          </button>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-md p-4 space-y-4">
          <a href="#about" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</a>
          {/* Change to button for mobile too */}
          <button 
            className="block text-white hover:text-blue-600 transition text-left w-full bg-transparent"
            onClick={handleProductsClick}
          >
            Products
          </button>
          <a href="#contact" className="block text-white hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;