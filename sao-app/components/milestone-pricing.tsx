'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function MilestonePricing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prices = [
    { amount: "$200", label: "Initial Setup", description: "Retainer to kickstart the project." },
    { amount: "$600", label: "Implementation", description: "After we deliver the demo, showing real progress." },
    { amount: "$400", label: "Final Delivery", description: "After 2 weeks of dedicated support, including feedback collection and final revisions." },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % prices.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePriceClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-gray-50/80 dark:bg-gray-950/40 py-16 border-y border-gray-200 dark:border-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">
          Flexible, Milestone-Based Payments
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          We believe in earning your trust every step of the way. For our Setup & Streamline service, 
          you only pay once value has been delivered. Here's how it works:
        </p>
        
        <div className="flex justify-center items-center h-32 relative overflow-hidden">
          {prices.map((price, index) => {
            const position = index - currentIndex;
            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: position * 200,
                  scale: index === currentIndex ? 1 : 0.8,
                  opacity: Math.abs(position) > 1 ? 0 : 1,
                  zIndex: index === currentIndex ? 2 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1],
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                onClick={() => handlePriceClick(index)}
                className="absolute text-center cursor-pointer transform-gpu"
                role="button"
                tabIndex={0}
              >
                <div className={`text-2xl font-bold ${
                  index === currentIndex 
                    ? 'text-gray-900 dark:text-gray-50' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {price.amount}
                </div>
                <div className={`text-sm mt-2 ${
                  index === currentIndex 
                    ? 'text-gray-600 dark:text-gray-400' 
                    : 'text-gray-500 dark:text-gray-500'
                }`}>
                  {price.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p 
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4"
        >
          {prices[currentIndex].description}
        </motion.p>
      </div>
    </section>
  );
}
  
  