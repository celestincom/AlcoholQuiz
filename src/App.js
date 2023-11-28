import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Care este activitatea ta preferată într-o seară relaxantă?",
      answers: [
        { text: "Citit o carte", isWine: true},
        { text: "Vizionat un film sau serial", isVodka: true },
        { text: "Ascultat muzică", isWhiskey: true },
        { text: "Plimbare în natură", isBeer: true },
      ],
    },
    {
      question: "Ce fel de vacanță preferi?",
      answers: [
        { text: "O excursie într-un oraș istoric", isWine: true },
        { text: "Relaxare pe o plajă tropicală", isVodka: true },
        { text: "Aventură în munți", isWhiskey: true },
        { text: "Călătorie culturală prin Europa", isBeer: true },
      ],
    },
    {
      question: "Care este mâncarea ta preferată?",
      answers: [
        { text: "Pizza", isWine: true },
        { text: "Sushi", isVodka: true },
        { text: "Biftek la grătar", isWhiskey: true },
        { text: "Paste", isBeer: true },
      ],
    },
    {
      question: "Într-un grup social, ești mai degrabă...",
      answers: [
        { text: "Ascultător", isWine: true},
        { text: "Comunicativ", isVodka: true },
        { text: "Observator", isWhiskey: true },
        { text: "Lider", isBeer: true },
      ],
    },
    {
      question: "La o petrecere, preferi să...",
      answers: [
        { text: "Rămâi într-un colț și să observi", isWine: true},
        { text: "Socializezi cu cât mai mulți oameni", isVodka: true },
        { text: "Dansezi pe ringul de dans", isWhiskey: true },
        { text: "Participi la conversații interesante", isBeer: true },
      ],
    },
    {
      question: "Alegi să-ți petreci timpul liber...",
      answers: [
        { text: "Cu prietenii", isWine: true},
        { text: "Singur", isVodka: true },
        { text: "Cu familia", isWhiskey: true },
        { text: "Cu partenerul de viață", isBeer: true },
      ],
    },
    {
      question: "Dacă ai câștiga la loterie, primul lucru pe care l-ai cumpăra ar fi...",
      answers: [
        { text: "O călătorie în jurul lumii", isWine: true},
        { text: "O casă nouă", isVodka: true },
        { text: "O mașină de lux", isWhiskey: true },
        { text: "Obiecte de artă valoroase", isBeer: true },
      ],
    },
    {
      question: "Care este hobby-ul tău preferat?",
      answers: [
        { text: "Pictura sau desenul", isWine: true},
        { text: "Sporturile extreme", isVodka: true },
        { text: "Gătitul", isWhiskey: true },
        { text: "Jocurile de strategie", isBeer: true },
      ],
    },
    {
      question: "În situații de stres, ești mai probabil să...",
      answers: [
        { text: "Meditezi sau faci yoga", isWine: true},
        { text: "Reacționezi impulsiv", isVodka: true },
        { text: "Cauti soluții logice", isWhiskey: true },
        { text: "Ceri sfatul prietenilor", isBeer: true },
      ],
    },
    {
      question: "Ce calitate apreciezi cel mai mult la ceilalți?",
      answers: [
        { text: "Empatia", isWine: true},
        { text: "Onestitatea", isVodka: true },
        { text: "Inteligența", isWhiskey: true },
        { text: "Loialitatea", isBeer: true },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [wine, setWine] = useState(0);
  const [vodka, setVodka] = useState(0);
  const [whiskey, setWhiskey] = useState(0);
  const [beer, setBeer] = useState(0);



  const handleAnswerClick = (isWine, isVodka, isWhiskey, isBeer) => {
    // check score
    if (isWine) setWine(wine + 1);
    if (isVodka) setVodka(vodka + 1);
    if (isWhiskey) setWhiskey(whiskey + 1);
    if (isBeer) setBeer(beer + 1);


    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setWine(0);
    setVodka(0);
    setWhiskey(0);
    setBeer(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="Screen">
      <div className="App">  
        {isQuizOver ? (
          <ScoreView handleResetClick={handleResetClick} wine={wine} vodka={vodka} whiskey={whiskey} beer={beer} />
        ) : (        
          <QuizView
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerClick={handleAnswerClick}
          />
         )} 
      </div>
    </div>
  );
}

export default App;
