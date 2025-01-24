import React, { useState, useEffect } from "react";
import Result from "./result"; 
import React from "react";


const Body = ({state,setState}) => {
  const arr =
    "Typing is an essential skill in today's fast-paced digital world, where the ability to quickly and accurately convey thoughts, complete tasks, and communicate effectively has become a necessity. Improving this skill requires consistent practice, focus, and determination, starting with learning proper finger placement on the keyboard, maintaining good posture, and gradually increasing speed while prioritizing accuracy to avoid mistakes. All of which are crucial for efficient typing, as they help reduce fatigue, enhance productivity, and enable individuals to work more effectively in professional and personal contexts. So whether you are a student preparing for exams, a programmer writing complex code, or someone composing emails at work, dedicating time to master typing will undoubtedly pay off, as it is a skill that not only boosts confidence and efficiency but also opens doors to new opportunities, making it a valuable investment in an increasingly digital and interconnected world.";

  const words = arr.split(" ");

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTypedWord, setCurrentTypedWord] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentWordIndex >= words.length) return;

      const word = words[currentWordIndex];

      if (e.key === word[currentCharIndex]) {
        setCurrentTypedWord((prev) => prev + e.key);
        setCurrentCharIndex((prev) => prev + 1);
      }

      if (e.key === " " || e.key === "Enter") {
        if (currentTypedWord === word) {
          setCurrentWordIndex((prev) => Math.min(prev + 1, words.length - 1));
          setCurrentCharIndex(0);
          setCurrentTypedWord("");
        } else {
          setCurrentTypedWord("");
          setCurrentCharIndex(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentCharIndex, currentWordIndex, currentTypedWord]);

  const restartTyping = () => {
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setCurrentTypedWord("");
    setState(60)
  };

  return (
    <>
     <Result currentWord={words[currentWordIndex]} total={currentWordIndex} />
      <div className="hove">
        <div className="hide" id="hi">
          {words.map((word, index) => {
            if (index === currentWordIndex) {
              return (
                <span key={index} className="word">
                  {word.split("").map((letter, charIndex) => {
                    return (
                      <span
                        key={charIndex}
                        style={{
                          color: charIndex < currentCharIndex ? "green" : "black",
                        }}
                      > {letter}
                      </span>
                    );
                  })}
                </span>
              );
            } else {
              return (
                <span key={index} className="word"> {word}
                </span>
              );
            }
          })}
        </div>
      </div>
      <div className="restart" onClick={restartTyping}>
       
        Restart
      </div>
    </>
  );
};

export default Body;



