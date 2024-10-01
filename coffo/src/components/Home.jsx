import React, { useState, useContext } from 'react';
import axios from 'axios';  
import { Link, useNavigate } from 'react-router-dom'; 
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion'; 
import img1 from '../assets/img1.jpg';
import { CartContext } from './CartContext';

const Home = () => {
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSignInModal = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  const switchToRegister = () => {
    setIsRegister(!isRegister);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', { 
        email, 
        password 
      });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setIsSignInOpen(false);
      setSuccessMessage('Sign in successful!'); 
      setError(''); 
    } catch (error) {
      setError('Sign in failed. Please check your email and password.');
      setSuccessMessage('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      setSuccessMessage('User registered successfully!'); 
      setError(''); 
      switchToRegister();
    } catch (error) {
      console.error('Error registering:', error.response.data);
      setError('Registration failed! ' + error.response.data.message); 
      setSuccessMessage(''); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsProfileOpen(false);
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart'); 
    } else {
      setIsSignInOpen(true); 
    }
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className="relative h-screen w-full">
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      <div className="absolute top-0 w-full p-5 flex justify-end items-center">
        <button onClick={handleCartClick} className="text-white text-xl z-50 mr-[47px]">
          <FiShoppingCart />
        </button>
        {cartItems.length > 0 && (
          <span className="relative -top-2 right-12 bg-yellow text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}

        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-white text-xl z-50 mr-[55px]"
            >
              <FiUser />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={toggleSignInModal}
            className="text-white text-md border-2 border-yellow hover:bg-yellow px-4 py-1 rounded-full focus:outline-none z-50 cursor-pointer mr-[55px]"
          >
            Sign In
          </button>
        )}

        <button
          onClick={toggleMenu}
          className="text-white text-xl focus:outline-none z-50 cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-vanilla/90 text-white z-40"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        initial="closed"
        transition={{ duration: 0.5 }}
      >
        <ul className="text-center text-[20px]">
          <li className="py-5">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="py-5">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="py-5">
            <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          </li>
          <li className="py-5">
            <Link to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </motion.div>

      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {isRegister ? 'Register' : 'Sign In'}
              </h2>
              <button
                onClick={toggleSignInModal}
                className="absolute top-0 right-0 text-gray">
                <FiX className="text-lg" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={isRegister ? handleRegister : handleSignIn}>
              <div>
                <label className="block text-sm font-medium text-gray">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray rounded-md shadow-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray rounded-md shadow-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray rounded-md shadow-sm"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              {error && (
                <div className="text-yellow text-sm mb-4">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="text-green text-sm mb-4">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue/70 text-white px-4 py-2 rounded-md hover:bg-blue/90"
              >
                {isRegister ? 'Register' : 'Sign In'}
              </button>
            </form>

            <p className="text-sm mt-4 text-center">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={switchToRegister}
                className="text-blue/90 font-semibold ml-1 focus:outline-none"
              >
                {isRegister ? 'Sign In' : 'Register'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
