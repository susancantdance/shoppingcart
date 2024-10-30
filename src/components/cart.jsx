import { TemporaryDrawer } from "./temporarydrawer.jsx";
import PropTypes from "prop-types";
import { Card } from "./card.jsx";

function Cart({ productList, setProductList, cartOpen, setCartOpen }) {
  console.log(`im re-rendering cart and its ${cartOpen}`);
  let cartItems = productList.filter((prod) => prod.qty > 0);
  cartItems = cartItems.map((product) => {
    return (
      <Card
        item={product}
        key={product.name}
        productList={productList}
        setProductList={setProductList}
      />
    );
  });

  return (
    <div>
      <TemporaryDrawer
        cartItems={cartItems}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </div>
  );
}

Cart.propTypes = {
  productList: PropTypes.array,
  setProductList: PropTypes.func,
  cartOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
};

export { Cart };
