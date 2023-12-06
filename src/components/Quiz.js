import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'


function reducer(state,action){

  switch(action){

    case "increment":
      return state +1;
      case "decrement":
        return state -1
  }

}

const initialState=0;


function Quiz() {

const [state,dispatch]=useReducer(reducer,initialState);






  useEffect(()=>{
    

    async function getquiz(){
      const res=await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy")
      const data=await res.json();

      console.log(data);
    }

    getquiz();
  },[])
  return (
  <div>
    <h1>{state}</h1>
    <button onClick={()=> dispatch("increment")}>+</button>
    <button>-</button>
  </div>
  )
}

export default Quiz




