import React, { useState } from "react";
import "./Styles.scss";

const ProductCard = ({ products }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  console.log(cart);
  return (
    <div className="prouctcontainer">
      {products.length
        ? products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
              <p className="price">NGN{product.price}</p>
              <p>
                {product.farmer.fullname}
                <small style={{ display: "block", textAlign: "center" }}>
                  <i>Farmer</i>
                </small>
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        : // <EmptyState data={"Prouduct"} />
          "Loading..."}
    </div>
  );
};

ProductCard.defaultProps = {
  products: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
  ],
};
export default ProductCard;
