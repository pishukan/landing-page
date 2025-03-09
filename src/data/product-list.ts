export interface Product {
    id: number;
    name: string;
    localName: string;
    scientificName: string;
    image: string;
    size: string;
    form: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Grouper",
      localName: "Gissar",
      scientificName: "Epinephelus spp.",
      image: "/products/grouper.jpg",
      size: "30-70 cm",
      form: "Fresh, Frozen",
    },
    {
      id: 2,
      name: "Croaker",
      localName: "Mushka",
      scientificName: "Johnius spp.",
      image: "/products/croaker.jpg",
      size: "20-50 cm",
      form: "Fresh, Frozen",
    },
    {
      id: 3,
      name: "Pomfret",
      localName: "Paplet",
      scientificName: "Pampus argenteus",
      image: "/products/pomfret.jpg",
      size: "20-40 cm",
      form: "Fresh, Frozen",
    },
    {
      id: 4,
      name: "Tiger Shrimp",
      localName: "Jhinga",
      scientificName: "Penaeus monodon",
      image: "/products/tiger-shrimp.jpg",
      size: "U10 - 20/30 per kg",
      form: "Fresh, Frozen",
    },
    {
      id: 5,
      name: "Blue Swimming Crab",
      localName: "Kekra",
      scientificName: "Portunus pelagicus",
      image: "/products/blue-swimming-crab.jpg",
      size: "10-15 cm",
      form: "Live, Fresh, Frozen",
    },
  ];
  