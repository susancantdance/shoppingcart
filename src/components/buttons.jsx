import styles from "./buttons.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Buttons({ item, productList, setProductList }) {
  const [qty, setQty] = useState(item.qty);

  const updateQty = (addOrSub) => {
    if (addOrSub == "+") {
      setQty(qty + 1);
      console.log(qty + 1);
      updateList(qty + 1);
    } else if (addOrSub == "-" && qty != 0) {
      setQty(qty - 1);
      console.log(qty - 1);
      updateList(qty - 1);
    }
  };

  const updateList = (qty) => {
    let newList = productList.slice();
    let index = newList.indexOf(item);
    newList[index].qty = qty;
    setProductList(newList);
    console.log(productList);
  };

  return (
    <div>
      <button onClick={() => updateQty("-")}>-</button>
      <input
        className={styles.inpt}
        value={item.qty}
        id={item.name}
        readOnly
      ></input>
      <button onClick={() => updateQty("+")}>+</button>
    </div>
  );
}

Buttons.propTypes = {
  item: PropTypes.object,
  productList: PropTypes.array,
  setProductList: PropTypes.func,
};

export { Buttons };
