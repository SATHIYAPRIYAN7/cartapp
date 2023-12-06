import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Categories from '../Data/Categories';

function Home() {
  const [cats, setCats] = useState("");
  const [ques, setQues] = useState("");
  const [diff, setDiff] = useState("");

  const navigate=useNavigate();

  function handleClick() {
   
    navigate("/quiz")
  }

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "row-reverse", justifyContent: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', backgroundColor: "rgb(0, 0, 0,0.4)", borderRadius: "16px", margin: "0px 10px", width: "900px" }}>
        <h1 style={{ color: "white", margin: "10px 0px" }}>Select Question</h1>
        <div style={{ width: "90%", display: 'flex', flexDirection: "column", margin: "auto", border: "1px solid black", padding: "10px", paddingBottom: "20px", borderRadius: "10px" }}>
          <label htmlFor='cat' style={{ margin: "3px 0px", marginLeft: "20px", color: "white", fontSize: "17px", fontWeight: 'bold', marginBottom: "10px" }}>Categories</label>
          <select id='cat' style={{ width: "100%", height: "40px", borderRadius: "15px", border: "0px solid gray", fontSize: "15px", paddingLeft: "5px" }} onChange={(e) => setCats(e.target.value)}>
            {Categories.map((e) => (
              <option key={e.value} value={e.value}>
                {e.category}
              </option>
            ))}
          </select>
        </div>
        <div style={{ width: "90%", display: 'flex', flexDirection: "column", margin: "auto", margin: "50px 0px", border: "1px solid black", padding: "10px", paddingBottom: "20px", borderRadius: "10px" }}>
          <label htmlFor='val' style={{ margin: "3px 0px", marginLeft: "20px", color: "white", fontSize: "17px", fontWeight: 'bold', marginBottom: "10px" }}>Questions</label>
          <select id='val' style={{ width: "100%", height: "40px", borderRadius: "15px", border: "0px solid gray", fontSize: "15px", paddingLeft: "5px" }} onChange={(e) => setQues(e.target.value)}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div style={{ width: "90%", display: 'flex', flexDirection: "column", margin: "auto", marginBottom: "50px", border: "1px solid black", padding: "10px", paddingBottom: "20px", borderRadius: "10px" }}>
          <label htmlFor='difficulty' style={{ margin: "3px 0px", marginLeft: "20px", color: "white", fontSize: "17px", fontWeight: 'bold', marginBottom: "10px" }}>Difficulty</label>
          <select id='difficulty' style={{ width: "100%", height: "40px", borderRadius: "15px", border: "0px solid gray", fontSize: "15px", paddingLeft: "5px" }} onChange={(e) => setDiff(e.target.value)}>
            <option value="any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px", width: "200px", padding: '16px', borderRadius: "10px" }} onClick={handleClick}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Home;
