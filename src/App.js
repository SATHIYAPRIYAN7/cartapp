import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const handleAddToCart = (selectedProduct) => {
    const existingItem = cart.find(item => item.id === selectedProduct.id);

    if (existingItem) {
      alert('Item already in the cart!');
    } else {
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + change };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="add-to-cart-page">
      <h1>Add to Cart Page</h1>

      <div className="products">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span> <span>{item.name}</span> -<span>${item.price}</span>  - <span> </span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>{item.quantity}
              <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>
                -
              </button></span>
              <button className='remove' onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default AddToCartPage;
