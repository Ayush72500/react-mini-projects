import { useMemo, useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const products = [
    { name: "iPhone 15", price: 60000, category: "Mobile" },
    { name: "Samsung S24", price: 70000, category: "Mobile" },
    { name: "OnePlus 12", price: 55000, category: "Mobile" },
    { name: "MacBook Air", price: 90000, category: "Laptop" }
  ];


  const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}, [search]);

  return (
    <div>
      <h1>Product Store</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      

      <select>
        <option>All</option>
        <option>Mobile</option>
        <option>Laptop</option>
      </select>

      <hr />

      <h2>Products:</h2>

      {filteredProducts.map((product) => (
  <div key={product.name}>
    <h3>{product.name}</h3>
    <p>₹{product.price}</p>
    <p>{product.category}</p>
  </div>
))}
    </div>
  );
}

export default App;