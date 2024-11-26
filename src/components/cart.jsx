// import { TemporaryDrawer } from "./temporarydrawer.jsx";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import { Card } from "./card.jsx";

function Cart({ productList, setProductList, cartOpen, setCartOpen }) {
  console.log(`im re-rendering cart and its ${cartOpen}`);
  let cartItemsRaw = productList.filter((prod) => prod.qty > 0);
  let cartItems = cartItemsRaw.map((product) => {
    return (
      <Card
        item={product}
        key={product.name}
        productList={productList}
        setProductList={setProductList}
      />
    );
  });

  let totalCost = 0;
  cartItemsRaw.forEach((item) => {
    totalCost += item.price * item.qty;
    console.log(`total is ${totalCost}`);
  });

  const toggleDrawer = (co) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      console.log("in the IF");
      return;
    }
    console.log("setting cart open...");
    setCartOpen(co);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open Drawer</Button> */}
      <Drawer anchor="right" open={cartOpen} onClose={toggleDrawer(false)}>
        <div>
          HELLO! THIS BE UR CART!
          <ul>{cartItems}</ul>
          <p>Total amount: ${totalCost}.00</p>
        </div>
      </Drawer>
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
