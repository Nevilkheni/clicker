import React, { useState } from 'react';
import './App.css';
// import AddIcon from '@mui/icons-material/Add';      

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (num) => {
    setCount(prevCount => prevCount + num);
  };
  const handleReset = () => {
    setCount(0);
  }
  return (
    <>
      <div className="App">
        <div className='main'>
          <h1>{count}</h1>
          <div className='btn'>
            <button onClick={() => handleClick(1)} AddIcon> + </button>
            <button onClick={() => handleClick(-1)}> - </button>
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
