import "./App.css";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
         Desserts Waffle with Berries Waffle 6.50 Add to{" "}
        Cart Vanilla Bean Crème
    Brûlée Crème Brûlée 7.00 Add to Cart Macaron Mix of Five Macaron 8.00 Add to
    Cart Classic Tiramisu Tiramisu 5.50 Add to Cart Pistachio Baklava Baklava
    4.00 Add to Cart Lemon Meringue Pie Pie 5.00 Add to Cart Red Velvet Cake
    Cake 4.50 Add to Cart Salted Caramel Brownie Brownie 4.50 Add to Cart
    Vanilla Panna Cotta Panna Cotta 6.50 Add to Cart Your Cart (<!-- Quantity -->)
    Your added items will appear here 
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="">Your Name Here</a>.
        </div>
      </header> */}
      <Product />
    </div>
  );
}

export default App;
