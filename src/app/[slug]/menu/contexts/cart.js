"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  total: 0,
  totalQuantity: 0,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalQuantaty = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addProduct = (product) => {
    const productIsAlreadyOnTheCart = products.some(
      (prevProduct) => prevProduct.id === product.id,
    );

    if (!productIsAlreadyOnTheCart) {
      return setProducts((prev) => [...prev, product]);
    }

    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const decreaserProductQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }
        if (prevProduct.quantity === 1) {
          return prevProduct;
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        };
      });
    });
  };

  const increaseProductQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        };
      });
    });
  };

  const removeProduct = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((prevProduct) => prevProduct.id !== productId);
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
        decreaserProductQuantity,
        increaseProductQuantity,
        removeProduct,
        totalQuantaty,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
