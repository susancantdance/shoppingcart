import { Cards } from "./cards";
import { Cart } from "./cart";
import { products } from "./products";
import { useState } from "react";
import PropTypes from "prop-types";

function Shop({ show, cartOpen, setCartOpen }) {
  const [productList, setProductList] = useState(products);

  // products.map((prod) => {
  //   return { name: prod.name, qty: prod.qty };
  // })

  //   );
  console.log(`im re-rendering Shop and cartOpen is ${cartOpen}`);
  return (
    <>
      <div>THIS BE SHOPPING PAGE</div>
      {show === "shop" ? (
        <Cards productList={productList} setProductList={setProductList} />
      ) : (
        <Cart
          productList={productList}
          setProductList={setProductList}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      )}
    </>
  );
}

Shop.propTypes = {
  productList: PropTypes.array,
  setProductList: PropTypes.func,
  show: PropTypes.string,
  cartOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
};

export { Shop };