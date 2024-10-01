import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotal, removeItem } = useContext(CartContext);
  const total = getTotal();

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold mb-6 text-gray">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center py-40">
          <FaShoppingCart className="text-3xl text-gray" />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">Product</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">Subtotal</th>
                  <th className="border border-gray-300 px-4 py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="border border-gray-300">
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Link to="/checkout">
              <button className="mt-4 bg-vanilla text-white py-2 px-4 rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
