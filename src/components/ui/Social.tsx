"use client";
import { FaInstagram } from "react-icons/fa";

const Social: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto py-4">
      <a
        href="https://www.instagram.com/museu_tecudc"
        target="_blank"
        className="text-4xl text-gray-900 dark:text-white transition-all duration-300 hover:text-pink-500 hover:drop-shadow-[0_0_15px_#ff00c8]"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;
