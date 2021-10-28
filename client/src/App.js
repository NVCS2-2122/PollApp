import logo from './logo.svg';
import './App.css';
import Question from './Question'
import React,{useState,useEffect} from 'react'

function App() {
  const [questions,setQuestions] = useState([])
  useEffect(() => {
    const config = {
      mode:"cors"
    }
    fetch("http://localhost:8080/question")
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
      })
  },[])
  if (questions.length > 0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wildcat Poll App</h1>
      </header>
      <Question 
        title={questions[0].title}
        id={questions[0].id}
        options={questions[0].options}
      />
    </div>
  );
  else
  return (
    <h1>Loading...</h1>
  )
}

export default App;
