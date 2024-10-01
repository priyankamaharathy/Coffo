import React, { useContext, useState,useEffect } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const { cartItems, getTotal } = useContext(CartContext);
  const total = getTotal();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: '',
    phone: '',
    name: '',
    address: '',
    state: '',
    pin: '',
    city: '',
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);
 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = cartItems.map(item => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
  }));
  try {
      await axios.post('http://localhost:5000/api/checkout', {
          userDetails: formData,
          products,
      });
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error saving checkout details:', error);
  }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h1>
        <p className="mt-4 text-gray-600">Thank you for your order, Your order is being processed.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 bg-vanilla text-white py-2 px-4 rounded-md shadow-lg font-bold transition duration-300 hover:bg-yellow-600"
        >
          Go Back to Checkout
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-color1 p-8 my-5 rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-gray">Checkout</h1>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Your Name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Your Phone Number"
            required
          />
        </div>
       
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Street Address"
            required
          />
        </div>
       
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="City"
            required
          />
        </div>
      
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="State"
            required
          />
        </div>
      
        <div>
          <label className="block text-sm font-medium text-gray-700">Pin Code</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Pin Code"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Country"
            required
          />
        </div>
       
        <div>
          <button
            type="submit"
            className="w-full bg-vanilla text-white py-3 rounded-md shadow-lg font-bold transition duration-300 hover:bg-yellow-600"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
