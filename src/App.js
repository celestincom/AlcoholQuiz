import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Care este activitatea ta preferată într-o seară relaxantă?",
      answers: [
        { text: "Citit o carte"},
        { text: "Vizionat un film sau serial", isCorrect: true },
        { text: "Ascultat muzică" },
        { text: "Plimbare în natură" },
      ],
    },
    {
      question: "Ce fel de vacanță preferi?",
      answers: [
        { text: "O excursie într-un oraș istoric" },
        { text: "Relaxare pe o plajă tropicală" },
        { text: "Aventură în munți" },
        { text: "Călătorie culturală prin Europa", isCorrect: true },
      ],
    },
    {
      question: "Care este mâncarea ta preferată?",
      answers: [
        { text: "Pizza" },
        { text: "Sushi", isCorrect: true },
        { text: "Biftek la grătar" },
        { text: "Paste" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="Screen">
      <div className="App">  
        {/* {isQuizOver ? (
          <ScoreView handleResetClick={handleResetClick} score={score} />
        ) : (         */}
          <QuizView
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerClick={handleAnswerClick}
          />
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
