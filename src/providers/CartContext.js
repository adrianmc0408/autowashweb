"use client";
import useSweetAlert from "@/hooks/useSweetAlert";
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage";
import getItemsFromLocalstorage from "@/libs/getItemsFromLocalstorage";
import { createContext, useContext, useEffect, useState } from "react";
import cart1 from "@/assets/img/cart/cart1.jpg";
import cart2 from "@/assets/img/cart/cart2.jpg";
import cart3 from "@/assets/img/cart/cart3.jpg";

const demoProducts = [
  {
    id: 1,
    title: "Super Web Directory",
    image: cart1,
    price: 50,
    quantity: 1,
    isCourse: true,
  },
  {
    id: 2,
    title: "Nice Web Directory",
    image: cart2,
    price: 80,
    quantity: 1,
    isCourse: true,
  },
  {
    id: 3,
    title: "Best Web Directory",
    image: cart3,
    price: 70,
    quantity: 1,
    isCourse: true,
  },
];
const cartContext = createContext(null);
const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const creteAlert = useSweetAlert();
  useEffect(() => {
    const cartProductFromLocalStorage = getItemsFromLocalstorage("cart");

    if (!cartProductFromLocalStorage) {
      setCartProducts(demoProducts);
      addItemsToLocalstorage("cart", demoProducts);
    } else [setCartProducts(cartProductFromLocalStorage)];
  }, []);
  // add  product from localstorage cart
  const addProductToCart = (currentProduct, isDecreament, isTotalQuantity) => {
    const { id: currentId, title: currentTitle } = currentProduct;

    const modifyableProduct = cartProducts?.find(
      ({ id, title }) => id === currentId && title === currentTitle
    );
    const previousQuantity = modifyableProduct?.quantity;
    const currentQuantity = currentProduct?.quantity;

    let currentProducts;
    if (isTotalQuantity) {
      currentProducts = cartProducts?.map((product) =>
        product.id === currentId &&
        product?.title === currentTitle &&
        isTotalQuantity
          ? {
              ...product,
              quantity: currentProduct.quantity,
            }
          : product
      );

      if (previousQuantity < currentQuantity) {
        creteAlert("success", "Success! Quantity increased.");
      } else if (previousQuantity > currentQuantity) {
        creteAlert("success", "Success! Quantity decreased.");
      }
    } else {
      const isAlreadyExist = modifyableProduct ? true : false;

      if (isAlreadyExist) {
        currentProducts = cartProducts?.map((product) =>
          product.id === currentId &&
          product?.title === currentTitle &&
          isDecreament
            ? {
                ...product,
                quantity: product.quantity - currentProduct?.quantity,
              }
            : product.id === currentId && product?.title === currentTitle
            ? {
                ...product,
                quantity: product.quantity + currentProduct?.quantity,
              }
            : product
        );
        if (isDecreament) {
          creteAlert("success", "Success! Quantity decreased.");
        } else {
          creteAlert("success", "Success! Quantity increased.");
        }
      } else {
        currentProducts = [...cartProducts, currentProduct];

        creteAlert("success", "Success! added to cart.");
      }
    }
    setCartProducts(currentProducts);
    addItemsToLocalstorage("cart", currentProducts);
  };

  // delete product from localstorage cart
  const deleteProductFromCart = (currentId, currentTitle) => {
    const currentProducts = cartProducts?.filter(
      ({ id, title }) => id !== currentId || title !== currentTitle
    );
    setCartProducts(currentProducts);
    addItemsToLocalstorage("cart", currentProducts);
    creteAlert("success", "Success! deleted from cart.");
  };
  return (
    <cartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export const useCartContext = () => {
  const value = useContext(cartContext);
  return value;
};
export default CartContextProvider;