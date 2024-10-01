import React, { useState,useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import img9 from '../assets/menu/img9.png'
import img10 from '../assets/menu/img10.png'
import img11 from '../assets/menu/img11.png'
import img12 from '../assets/menu/img12.png'
import img13 from '../assets/menu/img13.png'
import img14 from '../assets/menu/img14.png'
import img15 from '../assets/menu/img15.png'
import { CartContext } from './CartContext';
const Menu = () => {
    const menuItems = [
        {
            id: 1,
            image:img9,
            name: 'Caffe Machiatto',
            price: 3.99,
        },
        {
            id: 2,
            image:img10,
            name: 'Black Coffee',
            price: 1.99,
        },
        {
            id: 3,
            image:img11,
            name: 'Espresso',
            price: 1.76,
        },
        {
            id: 4,
            image:img12,
            name: 'Cappuccino',
            price: 3.16,
        },
        {
            id: 5,
            image:img13,
            name: 'Iced Mocha',
            price: 2.16,
        },
        {
            id: 6,
            image:img14,
            name: 'Caramel Macchiato',
            price: 1.19,
        },
        {
            id: 7,
            image:img15,
            name: 'Frappuccino ',
            price: 2.59,
        },
    ]   
    const [quantities, setQuantities] = useState({});
    const [cartMessage, setCartMessage] = useState('');
    const { addToCart } = useContext(CartContext);
    const handleIncrement = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: (prevQuantities[id] || 1) + 1,
        }));
      };
      const handleDecrement = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: Math.max(1, (prevQuantities[id] || 1) - 1),
        }));
      };
      const handleAddToCart = (item) => {
        addToCart(item, quantities[item.id] || 1); 
        setCartMessage(`${item.name} added to the cart!`);
        setTimeout(() => {
          setCartMessage('');
        }, 2000); 
      };

  return (
    <div className='container my-10 mx-10'>
    <div>
      <h1 className='cinzel-font lg:text-7xl sm:text-5xl md:text-6xl text-brown bg-color1'>OUR MENU</h1>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ml-40'>
      {menuItems.map((item) => (
        <div key={item.id} className='p-4'>
          <img src={item.image} alt={item.name} className='h-48 object-cover rounded-lg mb-4' />
          <h2 className='text-lg text-brown'>{item.name}</h2>
          <p className='text-lg font-bold text-brown'>${item.price.toFixed(2)}</p>

          <div className='flex items-center space-x-4 my-2'>
            <button
              onClick={() => handleDecrement(item.id)}
              className='px-1 py-1 -translate-y-1 text-brown'
            >
              -
            </button>
            <span className='text-lg -translate-y-1'>{quantities[item.id] || 1}</span>
            <button
              onClick={() => handleIncrement(item.id)}
              className='px-1 py-1 -translate-y-1 text-brown'
            >
              +
            </button>
          </div>

          <button
            onClick={() => handleAddToCart(item)}
            className='flex items-center px-1 py-1 -translate-y-2 text-brown rounded mt-2'
          >
            <FaShoppingCart className='mr-1' /> Add to Cart
          </button>
        </div>
      ))}
    </div>
    {cartMessage && (
      <div className='fixed bottom-10 left-10 bg-yellow text-black p-2 rounded'>
        {cartMessage}
      </div>
    )}
  </div>
);
};


export default Menu
