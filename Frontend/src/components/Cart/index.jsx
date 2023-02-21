import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    const existingProduct = cart.find((p) => p._id === product._id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((p) => p._id !== product._id));
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
      products: cart.map((p) => ({ id: p._id, quantity: p.quantity })),
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
}

export default Cart;
