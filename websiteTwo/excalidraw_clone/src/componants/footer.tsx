import React from "react";
import { useState, useEffect } from "react";
import {
  FaMinus,
  FaPlus,
  FaShareAlt,
  FaBook,
  FaUndo,
  FaRedo,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between p-4"
      >
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaMinus className="text-white" />
          </button>
          <span className="text-sm">50%</span>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaPlus className="text-white" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaUndo className="text-white" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaRedo className="text-white" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition">
            <FaShareAlt className="text-white" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition">
            <FaBook className="text-white" />
            <span>Library</span>
          </button>
        </div>
      </motion.section>
    </footer>
  );
};
