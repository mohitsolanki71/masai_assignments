import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const changeCounter = (value)=>{

    setCount(count + value);
  };

  const Double = ()=>{

    setCount( count *2);
  };

  return (
    <div className="App">
      <h1>Counter :{count} </h1>

      <div>
        <button className="button" onClick={()=> changeCounter(1)}>Add 1</button>
        <button className="button" onClick={()=> changeCounter(-1)}>Delete 1</button>
        <button className="button" onClick={Double}>Double</button>
      </div>
    </div>
  );
}

export default App;
