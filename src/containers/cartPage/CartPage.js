import React, { useState } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart'

export const CartPage = () => {
   const watchImage='https://i.linio.com/p/3057f97c88f93bcd68992fbf185d8997-product.webp'

   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);

   const objectProduct =[]

   const addToCart = () => {
      setCart([...cart, { id: 1, name: 'Modern Watch', price: 49000, image:watchImage, quantity:1}]);
      setShowCart(true);
   };

   return (
   <>
   <div style={{ display: 'flex', flexDirection: 'column' }} >
      <img src={watchImage} alt="modern watch" />
      <button  onClick={addToCart}>Buy</button>
   </div>
      {showCart && <ShoppingCart cart={cart}  setCart={setCart}  setShowCart={setShowCart} />}
   </>
         );
};

export default CartPage;