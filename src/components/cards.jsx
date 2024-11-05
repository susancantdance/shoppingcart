import styles from "./cards.module.css";
// import { products } from "./products.jsx";
import { Card } from "./card.jsx";
// import { Cart } from "./cart.jsx";
import PropTypes from "prop-types";

function Cards({ productList, setProductList }) {
  const productTile = productList.map((product) => {
    return (
      <Card
        item={product}
        key={product.name}
        productList={productList}
        setProductList={setProductList}
      />
    );
  });

  //   const returnCart = () => {
  //     return <Cart productList={productList} setProductList={setProductList} />;
  //   };

  //   console.log(productTile);
  return (
    <div className={styles.cardcontainer}>
      <p>This here be the cards container</p>
      {/* <button onClick={returnCart}>Cart</button> */}
      <ul>{productTile}</ul>
    </div>
  );
}

Cards.propTypes = {
  productList: PropTypes.array,
  setProductList: PropTypes.func,
  show: PropTypes.string,
};

export { Cards };
