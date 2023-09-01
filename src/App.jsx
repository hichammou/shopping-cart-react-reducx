import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import IndexPage from "./pages/IndexPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
