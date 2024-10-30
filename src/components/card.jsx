import styles from "./card.module.css";
import PropTypes from "prop-types";
import { Buttons } from "./buttons.jsx";

function Card({ item, productList, setProductList }) {
  //   console.log(`item name is ${item.name}`);
  //   console.log(styles.item);

  return (
    <>
      <li className={styles.item} key={item.name}>
        {item.name}
        <Buttons
          item={item}
          key={item.name}
          productList={productList}
          setProductList={setProductList}
        />
      </li>
    </>
  );
}

Card.propTypes = {
  productList: PropTypes.array,
  item: PropTypes.object,
  setProductList: PropTypes.func,
};

export { Card };
