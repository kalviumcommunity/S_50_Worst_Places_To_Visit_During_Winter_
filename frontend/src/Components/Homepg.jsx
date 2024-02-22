import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dummyData from './data.json';
import img from '../assets/logo.png';

function Homepg() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <nav className="h-20 border border-black flex items-center sticky top-0 bg-white">
        <div className='logo w-56 h-14 mt-5 ml-5'><img src={img} alt="Logo" /></div>
        <input type="text" placeholder="Find the list of.." className="rounded h-8 border border-slate-600 mx-auto pl-2" />
        <button className="rounded border border-black text-white button mr-20 h-9 w-24">Make a list</button>
        <button className="rounded border border-black text-white button mr-10 h-9 w-20">Sign up</button>
      </nav>
      
      <div className="bgimg border border-black h-72 flex items-center justify-center">
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {data.map((entry) => (
          <div key={entry.ID} className="text-center border border-black p-4 rounded-md">
            <p className="text-xl font-bold mb-2">ID: {entry.ID}</p>
            <p>Places: {entry.Places}</p>
            <p>AvgWinterTemp: {entry.AvgWinterTemp}</p>
            <p>Snowfall: {entry.Snowfall}</p>
            <p>WinterHazard: {entry.WinterHazard}</p>
            <p>TravelAdvisories: {entry.TravelAdvisories}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepg;
