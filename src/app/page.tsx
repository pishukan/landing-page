import About from "@/components/about";
import Contact from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ResponsibleFishing from "@/components/locations";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Quality from "@/components/quality";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Background Image for Hero & Products */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg-2.png"
            alt="Hero Background"
            fill
            className="object-cover"
          />
          {/* Optional Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Components with Background Image */}
        <Hero
          title="Looking for Bulk Seafood Supply? Let’s Talk Business!"
          subtitle="Premium seafood sourced directly from Gwadar’s coastline, processed with international quality standards."
          buttonText="Explore Our Products"
          buttonLink="/products"
        />
        <Products />
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
