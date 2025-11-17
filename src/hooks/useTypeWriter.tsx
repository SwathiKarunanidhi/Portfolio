import { useEffect, useState } from "react";

export const useTypeWriter = (
  delay: number,
  text: string,
  speed = 100,
  onComplete?: () => void
) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    typingTimeout = setTimeout(
      () => {
        if (index < text.length)
          setIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= text.length) {
              if (onComplete) onComplete();
            }
            return nextIndex;
          });
      },
      index === 0 ? delay : speed
    );
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [text, delay, speed, onComplete, index]);
  return text.slice(0, index);
};
