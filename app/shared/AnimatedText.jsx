import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export const AnimatedTitle = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`text-4xl font-bold mb-8 ${className}`}
    >
      {text}
    </motion.h1>
  );
};
