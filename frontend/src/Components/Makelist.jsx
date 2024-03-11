import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Makelist = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Places: '',
    AvgWinterTemp: '',
    Snowfall: '',
    WinterHazard: '',
    TravelAdvisories: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataFromCookie = Cookies.get('userData');

    const user = userDataFromCookie ? JSON.parse(userDataFromCookie) : null;

    if (user) {
      console.log(user.Username)
      const winterData = {
        Places: formData.Places,
        AvgWinterTemp: formData.AvgWinterTemp,
        Snowfall: formData.Snowfall,
        WinterHazard: formData.WinterHazard,
        TravelAdvisories: formData.TravelAdvisories,
        UserId: user.Username 
      };

      console.log('winterData:', winterData);
      console.log('name:', user.Username);

      axios.post('http://localhost:3000/posts', winterData)
        .then(response => {
          console.log('Response:', response.data);
          navigate("/homepg");
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log('User data not found in cookies');
    }

  };

  return (
    <div className="list border border-black max-w-md mx-auto mt-10 p-6  rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Winter Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="places" className="block mb-1">Places:</label>
          <input
            type="text"
            id="places"
            name="Places"
            value={formData.Places}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="avgWinterTemp" className="block mb-1">Average Winter Temperature (°C):</label>
          <div className="relative">
            <input
              type="text"
              placeholder='°C'
              id="avgWinterTemp"
              name="AvgWinterTemp"
              value={formData.AvgWinterTemp}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="snowfall" className="block mb-1">Snowfall:</label>
          <input
            type="text"
            id="snowfall"
            name="Snowfall"
            value={formData.Snowfall}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="winterHazard" className="block mb-1">Winter Hazard:</label>
          <input
            type="text"
            id="winterHazard"
            name="WinterHazard"
            value={formData.WinterHazard}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="travelAdvisories" className="block mb-1">Travel Advisories:</label>
          <input
            type="text"
            id="travelAdvisories"
            name="TravelAdvisories"
            value={formData.TravelAdvisories}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default Makelist;
