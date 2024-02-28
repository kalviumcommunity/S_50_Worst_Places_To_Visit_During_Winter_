import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Update = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    places: '',
    avgWinterTemp: '',
    snowfall: '',
    winterHazard: '',
    travelAdvisories: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const cookieData = {
    id: Cookies.get('id')
  };

  useEffect(() => {
    setFormData({
      ...formData,
      email: cookieData.email || '',
      username: cookieData.username || '',
      password: cookieData.password || '',
    });
  }, []);
  
  

  const winterData = {
    Places: formData.places,
    AvgWinterTemp: formData.avgWinterTemp,
    Snowfall: formData.snowfall,
    WinterHazard: formData.winterHazard,
    TravelAdvisories: formData.travelAdvisories,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    console.log(winterData)
    axios.put(`http://localhost:3000/posts/${cookieData.id}`, winterData)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Internal Server Error');
      });
  };

  return (
    <div className="list border border-black max-w-md mx-auto mt-10 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Form</h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="places" className="block mb-1">
            Places:
          </label>
          <input
            type="text"
            id="places"
            name="places"
            value={formData.places}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="avgWinterTemp" className="block mb-1">
            Average Winter Temperature (°C):
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="°C"
              id="avgWinterTemp"
              name="avgWinterTemp"
              value={formData.avgWinterTemp}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="snowfall" className="block mb-1">
            Snowfall:
          </label>
          <input
            type="text"
            id="snowfall"
            name="snowfall"
            value={formData.snowfall}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="winterHazard" className="block mb-1">
            Winter Hazard:
          </label>
          <input
            type="text"
            id="winterHazard"
            name="winterHazard"
            value={formData.winterHazard}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="travelAdvisories" className="block mb-1">
            Travel Advisories:
          </label>
          <input
            type="text"
            id="travelAdvisories"
            name="travelAdvisories"
            value={formData.travelAdvisories}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
