'use client';

import { useState, useCallback } from 'react';
import About from "@/components/about";
import Contact from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ResponsibleFishing from "@/components/locations";
import Navbar from "@/components/navbar";
import ProductDialog from "@/components/product-popup";
import Products from "@/components/products";
import Quality from "@/components/quality";
import Image from "next/image";

export default function Home() {
  const [openProductDialog, setOpenProductDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  // Use useCallback to ensure this function's reference remains stable
  const handleOpenProductDialog = useCallback(() => {
    console.log("handleOpenProductDialog called");
    setOpenProductDialog(true);
  }, []);
  
  const handleProductClick = useCallback((productTitle: string) => {
    console.log("handleProductClick called for:", productTitle);
    setSelectedProduct(productTitle);
    setOpenProductDialog(true);
  }, []);
  
  const handleDialogOpenChange = useCallback((open: boolean) => {
    console.log("Dialog state changing to:", open);
    setOpenProductDialog(open);
    if (!open) {
      setSelectedProduct(null);
    }
  }, []);

  return (
    <div>
      {/* Pass the function explicitly */}
      <Navbar onOpenProductDialog={handleOpenProductDialog} />

      {/* Background Image for Hero & Products */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg-3.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
          {/* Optional Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Components with Background Image */}
        <Hero
          title="Looking for Bulk Seafood Supply? Let's Talk Business!"
          subtitle="Premium seafood sourced directly from Gwadar's coastline, processed with international quality standards."
          buttonText="Explore Our Products"
          buttonLink="/products"
          onOpenProductDialog={handleOpenProductDialog}
        />
        <Products onProductClick={handleProductClick} />
        <ProductDialog 
          openFromParent={openProductDialog}
          selectedProduct={selectedProduct}
          onOpenChange={handleDialogOpenChange}
        />
      </div>

      {/* Other Sections (Without Background) */}
      <Quality />
      <ResponsibleFishing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}