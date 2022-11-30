import React, { useState } from "react";

export default function GetInfo({ toggle,updatePlayerName }) {

  const handelonchange=(n,e)=>{
    if(n==1){
      console.log(e.target.value);
      updatePlayerName(n,e.target.value)
    }
    if(n==2){
      console.log(e.target.value);
      updatePlayerName(n,e.target.value)
    }
  }

  return (
    <div className="player__wrapper">
      <div className="div__player">
        <h2>Player 1</h2>
        <input type="text" placeholder="Name" onChange={(e)=>handelonchange(1,e)}></input>
        <Zero />
        {toggle.key == 1 ? <h2>__</h2> : ""}
      </div>
      <div className="div__player">
        <h2>Player 2</h2>
        <input type="text"  placeholder="Name" onChange={(e)=>handelonchange(2,e)} ></input>
        <Cross />
        {toggle.key == 2 ? <h2 className="myTurn">__</h2> : ""}
      </div>
    </div>
  );
}

export function Zero() {
  return <div className="zero" key={1}></div>;
}

export function Cross() {
  return (
    <div className="cross" key={2}>
      <span className="fcross"></span>
      <span className="scross"></span>
    </div>
  );
}
