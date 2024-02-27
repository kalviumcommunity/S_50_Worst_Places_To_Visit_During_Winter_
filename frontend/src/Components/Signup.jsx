import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const setCookies = (email, username, password, id) => {
    Cookies.setItem('email', email);
    Cookies.setItem('username', username);
    Cookies.setItem('password', password);
    Cookies.setItem('id', id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Username: formData.Username,
      Email: formData.Email,
      Password: formData.Password,
    };

    axios
      .post('http://localhost:3000/users', userData)
      .then((response) => {
        console.log("Dtaa",response.data);
        setCookies(response.data.Email, response.data.Username, response.data.Password);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="list border border-black max-w-md mx-auto mt-10 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">User Signup </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
\        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
