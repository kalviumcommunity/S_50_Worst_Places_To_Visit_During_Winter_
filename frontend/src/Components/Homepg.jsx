import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const setCookie = (id) => {
  console.log(id)
   Cookies.set('id', id);
};

function Homepg() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

 
  console.log()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData((prevData) => prevData.filter(entry => entry._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
      setError('Error deleting data. Please try again.');
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="h-20 border border-black flex items-center sticky top-0 bg-white">
        <div className='logo w-56 h-14 mt-5 ml-5'><img src={img} alt="Logo" /></div>
        <input type="text" placeholder="Find the list of.." className="rounded h-8 border border-slate-600 mx-auto pl-2" />
        <Link to="/Makelist">
          <button className="rounded border border-black text-white button mr-20 h-9 w-24">Make a list</button>
        </Link>
        <Link to="/Signup">
          <button className="rounded border border-black text-white button mr-10 h-9 w-20">Sign up</button>
        </Link>
      </nav>
      
      <div className="bgimg border border-black h-72 flex items-center justify-center">
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 w-2/4 mx-auto items-center justify-center">
        {data.map((entry, index) => (
          <div key={index} className="text-center border border-black p-4 rounded-md">
            <p>Places: {entry.Places}</p>
            <p>AvgWinterTemp: {entry.AvgWinterTemp}</p>
            <p>Snowfall: {entry.Snowfall}</p>
            <p>WinterHazard: {entry.WinterHazard}</p>
            <p>TravelAdvisories: {entry.TravelAdvisories}</p>
            {/* <p>{entry._id}</p> */}
            <Link to="/update">
              <button onClick={()=>setCookie(entry._id)} className='w-16 border border-black bg-green-600 rounded'>update</button>
            </Link>
            <button onClick={() => handleDelete(entry._id)} className='w-16 bg-black text-white rounded ml-10'>delete</button>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default Homepg;
