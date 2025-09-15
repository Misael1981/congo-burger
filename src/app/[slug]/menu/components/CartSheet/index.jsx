import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CartContext } from "../../contexts/cart";
import { useContext } from "react";
import CartItem from "../CartItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/helpers/format-currency";
import FinishOrderButton from "../FinishOrderButton";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <Card className="mt-6">
            <CardContent>
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-lg font-semibold text-green-500">
                  {formatCurrency(total)}
                </p>
              </div>
            </CardContent>
          </Card>
          <FinishOrderButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
