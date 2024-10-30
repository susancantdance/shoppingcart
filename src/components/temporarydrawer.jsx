import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";

function TemporaryDrawer({ cartItems, cartOpen, setCartOpen }) {
  //   const [open, setOpen] = React.useState(openYes);
  console.log("i'm supposed to be open!");
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
        </div>
      </Drawer>
    </div>
  );
}

TemporaryDrawer.propTypes = {
  cartItems: PropTypes.array,
  setCartOpen: PropTypes.func,
  cartOpen: PropTypes.bool,
};

export { TemporaryDrawer };
