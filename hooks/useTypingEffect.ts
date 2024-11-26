import { useState, useEffect } from "react";

export function useTypingEffect(text: string, typingSpeed: number = 150) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, typingSpeed]);

  return { displayedText, isComplete };
}
