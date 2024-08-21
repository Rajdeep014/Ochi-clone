import React from 'react';

const Footer = () => {
  return (
    
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Get to Know Us</h2>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Press Releases</li>
              <li className="mb-2">Amazon Cares</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Make Money with Us</h2>
            <ul>
              <li className="mb-2">Sell on Amazon</li>
              <li className="mb-2">Sell under Amazon Accelerator</li>
              <li className="mb-2">Become an Affiliate</li>
              <li className="mb-2">Advertise Your Products</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Amazon Payment Products</h2>
            <ul>
              <li className="mb-2">Amazon Business Card</li>
              <li className="mb-2">Shop with Points</li>
              <li className="mb-2">Reload Your Balance</li>
              <li className="mb-2">Amazon Currency Converter</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Let Us Help You</h2>
            <ul>
              <li className="mb-2">Amazon and COVID-19</li>
              <li className="mb-2">Your Account</li>
              <li className="mb-2">Your Orders</li>
              <li className="mb-2">Shipping Rates & Policies</li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Amazon.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
