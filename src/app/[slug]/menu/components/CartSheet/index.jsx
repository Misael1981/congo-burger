import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CartContext } from "../../contexts/cart";
import { useContext } from "react";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adiciona à sacola</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
