import { Navigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.totalPrice);
  if (cart.totalPrice === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="px-10 mb-10">
      <div className="flex justify-between border-b items-center pb-5 mb-7">
        <h1 className="text-3xl text-gray-700 font-semibold">Shopping Cart</h1>
        <h1 className="text-3xl text-gray-700 font-semibold">
          {cart.totalItems} item{cart.totalItems > 1 ? "s" : null}
        </h1>
      </div>
      <div className="grid lg:grid-cols-[2.5fr_1fr] gap-6 lg:gap-0">
        <div className="overflow-scroll" id="table">
          <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase">
              <tr className="text-gray-400">
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </tbody>
          </table>
        </div>
        <div id="checkout" className="bg-gray-100 px-4 pt-3 pb-20">
          <div className="flex justify-between border-b items-center pb-5 mb-3">
            <h1 className="text-2xl text-gray-700 font-semibold">Checkout</h1>
          </div>
          <div className="flex justify-between mb-6 text-gray-500">
            <p className="font-medium text-lg">
              {" "}
              <span className="mr-2">items :</span>
              {cart.totalItems}
            </p>
            <p className="font-medium text-lg">
              {Intl.NumberFormat(navigator.language, {
                style: "currency",
                currency: "USD",
              }).format(cart.totalPrice)}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="shipping" className="font-medium">
              SHIPPING
            </label>
            <select
              className="block outline-none bg-gray-400 text-white w-full py-2 px-3 mt-2"
              id="shipping"
            >
              <option value="1">Standard Delevery - free shipping</option>
              <option value="2">Fast Delevery - $5.00</option>
              <option value="1">Extreme Delevery - $15.00</option>
            </select>
          </div>
          <div className="pb-7 border-b-2">
            <label htmlFor="promo" className="font-medium">
              Promo Code
            </label>
            <input
              type="text"
              className="block outline-none bg-gray-400 text-white w-full py-2 px-3 mt-2"
              id="promo"
            />
            <button className="bg-orange-600 text-white px-5 py-3 font-semibold mt-5">
              Apply
            </button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-3">
              <p className="font-medium text-lg">
                {" "}
                <span className="mr-2">Total Cost :</span>
              </p>
              <p className="font-medium text-lg">
                {Intl.NumberFormat(navigator.language, {
                  style: "currency",
                  currency: "USD",
                }).format(cart.totalPrice)}
              </p>
            </div>
            <button className="w-full bg-orange-500 text-white py-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
