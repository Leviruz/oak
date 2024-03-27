import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [products, setProducts] = useState([]);
  const HandleAddedProduct = (newProduct) => {
    setProducts([...products,newProduct]);
  };
  return (
    <>
      <Form onProductAdded={HandleAddedProduct} />
      <List products={products} />
    </>
  );
}

export default App;
