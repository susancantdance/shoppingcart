import { NavBar } from "./components/navbar.jsx";
import { Content } from "./components/content.jsx";
import { useState } from "react";
// import { products } from "./components/products.jsx";

function App() {
  const [page, setPage] = useState("");

  return (
    <>
      <h1>HARRO</h1>
      <NavBar updateContent={setPage} />
      <Content name={page} />
    </>
  );
}

export { App };
