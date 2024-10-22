import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function Key({ label, clickHandler, className = "" }) {
  return (
    <button className={`ButtonKeys ${className}`} onClick={clickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const items = [
    "Being On Time",               // 1
    "Making An Effort",            // 2
    "Being High Energy",           // 3
    "Having A Positive Attitude",  // 4
    "Being Passionate",            // 5
    "Using Good Body Language",     // 6
    "Being Coachable",             // 7
    "Doing A Little Extra",        // 8
    "Being Prepared",              // 9
    "Having A Strong Work Ethic"   // 0
  ];

  const itemClickHandler = (index) => {
    setDisp(items[index]);
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    setDisp('ALDYNE RONQUILLO'); 
  };

  return (
    <div className="App">
      <h1>ALDYNE RONQUILLO - IT3A</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>

        <div className="ButtonsContainer">
          {items.map((item, index) => (
            <Key key={index} label={index === 9 ? '0' : index + 1} clickHandler={() => itemClickHandler(index)} />
          ))}
          <Key label={'RESET'} clickHandler={resetClickHandler} className="ClearButton" />
          <Key label={'NAME'} clickHandler={nameClickHandler} className="OperatorButton" />
        </div>
      </div>
    </div>
  );
}

export default App;
