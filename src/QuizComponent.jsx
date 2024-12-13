import { useState,useEffect } from "react";
import QuestionCard from "./QuestionCard";

const questions = [
        {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          answer: "Pacific Ocean"
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          answer: "Leonardo da Vinci"
        },
        {
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "O2", "H2"],
          answer: "H2O"
        },
        {
          question: "Which country is the largest by land area?",
          options: ["China", "Canada", "Russia", "United States"],
          answer: "Russia"
        },
        {
          question: "What is the currency of Japan?",
          options: ["Yuan", "Won", "Yen", "Ringgit"],
          answer: "Yen"
        },
        {
          question: "Which element has the atomic number 1?",
          options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
          answer: "Hydrogen"
        },
        {
          question: "What is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          answer: "Mount Everest"
        },
        {
          question: "What is the main ingredient in guacamole?",
          options: ["Tomato", "Avocado", "Onion", "Lime"],
          answer: "Avocado"
        },
        {
          question: "Who was the first president of the United States?",
          options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
          answer: "George Washington"
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          answer: "Mercury"
        }
      ]     

      const Quiz = () => {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showScore, setShowScore] = useState(false);
        const [timeLeft, setTimeLeft] = useState(30);
      
        useEffect(() => {
          if (showScore) return; 
          setTimeLeft(30);
      
          // Start the timer for the current question
          const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(timer);
                handleAnswerClick(null); // Automatically move to the next question when time runs out
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
      
  //clear the intervals
          return () => clearInterval(timer);
        }, [currentQuestion, showScore]);
      
        const handleAnswerClick = (selectedOption) => {
          if (selectedOption !== null && selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
          }
      
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true); // Show score after the last question
          }
        };
      
        const restartQuiz = () => {
          setCurrentQuestion(0);
          setScore(0);
          setShowScore(false);
        };
      
        return (
          <div style={{ backgroundColor: "brown" }}>
            {showScore ? (
              <div>
                <div>
                  <h2>Your Score: {score} / {questions.length}</h2>
                  <br />
                </div>
                <div>
                  <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
              </div>
            ) : (
              <div>
                <h3>Question: {currentQuestion + 1} / {questions.length}</h3>
                {/* //display the remaining time of question */}
                <h4>Time Left: {timeLeft} seconds</h4>

                <QuestionCard
                  question={questions[currentQuestion].question}
                  options={questions[currentQuestion].options}
                  handleAnswerClick={handleAnswerClick}
                />
              </div>
            )}
          </div>
        );
      };
      
      export default Quiz;
      
