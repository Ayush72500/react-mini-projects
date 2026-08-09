import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      <Product />

      <Cart />
    </div>
  );
}

export default App;