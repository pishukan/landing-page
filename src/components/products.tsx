"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// Fish Products
const fishProducts = [
  {
    image: "/images/grouper.jpg",
    title: "Grouper",
    subtitle: "Epinephelus spp.",
  },
  {
    image: "/images/croaker.jpg",
    title: "Croaker",
    subtitle: "Johnius spp.",
  },
  {
    image: "/images/pomfret.jpg",
    title: "Pomfret",
    subtitle: "Pampus argenteus",
  },
  {
    image: "/images/mackerel.jpg",
    title: "Mackerel",
    subtitle: "Scomberomorus guttatus",
  },
  {
    image: "/images/sardine.jpg",
    title: "Sardine",
    subtitle: "Sardinella longiceps",
  },
  {
    image: "/images/red-snapper.jpg",
    title: "Red Snapper",
    subtitle: "Lutjanus spp.",
  },
  {
    image: "/images/tuna.jpg",
    title: "Tuna",
    subtitle: "Thunnus spp.",
  },
  {
    image: "/images/ribbon-fish.jpg",
    title: "Ribbon Fish",
    subtitle: "Trichiurus lepturus",
  },
];

// Crabs, Lobsters, Shrimps, Shellfish
const otherSeafood = [
  {
    image: "/images/blue-crab.jpg",
    title: "Blue Swimming Crab",
    subtitle: "Portunus pelagicus",
  },
  {
    image: "/images/mud-crab.jpg",
    title: "Mud Crab",
    subtitle: "Scylla serrata",
  },
  {
    image: "/images/spiny-lobster.jpg",
    title: "Spiny Lobster",
    subtitle: "Panulirus spp.",
  },
  {
    image: "/images/tiger-shrimp.jpg",
    title: "Tiger Shrimp",
    subtitle: "Penaeus monodon",
  },
  {
    image: "/images/white-shrimp.jpg",
    title: "White Shrimp",
    subtitle: "Penaeus indicus",
  },
  {
    image: "/images/brown-shrimp.jpg",
    title: "Brown Shrimp",
    subtitle: "Metapenaeus spp.",
  },
  {
    image: "/images/pearl-oyster.jpg",
    title: "Pearl Oyster",
    subtitle: "Pinctada radiata",
  },
  {
    image: "/images/clam.jpg",
    title: "Clam",
    subtitle: "Meretrix meretrix",
  },
];

const Products = () => {
  return (
    <section className="py-16  font-opensans">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      {/* FISH PRODUCTS */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
        Our Product Offerings
      </h2>
        <p className="w-4/5 mx-auto text-center font-light text-white">
            Pishukan Seafood exports premium seafood from the Gwadar coastline of the Arabian Sea.
        </p>

  
      <div className="h-64 md:h-72 flex items-center justify-center overflow-hidden mb-0">
        <InfiniteMovingCards items={fishProducts} direction="left" speed="normal" />
      </div>
  
      <div className="h-64 md:h-72 flex items-center justify-center overflow-hidden">
        <InfiniteMovingCards items={otherSeafood} direction="right" speed="normal" />
      </div>
    </div>
  </section>
  

  );
};

export default Products;
