import React from 'react';
import img16 from '../assets/img16.jpg';
const Contactus = () => {
  return (
    <div>
      <div className="h-[400px] bg-color2 grid content-center space-y-4">
        <h1 className="cinzel-font text-3xl md:text-4xl lg:text-6xl font-bold ml-20">Contact Us</h1>
        <p className="ml-[80px]">
          There are people who can’t start their day without having a freshly <br />
          brewed cup of coffee and we understand them.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center md:space-x-8 mt-20 mx-auto max-w-5xl">
        
        <div className="bg-white shadow-md rounded-lg p-8 w-50 h-[500px] md:w-1/2">
          <h2 className="text-4xl cormorant-garamond-light mb-6">Write Us</h2>
          <form className="space-y-4">
            
            <div>
              <input
                type="text"
                className="w-full px-4 py-3 border border-vanilla rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full px-4 py-3 border border-vanilla rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-3 border border-vanilla rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brown text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <img
            src={img16}
            alt="Contact Us"
            className="w-70 h-90 object-cover rounded-lg"
          />
        </div>
      </div>
    
      <div className="flex flex-col md:flex-row justify-start space-y-8 md:space-y-0 md:space-x-14 py-20 mt-40 bg-color2">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold text-left mb-8 cinzel-font">Coffo</h2>
          <p className='text-sm'>There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
        </div>
              <div className="w-full md:w-1/3 text-xl font-sans">
                <h3>Contact Us</h3>
                <p className='text-sm'>555 Arabica Springs Rd, Crawford, TN 38554</p>

                <h3 className="mt-4">Call Us</h3>
                <p className='text-sm'>800.275.8777</p>

                <h3 className="mt-4">Email Us</h3>
                <p className='text-sm'>coffo@company.com</p>
              </div>

  <div className="w-full md:w-1/4">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
      <p className="mb-2 text-xs">Sign up with your email address to receive news and updates</p>
      <div className="flex">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="px-2 py-2 w-full border rounded-l-md border-gray text-sm"
        />
        <button className="bg-brown text-white px-4 py-2 rounded-r-md text-xs">SignUp</button>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Contactus;
