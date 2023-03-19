import React from 'react';
import styles from '../../Ecommerce.css';

const ShoppingCart = ({ cart, setCart, setShowCart }) => {

  const addToCart = (selectedProduct) => {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex(product => product.name === selectedProduct.name);

    if (existingProductIndex === -1) {
      newCart.push({ ...selectedProduct, quantity: 1 });
    } else {
      newCart[existingProductIndex].quantity++;
    }

    setCart(newCart);
  };
  
    const removeFromCart = (index) => {
      setCart([
        ...cart.slice(0, index),
        ...cart.slice(index + 1)
      ]);
    };
  
    const updateQuantity = (index, delta) => {
      setCart(
        cart.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              quantity: item.quantity + delta
            };
          }
          return item;
        })
      );
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div className={styles.cartContainer}>
      {cart.length > 0 && cart.length !== 1 && (<h2>Shopping Cart</h2>)}
      <table>
      {cart.length > 0  &&  ( <thead>
          <tr>
          <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead> )} 
        <tbody>
        {cart.map((product, index) => (
            <tr key={product.name}>
              <td>
                <img src={product.image} alt={product.name} className="thumbnail" />
                <p>{product.name}</p>
              </td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
              <td style={styles.cartContainer}>
                <button  style={styles.cartContainer} onClick={() => updateQuantity(index, 1)}>+</button>
                <button style={styles.cartContainer}  onClick={() => updateQuantity(index, -1)} disabled={product.quantity === 0}>-</button>
                <button  style={{color:'#ff9700' }} onClick={() => removeFromCart(index)}>&times;</button>
              </td>
            </tr>
          ))}
        </tbody>
        {cart.length !== 1 && cart.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td colSpan="2">${totalPrice}</td>
            </tr>
          </tfoot>
        )}
      </table>
      { cart.length > 0 && (<button onClick={() => setShowCart(false)}>Close</button>)}
      { cart.length > 0 && (<button onClick={() => setShowCart(false)}>Proceed to Checkout</button>)}
    </div>
  );
};

export default ShoppingCart;
