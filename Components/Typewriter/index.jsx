import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 150, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < text.length) {
      // Type next character
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else {
      // Once full text is displayed, pause then restart
      timer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [index, text, speed, pause]);

  return (
    <p className="typewriter text-4xl">
      {displayedText}
      <span className="cursor">|</span>
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </p>
  );
};

export default Typewriter;
