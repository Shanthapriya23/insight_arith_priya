import React, { useState } from "react";
import "./try_nikh.css";
import { useNavigate } from "react-router-dom";

const questions = [
  { id: 1, question: "1. 1.9 x 8", answer: 15.2 },
  { id: 2, question: "2. 12 x 9", answer: 108 },
  { id: 3, question: "3. 96 x 105", answer: 10080 },
  { id: 4, question: "4. 99995 x 99994", answer: 9998900030 },
  { id: 5, question: "5. 41 x 39", answer: 1599 },
  { id: 6, question: "6. 497 x 492", answer: 244524 },
  { id: 7, question: "7. 2990 x 3010", answer: 8999900 }
];

export default function TryN() {
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
            <span className="try_span" style={verification[index]=== "Correct"|| verification[index]==="give it a try!" ? {'color':'green'}:{'color':'red'}}>{verification[index]}</span>
          </div>
        ))}
            <button className="back" onClick={()=>navigate(-1)}>Back</button>
      </div>
    
    </div>
  );
}
