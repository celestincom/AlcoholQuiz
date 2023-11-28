import React from "react";
import "./QuizView.css";

const QuizView = ({ questions, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>
            Intrebarea {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isWine, isVodka, isWhiskey, isBeer  }) => (
          <button key={text} onClick={() => handleAnswerClick(isWine, isVodka, isWhiskey, isBeer)}>
            {text}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizView;
