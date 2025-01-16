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
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const items = [
    "Being On Time",               // 1
    "Making An Effort",            // 2
    "Being High Energy",           // 3
    "Having A Positive Attitude",  // 4
    "Being Passionate",            // 5
    "Using Good Body Language",    // 6
    "Being Coachable",             // 7
    "Doing A Little Extra",        // 8
    "Being Prepared",              // 9
    "Having A Strong Work Ethic"   // 0
  ];

  const itemClickHandler = (item) => {
    setDisp(item);
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    setDisp('ALDYNE RONQUILLO'); 
  };


  const whatILearnedHandler = () => {
    setDisp('I learned the basics of how to install and use React. I also learned how to organize my tasks using the Trello board. Additionally, I learned how to create an SRS for a project I\'m working on. I also learned what should be done when creating Test Documents.');
  };

  const whatIWantToLearnHandler = () => {
    setDisp('As I continue learning various skills in Information Technology, I would like to deepen my knowledge of React, Java, HTML, and CSS. I also want to learn how professionals approach and solve problems when creating websites. Additionally, I aim to explore different fields within IT to enhance my skills and better prepare myself for the industry where I can make the most impact.');
  };

  const howWillILearnHandler = () => {
    setDisp('I will do my best to follow everything that my teachers expect us to adopt. I will also use my free time to expand my skills. I plan to make the most of my time in both lectures and laboratory sessions to improve my abilities and avoid making the same mistakes I made during the first semester.');
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
            <Key key={index} label={index === 9 ? '0' : index + 1} clickHandler={() => itemClickHandler(item)} />
          ))}
          <Key label={'RESET'} clickHandler={resetClickHandler} className="ClearButton" />
          <Key label={'NAME'} clickHandler={nameClickHandler} className="OperatorButton" />

          <Key label={'What I Learned?'} clickHandler={whatILearnedHandler} />
          <Key label={'What I Want to Learn?'} clickHandler={whatIWantToLearnHandler} />
          <Key label={'How Will I Learn?'} clickHandler={howWillILearnHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
