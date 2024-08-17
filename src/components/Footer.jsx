import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 mt-28">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()}E-commerce Store. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </li>
        </ul>
        <div className="text-sm">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
