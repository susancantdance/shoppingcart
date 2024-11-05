/* eslint-disable react/prop-types */
import styles from "./navbar.module.css";

function NavBar({ updateContent, setCartOpen }) {
  console.log("hi i'm nav bar");
  return (
    <div className={styles.nav}>
      <button className={styles.btnleft} onClick={() => updateContent("home")}>
        Home
      </button>
      <button className={styles.btnleft} onClick={() => updateContent("shop")}>
        Shop
      </button>
      <button className={styles.btnright} onClick={() => setCartOpen(true)}>
        {" "}
        Cart
      </button>
    </div>
  );
}

export { NavBar };
