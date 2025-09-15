"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { formatCurrency } from "@/helpers/format-currency";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/cart";
import CartSheet from "../../../components/CartSheet";

const ProductDetails = ({ product, restaurant }) => {
  const { toggleCart, addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const handleDrecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) {
        return 0;
      }
      return prevQuantity - 1;
    });
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleAddToCart = () => {
    addProduct({
      ...product,
      quantity,
    });
    toggleCart();
  };
  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col justify-between overflow-hidden rounded-t-3xl p-5">
        <div className="flex-auto overflow-hidden">
          <div className="mt-2 flex items-center gap-1.5">
            <Image
              src={restaurant?.avatarImageUrl}
              alt={restaurant?.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <p className="text-xs text-muted-foreground">{restaurant?.name}</p>
          </div>
          <h2 className="text-xl font-semibold">{product?.name}</h2>

          <div className="mt-3 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-green-500">
              {formatCurrency(product.price)}
            </h3>
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-xl"
                onClick={handleDrecrement}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="w-4">{quantity}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={handleIncrement}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="5 flex items-center gap-1">
                <ChefHatIcon size={18} />
                <h4 className="font-semibold">Ingredientes</h4>
              </div>
              <ul className="text-muted-fo list-disc px-5 text-sm text-muted-foreground">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>
        <Button className="mt-6 w-full rounded-full" onClick={handleAddToCart}>
          Adiciona à sacola
        </Button>
      </div>
      <CartSheet />
    </>
  );
};

export default ProductDetails;
