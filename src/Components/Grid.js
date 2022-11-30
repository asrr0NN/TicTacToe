import React,{useEffect, useRef,useState} from 'react'
import { Cross, Zero } from './GetInfo';

export default function Grid({toggle,updateToggle,player1,player2}) {

  const matrixDefaultValue=Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => " "));

  const [matrix, setMatrix] = useState(
    matrixDefaultValue
  );
  let winner=0

  const [count,setcount]=useState(1);

  const onChangeFun = (r, c) => {

    const tmp = [...matrix];
    if (tmp[r][c] === " ") {
      setcount(count+1);
      tmp[r][c] = toggle;
      setMatrix(tmp);
      checkHorizontally(r, c);
      checkVertically(r,c);
      checkDiagonally(r,c);
      updateToggle();

      
      if(count==9 && !winner){
        alert("draw");
        setMatrix(matrixDefaultValue);
        setcount(1);
      }
    
    }
  };

  const checkHorizontally = (r, c) => {
    let count = 0;
    for (let i = c; i < matrix[r].length; i++) {
      if (matrix[r][i].key === toggle.key) {
        count++;
      }
    }
    for (let i = c-1; i >= 0; i--) {
      if (matrix[r][i].key === toggle.key) {
        count++;
      }
    }
    if (count == 3) {

      if(toggle.key==1){
        alert("Winner is "+player1)
      }
      if(toggle.key==2){
        alert("Winner is "+player2)
      }
      winner++;
      setMatrix(matrixDefaultValue);
      setcount(1);
    }
  };

  const checkVertically = (r, c) => {
    let count = 0;
    for (let i = r; i < matrix.length; i++) {
      if (matrix[i][c].key === toggle.key) {
        count++;
      }
    }
    for (let i = r-1; i >= 0; i--) {
      if (matrix[i][c].key === toggle.key) {
        count++;
      }
    }
    if (count == 3) {
      if(toggle.key==1){
        alert("Winner is "+player1)
      }
      if(toggle.key==2){
        alert("Winner is "+player2)
      }
      winner++
      setMatrix(matrixDefaultValue);
      setcount(1);
    }
  };

  const checkDiagonally = (r, c) => {
    let count = 0;
    // left-down
    for (let i = r,j=c; i < matrix.length && j>=0; i++,j--) {
      if (matrix[i][j].key === toggle.key) {
        count++;
      }
    }
    // right  up
    for (let i = r-1,j=c+1; i>=0 &&j< matrix.length; i--,j++) {
      if (matrix[i][j].key === toggle.key) {
        count++;
      }
    }
    if (count == 3) {
      if(toggle.key==1){
        alert("Winner is "+player1)
      }
      if(toggle.key==2){
        alert("Winner is "+player2)
      }
      winner++;
      setMatrix(matrixDefaultValue);
      setcount(1);
    }
    count=1;
    // right down    
    for (let i = r+1,j=c+1 ; i<matrix.length && j<matrix.length ; i++,j++) {
      if (matrix[i][j].key === toggle.key) {
        count++;
      }
    }

    // left  up
    for (let i = r-1,j=c-1 ; i>=0 && j>=0 ; i--,j--) {
      if (matrix[i][j].key === toggle.key) {
        count++;
      }
    }
    if (count == 3) {
      if(toggle.key==1){
        alert("Winner is "+player1)
      }
      if(toggle.key==2){
        alert("Winner is "+player2)
      }
      winner++;
      setMatrix(matrixDefaultValue);
      setcount(1);
    }
  };

  return (
    <div className="gridContainer">
        <div className="grid">
          <div className="gridRow">
            <GridBtn classValue="gridbtn rborder" r={0} c={0} value={matrix[0][0]} onchangefun={onChangeFun}/>
            <GridBtn classValue="gridbtn" r={0} c={1} value={matrix[0][1]} onchangefun={onChangeFun}/>
            <GridBtn classValue="gridbtn lborder" r={0} c={2} value={matrix[0][2]} onchangefun={onChangeFun}/>
          </div>
          <div className="gridRow">
            <GridBtn classValue="gridbtn rborder tborder bborder" r={1} c={0} value={matrix[1][0]} onchangefun={onChangeFun}/>
            <GridBtn classValue='gridbtn tborder bborder' r={1} c={1} value={matrix[1][1]} onchangefun={onChangeFun}/>
            <GridBtn classValue="gridbtn lborder tborder bborder" r={1} c={2} value={matrix[1][2]} onchangefun={onChangeFun}/>
          </div>
          <div className="gridRow">
            <GridBtn classValue="gridbtn rborder" r={2} c={0} value={matrix[2][0]} onchangefun={onChangeFun}/>
            <GridBtn classValue="gridbtn" r={2} c={1} value={matrix[2][1]} onchangefun={onChangeFun}/>
            <GridBtn classValue="gridbtn lborder" r={2} c={2} value={matrix[2][2]} onchangefun={onChangeFun}/>
          </div>
        </div>   
    </div>
  );
}

function GridBtn(param){

  const handelevent=()=>{
    param.onchangefun(param.r,param.c);
  }
  

  return (
    <div className={param.classValue} onClick={handelevent}>
      <span>{param.value}</span>
    </div>
  );
}

