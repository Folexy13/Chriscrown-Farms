import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.scss";
import { Navbar } from "../../../components";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Load products from API
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((p) => p.id !== product.id));
    } else {
      existingProduct.quantity -= 1;
      setCart([...cart]);
    }
  };

  // Calculate total price
  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  // Place order
  const placeOrder = () => {
    const order = {
      products: cart.map((p) => ({ id: p.id, quantity: p.quantity })),
      total: total,
    };
    axios
      .post("http://localhost:3000/orders", order)
      .then((response) => {
        setCart([]);
        setTotal(0);
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} x {product.quantity}
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: {total}</p>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
