import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-between px-7 py-7"
    >
      {/* Logo */}
      <div className="hover:scale-105 transition-transform duration-300">
        <a href="/">
          <img className="h-12 pl-10" src="/logo.svg" alt="Logo" />
        </a>
      </div>

      {/* Right side */}
      <ul className="flex gap-6 pr-16">
        <li>
          <a
            href="#"
            className="text-white hover:scale-105 transition-transform duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:scale-105 transition-transform duration-300"
          >
            About
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
