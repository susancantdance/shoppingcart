import { NavBar } from "./components/navbar.jsx";
import { Content } from "./components/content.jsx";
import { Cart } from "./components/cart.jsx";
import { useState } from "react";
import { products } from "./components/products.jsx";

function App() {
  const [page, setPage] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [productList, setProductList] = useState(
    products.map((prod) => {
      return { name: prod.name, qty: prod.qty };
    })
  );

  return (
    <>
      <h1>HARRO</h1>
      <NavBar updateContent={setPage} setCartOpen={setCartOpen} />
      <Content
        linkName={page}
        productList={productList}
        setProductList={setProductList}
      />
      <Cart
        productList={productList}
        setProductList={setProductList}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </>
  );
}

export { App };
