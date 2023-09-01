import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { cartSliceActions } from "../store/reducers/shoppingCartSlice";
import Header from "../components/Header";

export default function Layout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const actions = cartSliceActions;
  return (
    <>
      <Header dispatch={dispatch} actions={actions} cart={cart} />
      <Outlet />
    </>
  );
}
