function CartQuantityEdit({ dispatch, product, productQuantity, actions }) {
  return (
    <div className="flex justify-center gap-2 w-min border px-2 py-1 rounded-xl">
      <button
        className={"border-r-2 px-1"}
        onClick={() => {
          dispatch(actions.addItem(product));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <span className={`text-center ${productQuantity > 0 ? null : "hidden"}`}>
        {productQuantity}
      </span>
      <button
        onClick={() => {
          dispatch(actions.removeItem(product));
        }}
        className={productQuantity > 0 ? "border-l-2 px-1" : null}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartQuantityEdit;
