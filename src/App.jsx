import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container flex gap-8 w-full">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
