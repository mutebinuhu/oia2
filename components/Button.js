// Button.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ onClick, href, children, className = '', ...rest }) => {
  return (
    <a  href={href}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={` text-white font-bold py-2 px-6 rounded-3xl ${className}`}
      {...rest}
     
    >
      {children}
    </motion.button>
    </a>
  );
};

export default Button;
