import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <div>
        <h3>Apple</h3>
        <h3>₹100</h3>

        <button
          onClick={() =>
            setCart([...cart, { name: "Apple", price: 100 }])
          }
        >
          Add to Cart
        </button>
      </div>

      <div>
        <h3>Banana</h3>
        <h3>₹50</h3>

        <button
          onClick={() =>
            setCart([...cart, { name: "Banana", price: 50 }])
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;