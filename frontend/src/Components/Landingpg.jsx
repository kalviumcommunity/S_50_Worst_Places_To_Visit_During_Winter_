import { Link } from "react-router-dom";
import React from 'react';
import {
  APP_NAME,
  SITE_DESCRIPTION,
  GetStarted,
  Login
} from "./constants";

function Landingpg() {
  return (
    <div className="main login-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 text-white">
      <h1 className="mt-10 font-bold text-4xl mb-2 text-gray-800">{APP_NAME}</h1>
      <p className="text-lg mb-6 text-gray-700 max-w-md text-center">{SITE_DESCRIPTION}</p>
      <div className="form-container flex items-center">
        <Link to="/signup" className="but1 btn-signup bg-teal-400 hover:bg-teal-600 px-6 py-3 mr-4 rounded-full">{GetStarted}</Link>
        <Link to="/Login" className="but1 btn-signup bg-teal-400 hover:bg-teal-600 px-6 py-3 mr-4 rounded-full">{Login}</Link>
      </div>
    </div>
  );
}

export default Landingpg;
