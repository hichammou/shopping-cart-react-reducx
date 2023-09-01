import React from "react";
import Product from "../components/product";
import { data } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/reducers/shoppingCartSlice";

function IndexPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const actions = cartSliceActions;
  return (
    <div className="grid grid-cols-3 gap-3 px-10">
      {data.map((product) => (
        <Product
          dispatch={dispatch}
          cart={cart}
          key={product.id}
          actions={actions}
          product={{ ...product }}
        />
      ))}
    </div>
  );
}

export default IndexPage;
