/* eslint-disable react/prop-types */
import { Shop } from "./shop";
import { Defaultprofile } from "./defaultprofile.jsx";
import { useState } from "react";

function Content({ name }) {
  //   const { name } = useParams();
  const [cartOpen, setCartOpen] = useState(true);
  console.log(`im re-rendering Content and cartOpen is ${cartOpen}`);

  return (
    <div>
      {name === "cart" || name === "shop" ? (
        <Shop show={name} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      ) : (
        <Defaultprofile cartOpen={cartOpen} setCartOpen={setCartOpen} />
      )}
    </div>
  );
}

export { Content };
