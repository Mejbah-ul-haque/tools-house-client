import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
  const [tools, setTools] = useState([]);
  
  useEffect(()=>{
    fetch('tools.json')
    .then(res => res.json())
    .then(data => setTools(data));
    
  }, [])
  
  return (
    <div className="container my-24 mx-auto ">
      <h1>this is tools</h1>
      <div className="grid grid-rows-1 grid-flow-col gap-8">
      {
        tools.slice(0, 3).map(tool =><Tool 
          key={tool._id}
          tool={tool}
          ></Tool>)
      }
      </div>
    </div>
  );
};

export default Tools;