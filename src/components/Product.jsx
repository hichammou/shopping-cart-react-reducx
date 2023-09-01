import { useState } from "react";
import CartQuantityEdit from "./CartQuantityEdit";

function Product({ product, cart, dispatch, actions }) {
  const productQuantity =
    cart.cartItems.find((item) => item.id === product.id)?.quantity || 0;
  return (
    <div className="border flex flex-col gap-3 shadow-md hover:shadow-lg px-5 py-3 rounded-md">
      <div className="flex justify-center w-full">
        {" "}
        <div className="h-20 w-20">
          <img
            className="object-contain w-full h-full"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
      </div>
      <div className="mt-3">
        <p className="truncate text-center font-semibold">{product.name}</p>
        <p className="text-center">
          {Intl.NumberFormat(navigator.language, {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
      <div className="flex justify-center">
        <CartQuantityEdit
          dispatch={dispatch}
          product={product}
          productQuantity={productQuantity}
          actions={actions}
        />
      </div>
    </div>
  );
}

export default Product;
