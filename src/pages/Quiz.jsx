import { useState } from 'react';
import { motion } from 'framer-motion';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of anti-doping rules?",
      options: [
        "To protect clean athletes and maintain fair competition",
        "To make sport more exciting",
        "To create more rules",
        "To increase competition"
      ],
      correct: 0
    },
    {
      question: "How long before competition should athletes check their medications?",
      options: [
        "24 hours",
        "1 week",
        "1 month",
        "3 months"
      ],
      correct: 2
    },
    {
      question: "What should athletes do if they need to take medication?",
      options: [
        "Take it without checking",
        "Ask their coach",
        "Check the prohibited list and consult a doctor",
        "Skip the medication"
      ],
      correct: 2
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Anti-Doping Quiz</h1>
        <p className="text-xl text-gray-600">Test your knowledge about clean sport</p>
      </motion.div>

      {!showResult ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="game-card"
        >
          <div className="mb-8">
            <div className="text-sm text-gray-600 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-500 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="game-card text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }}
            className="btn-primary"
          >
            Try Again
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Quiz;