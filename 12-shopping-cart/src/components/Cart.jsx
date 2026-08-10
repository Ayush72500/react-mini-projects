import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>

      <h3>Items : {cart.length}</h3>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button
            onClick={() => {
              const newCart = cart.filter((_, i) => i !== index);
              setCart(newCart);
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total : ₹{total}</h3>

      <button onClick={() => setCart([])}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;