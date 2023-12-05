"use client"
import React, { useState } from 'react';

const HomePage
 = () => {
  const [counter, setCount]=useState(0);

  return (
    
     <div>

      <h2>Counter: {counter}</h2>

      <button onClick={()=>setCount(counter +1)} className='btn btn-primary'> Increase</button>
      <button onClick={()=>setCount(counter -1)} className='btn btn-primary'> Decrease</button>
     </div>

  );
};

export default HomePage;
