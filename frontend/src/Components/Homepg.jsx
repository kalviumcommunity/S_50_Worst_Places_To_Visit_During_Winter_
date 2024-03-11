import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';
import img from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://s-50-worst-places-to-visit-during-winter.onrender.com',
});

function Homepg() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [selectedUsername, setSelectedUsername] = useState("");
  const navigate = useNavigate();

  // const setCookie = (userData) => {
  //   Cookies.set('userData', JSON.stringify(userData));
  // };

  const handleLogout = () => {
    Cookies.remove('userData');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();

    const userDataFromCookie = Cookies.get('userData');
    if (userDataFromCookie) {
      setUser(JSON.parse(userDataFromCookie));
    }
  }, []);

  const handleSelectChange = (event) => {
    setSelectedUsername(event.target.value);
  };

  const filteredData = selectedUsername
    ? data.filter((entry) => entry.Users === selectedUsername)
    : data;


  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setData((prevData) => prevData.filter((entry) => entry._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
      setError('Error deleting data. Please try again.');
    }
  };

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <nav className="h-20 border border-black flex items-center sticky top-0 bg-white">
       
          <div className="logo w-56 h-14 mt-5 ml-5">
            <img src={img} alt="Logo" />
          </div>
     
        <input
          type="text"
          placeholder="Find the list of.."
          className="rounded h-8 border border-slate-600 mx-auto pl-2"
        />
        <h2 className="text-blue-500 mr-10">{`Welcome, ${user ? user.Username : ''}`}</h2>
        <Link to="/Makelist">
          <button className="rounded border border-black text-white button mr-20 h-9 w-24">
            Make a list
          </button>
        </Link>
      </nav>

      <div className="bgimg border border-black h-72 flex items-center justify-center"></div>

      <select
  className="w-96 h-12 border border-black pl-2 mt-10 ml-20 hover:shadow-lg duration-500"
  onChange={handleSelectChange}
  value={selectedUsername}
>
  <option className="bg-white text-black font-mono border border-black" key="all" value="">
    All
  </option>
  {data.map((entry) => (
    <option className="bg-white text-black" key={entry.Users} value={entry.Users}>
      {entry.Users}
    </option>
  ))}
</select>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 w-2/4 mx-auto items-center justify-center">
        {filteredData.map((entry, index) => (
          <div key={index} className="text-center border border-black p-4 rounded-md">
            <p>User: {entry.UserId}</p>
            <p>Places: {entry.Places}</p>
            <p>AvgWinterTemp: {entry.AvgWinterTemp}</p>
            <p>Snowfall: {entry.Snowfall}</p>
            <p>WinterHazard: {entry.WinterHazard}</p>
            <p>TravelAdvisories: {entry.TravelAdvisories}</p>

            <Link to="/update">
              <button onClick={() => setCookie({ id: entry._id, username: entry.Users })} className="w-16 border border-black bg-green-600 rounded">
                update
              </button>
            </Link>
            <button onClick={() => handleDelete(entry._id)} className="w-16 bg-black text-white rounded ml-10">
              delete
            </button>
          </div>
        ))}
        <button onClick={handleLogout} className="rounded bg-blue-600 logoutbtn sticky bottom-5">
          log out
        </button>
      </div>
    </div>
  );
}

export default Homepg;
