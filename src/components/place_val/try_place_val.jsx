import React, { useState } from "react";
//import "./try_nikh.css";
import { NavLink, useNavigate } from "react-router-dom";



const questions = [
    { id: 1, question: "1. What is the denary (base 10) equivalent of 113 to the base 13 ?", answer: 185 },
    { id: 2, question: "2. What is the decimal equivalent of (64bar0.5bar?)base8", style:{'color':'green'}, answer: 351.375 },
    { id: 3, question: "3.  The decimal equivalent of ()4 is 10. what is 'a'?", style: "", answer: 2 },
    { id: 4, question: "4. Eliminate the negative digits in  ()10", style: "", answer:  29805.9 },
  ];
  

export default function Try_pv() {
    const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(7).fill(""));
  const [verification, setVerification] = useState(Array(7).fill("give it a try!"));

  function handleChange(event, index) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  function handleClick(index) {
    const newAnswers = [...answers];
    newAnswers[index] = questions[index].answer;
    setAnswers(newAnswers);
  }

  function handleVerify(index) {
    const isCorrect = parseFloat(answers[index]) === questions[index].answer;
    const newVerification = [...verification];
    newVerification[index] = isCorrect ? "Correct" : "Wrong";
    setVerification(newVerification);
  }

 return (
    <div className="top-most-div">
      <h1>Try the following problems!</h1>
      <div className="question_block">
      {questions.map((q, index) => (
  <div key={q.id}>
    <p>{q.question}</p>
    <p>{q.style && <p style={q.style}>I am rendering</p>} {/* Conditionally render the image */}</p>
    <input
      className="input_class"
      type="text"
      onChange={(e) => handleChange(e, index)}
      value={answers[index]}
    />
    <button className="input_button" onClick={() => handleClick(index)}>
      Show Answer
    </button>
    <button className="verify_button" onClick={() => handleVerify(index)}>
      Verify
    </button>
    <span className="try_span" style={verification[index] === "Correct" || verification[index] === "give it a try!" ? { 'color': 'green' } : { 'color': 'red' }}>{verification[index]}</span>
  </div>
))} 
           <h4>Want to see step by step solution?</h4>
            <button><NavLink to="/place_val/stepbystep">Click Here!</NavLink></button>
            <h4>Wanna See some more problems?</h4>
            <button><NavLink to="/place_val/moreproblems">Click Here!</NavLink></button>
            <button className="back" onClick={()=>navigate(-1)}>Back</button>
      </div>
    
    </div>
  );
}
