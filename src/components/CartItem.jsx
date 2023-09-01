import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../store/reducers/shoppingCartSlice";
import CartQuantityEdit from "./CartQuantityEdit";
function CartItem({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const actions = cartSliceActions;
  const productQuantity =
    cart.cartItems.find((item) => item.id === product.id)?.quantity || 0;
  return (
    <tr className="">
      <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
        <div className="h-full flex gap-4 items-center">
          <div id="image-container" className=" w-12 h-12 overflow-hiddens">
            <img
              className="object-contain"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="text-gray-500">{product.name}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <CartQuantityEdit
          dispatch={dispatch}
          product={product}
          productQuantity={productQuantity}
          actions={actions}
        />
      </td>
      <td className="px-6 py-4">
        {Intl.NumberFormat(navigator.language, {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </td>
      <td className="px-6 py-4">
        {Intl.NumberFormat(navigator.language, {
          style: "currency",
          currency: "USD",
        }).format((product.price * productQuantity).toFixed(2))}
      </td>
    </tr>
  );
}

export default CartItem;
