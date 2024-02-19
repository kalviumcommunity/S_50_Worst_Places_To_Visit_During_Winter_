import { Link } from "react-router-dom";
import React from 'react';

function Home() {
  return (
    <div className="main login-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 text-white">
      <h1 className="mt-10 font-bold text-4xl mb-2 text-gray-800">Winter Wonderland Destinations</h1>
      <p className="text-lg mb-6 text-gray-700 max-w-md text-center">
        Explore one person's curated list of the worst places to visit during winter. 
        From icy tundras to desolate landscapes, discover the destinations that might not be ideal for your next winter getaway.
      </p>
      <div className="form-container flex items-center">
        <Link to="/signup" className="but1 btn-signup bg-teal-400 hover:bg-teal-600 px-6 py-3 mr-4 rounded-full">Sign Up</Link>
        <Link to="/signin" className="but2 btn-signin bg-indigo-400 hover:bg-indigo-600 px-6 py-3 rounded-full">Sign In</Link>
      </div>
    </div>
  );
}

export default Home;