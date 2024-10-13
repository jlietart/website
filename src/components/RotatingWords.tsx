import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingWordsProps {
  words: string[];
}

const RotatingWords: React.FC<RotatingWordsProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isFirstChange, setIsFirstChange] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        if (newIndex !== 0) {
          setIsFirstChange(false);
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  const content = isClient ? (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={isFirstChange ? false : { y: 20, opacity: 0 }}
        animate={isFirstChange ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        exit={isFirstChange ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  ) : (
    words[0]
  );

  return (
    <span className="text-blue-400 text-center md:text-right inline-block">
      {content}
    </span>
  );
};

export default RotatingWords;
