import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import GetInfo, { Cross, Zero } from "./Components/GetInfo";
import Grid from "./Components/Grid";

function App() {
  const [toggle, setToggle] = useState(Zero);
  const [player1, setPlayer1Name] = useState("Player1");
  const [player2, setPlayer2Name] = useState("Player2");

  

  const updatePlayerName = (number, name) => {
    if (number == 1) {
      setPlayer1Name(name);
    }
    if (number == 2) {
      setPlayer2Name(name);
    }
  };

  const updateToggle = () => {
    if (toggle.key == 1) {
      
      setToggle(Cross);
    } else {
      setToggle(Zero);
    }

  };

  useEffect(() => {});

  return (
    <>
      <GetInfo toggle={toggle} updatePlayerName={updatePlayerName}/>
      <Grid updateToggle={updateToggle} toggle={toggle}  player1={player1} player2={player2}/>
    </>
  );
}

export default App;
