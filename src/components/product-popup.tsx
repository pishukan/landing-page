"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Product = {
  image: string;
  title: string;
  localName: string;
  scientificName: string;
  size: string[];
  exportForm: string[];
};

const products: Product[] = [
    {
        image: "/grouper.jpg",
        title: "Grouper",
        localName: "Gissar",
        scientificName: "Epinephelus spp.",
        size: ["30-50 cm (S)", "50-70 cm (M)", "70+ cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/croaker.jpg",
        title: "Croaker",
        localName: "Mushka",
        scientificName: "Johnius spp.",
        size: ["20-35 cm (S)", "35-50 cm (M)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/pomfret.jpg",
        title: "Pomfret",
        localName: "Paplet",
        scientificName: "Pampus argenteus",
        size: ["20-25 cm (S)", "25-35 cm (M)", "35-40 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/mackerel.jpg",
        title: "Mackerel",
        localName: "Surmai",
        scientificName: "Scomberomorus guttatus",
        size: ["30-50 cm (S)", "50-80 cm (M)", "80-100 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/sardine.jpg",
        title: "Sardine",
        localName: "Sardin",
        scientificName: "Sardinella longiceps",
        size: ["10-15 cm (S)", "15-20 cm (M)", "20-25 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/red-snapper.jpg",
        title: "Red Snapper",
        localName: "Heera",
        scientificName: "Lutjanus spp.",
        size: ["30-50 cm (S)", "50-70 cm (M)", "70+ cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/tuna.jpg",
        title: "Tuna",
        localName: "Dawan",
        scientificName: "Thunnus spp.",
        size: ["50-70 cm (S)", "70-100 cm (M)", "100-120 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/ribbon-fish.jpg",
        title: "Ribbon Fish",
        localName: "Chind",
        scientificName: "Trichiurus lepturus",
        size: ["30-60 cm (S)", "60-90 cm (M)", "90-120 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/blue-crab.jpg",
        title: "Blue Swimming Crab",
        localName: "Kekra",
        scientificName: "Portunus pelagicus",
        size: ["10-12 cm (S)", "12-15 cm (M)", "15+ cm (L)"],
        exportForm: ["Live", "Whole (Fresh/Frozen)", "Tail (Frozen)"],
      },
      {
        image: "/mud-crab.jpg",
        title: "Mud Crab",
        localName: "Kekra",
        scientificName: "Scylla serrata",
        size: ["15-18 cm (S)", "18-20 cm (M)", "20+ cm (L)"],
        exportForm: ["Live", "Whole (Fresh/Frozen)", "Tail (Frozen)"],
      },
      {
        image: "/spiny-lobster.jpg",
        title: "Spiny Lobster",
        localName: "Jhinga Kekra",
        scientificName: "Panulirus spp.",
        size: ["20-25 cm (S)", "25-35 cm (M)", "35-40 cm (L)"],
        exportForm: ["Live", "Whole (Fresh/Frozen)", "Tail (Frozen)"],
      },
      {
        image: "/tiger-shrimp.jpg",
        title: "Tiger Shrimp",
        localName: "Jhinga",
        scientificName: "Penaeus monodon",
        size: ["U10 (L)", "10/20 (M)", "20/30 (S)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/white-shrimp.jpg",
        title: "White Shrimp",
        localName: "Jhinga",
        scientificName: "Penaeus indicus",
        size: ["U10 (L)", "10/20 (M)", "20/30 (S)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/brown-shrimp.jpg",
        title: "Brown Shrimp",
        localName: "Jhinga",
        scientificName: "Metapenaeus spp.",
        size: ["20/30 (L)", "30/40 (M)", "40/60 (S)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/pearl-oyster.jpg",
        title: "Pearl Oyster",
        localName: "Sadaf",
        scientificName: "Pinctada radiata",
        size: ["70-90 cm (M)", "90-100 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/clam.jpg",
        title: "Clam",
        localName: "Shel",
        scientificName: "Meretrix meretrix",
        size: ["50-70 cm (M)", "70-100 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
      {
        image: "/abalone.jpg",
        title: "Abalone",
        localName: "Shel",
        scientificName: "Haliotis spp.",
        size: ["50-70 cm (M)", "70-100 cm (L)"],
        exportForm: ["Fresh", "Frozen"],
      },
];


interface ProductDialogProps {
    openFromParent?: boolean;
    selectedProduct?: string | null;
    onOpenChange?: (open: boolean) => void;
  }
  
  export default function ProductDialog({ 
    openFromParent = false, 
    selectedProduct = null,
    onOpenChange 
  }: ProductDialogProps) {
    const [open, setOpen] = useState(false);
    const selectedRowRef = useRef<HTMLTableRowElement>(null);
    
    // Handle external open request
    useEffect(() => {
      if (openFromParent) {
        setOpen(true);
        if (onOpenChange) {
          onOpenChange(true);
        }
      }
    }, [openFromParent, onOpenChange]);
    
    // Scroll to selected product when dialog opens
    useEffect(() => {
      if (open && selectedProduct && selectedRowRef.current) {
        setTimeout(() => {
          selectedRowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }, [open, selectedProduct]);
    
    const handleOpenChange = (newOpenState: boolean) => {
      setOpen(newOpenState);
      if (onOpenChange) {
        onOpenChange(newOpenState);
      }
    };
    
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-5xl p-6 mt-4">
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? `Seafood Products - ${selectedProduct}` : "Seafood Products"}
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[700px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Local Name</TableHead>
                  <TableHead>Scientific Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Export Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => {
                  const isSelected = selectedProduct === product.title;
                  return (
                    <TableRow 
                      key={index}
                      ref={isSelected ? selectedRowRef : null}
                      className={isSelected ? "bg-primary/10 border-l-4 border-primary" : ""}
                    >
                      <TableCell>
                        <img src={product.image} alt={product.title} className="w-16 h-10 object-cover rounded-md" />
                      </TableCell>
                      <TableCell className={`font-medium ${isSelected ? "text-primary" : ""}`}>
                        {product.title}
                      </TableCell>
                      <TableCell>{product.localName}</TableCell>
                      <TableCell>{product.scientificName}</TableCell>
                      <TableCell>{product.size.join(", ")}</TableCell>
                      <TableCell>{product.exportForm.join(", ")}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    );
  }