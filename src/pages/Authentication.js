import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Authentication = () => {
  // State to toggle between Login and Signup forms
  const [toggle, setToggle] = useState(true);

  // Function to handle the toggle between Login and Signup forms
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='grid h-screen place-items-center' >
      {/* Conditional rendering of Login or Signup component based on the 'toggle' state */}
      {toggle ? <Login toggleForm={handleToggle} /> : <Signup toggleForm={handleToggle} />}
    </div>
  );
};

export default Authentication;
