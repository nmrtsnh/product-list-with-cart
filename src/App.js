import { useState } from "react";
import "./App.css";
// import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import data from "./data.json";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <div className="bg-rosee-50 min-h-sceen pl-48 pt-20">
      <h1 className="text-4xl font-extrabold  mb-8 text-brown-700">Desserts</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {data.map((product, index) => (
            <ProductCard key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="lg:w-1/4">{/* <Cart /> */}</div>
      </div>
    </div>
  );
}

export default App;
