import React, { useState } from 'react';
import axios from 'axios';

const Makelist = () => {
  const [formData, setFormData] = useState({
    ID: '',
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

    const winterData = {
      ID: formData.ID,
      Places: formData.Places,
      AvgWinterTemp: formData.AvgWinterTemp,
      Snowfall: formData.Snowfall,
      WinterHazard: formData.WinterHazard,
      TravelAdvisories: formData.TravelAdvisories
    };


    axios.post('http://localhost:3000/posts', winterData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="list border border-black max-w-md mx-auto mt-10 p-6  rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Winter Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block mb-1">ID:</label>
          <input
            type="number"
            id="id"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
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
