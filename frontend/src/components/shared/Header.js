import React from "react";

export default function Header(props) {
  const { isAuthenticated, link, title } = props;
  return (
    <header class="bg-white fixed top-0 w-full shadow-md">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-gray-800">
            AssetWise.io
          </a>
          <div class="hidden md:flex items-center space-x-4">
            <a href="/" class="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/about" class="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="/contact" class="text-gray-800 hover:text-blue-600">
              Contact
            </a>
            {isAuthenticated ? (
              <a href={link} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                {title}
              </a>
            ) : (
              <a href="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Sign In
              </a>
            )}
          </div>
          <div class="md:hidden flex items-center">
            <button class="text-gray-800 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
       
      </nav>
    </header>
  );
}
