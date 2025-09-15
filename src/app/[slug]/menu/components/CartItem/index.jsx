import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartItem = ({ product }) => {
  const { decreaserProductQuantity, increaseProductQuantity } =
    useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 rounded-xl bg-gray-200">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="object-cover"
            fill
          />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold text-green-500">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7"
              variant="outline"
              onClick={() => decreaserProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-8 text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7"
              variant="destructive"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <Button className="h-7 w-7" variant="outline">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartItem;
