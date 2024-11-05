import { Shop } from "./shop";
import { Defaultprofile } from "./defaultprofile.jsx";
// import { Cart } from "./cart.jsx";
// import { products } from "./products";
// import { useState } from "react";
import PropTypes from "prop-types";

function Content({ linkName, productList, setProductList }) {
  //   const { name } = useParams();
  //   const [cartOpen, setCartOpen] = useState(true);
  //   const [productList, setProductList] = useState(
  //     products.map((prod) => {
  //       return { name: prod.name, qty: prod.qty };
  //     })
  //   );

  return (
    // <div>
    //   {name === "cart" || name === "shop" ? (
    //     <Shop show={name} />
    //   ) : (
    //     <Defaultprofile />
    //   )}
    // </div>

    // <div>
    //   {linkName === "cart" ? (
    //     <Cart
    //       productList={productList}
    //       setProductList={setProductList}
    //       cartOpen={cartOpen}
    //       setCartOpen={setCartOpen}
    //     />
    //   ) : linkName === "shop" ? (
    //     <Shop productList={productList} setProductList={setProductList} />
    //   ) : (
    //     <Defaultprofile />
    //   )}
    // </div>

    <div>
      {linkName === "shop" ? (
        <Shop productList={productList} setProductList={setProductList} />
      ) : (
        <Defaultprofile />
      )}
    </div>
  );
}

Content.propTypes = {
  linkName: PropTypes.string,
  productList: PropTypes.array,
  setProductList: PropTypes.func,
};

export { Content };
