"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductsHeader = ({ product }) => {
  const { back } = useRouter();
  const handleBack = () => {
    back();
  };
  return (
    <div className="relative h-[300px] w-full">
      <Button
        onClick={handleBack}
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-10 rounded-full"
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductsHeader;
