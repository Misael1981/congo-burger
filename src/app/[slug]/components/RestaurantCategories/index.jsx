"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Products from "../Products";

const RestaurantCategories = ({ restaurant }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    restaurant?.menuCategories?.[0],
  );
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant?.avatarImageUrl}
            alt={restaurant?.name}
            width={45}
            height={45}
          />
          <div>
            <h2 className="text-lg font-semibold">{restaurant?.name}</h2>
            <p className="text-xs opacity-55">{restaurant?.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto</p>
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant?.menuCategories?.map((categoria) => (
            <Button
              onClick={() => handleCategoryClick(categoria)}
              key={categoria.id}
              variant={
                selectedCategory?.id === categoria.id ? "default" : "secondary"
              }
              size="sm"
              className="rounded-full"
            >
              {categoria.name}
            </Button>
          )) || []}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h3 className="px-5 pt-2 text-lg font-semibold">
        {selectedCategory?.name}
      </h3>
      <Products products={selectedCategory?.products} />
    </div>
  );
};

export default RestaurantCategories;
