import { useState, useEffect } from "react";

type TypingEffectProps = {
  text: string;
  speed: number;
};

export const TypingEffect = ({ text, speed }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += text[currentIndex];
      setDisplayedText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
        }, 2000); // Espera de 2 segundos antes de reiniciar o efeito
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, isTyping]);

  return (
    <div>
      <p>{displayedText}</p>
    </div>
  );
};
