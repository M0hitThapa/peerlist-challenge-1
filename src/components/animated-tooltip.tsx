"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  
  AnimatePresence,
  useMotionValue,
  
} from "motion/react";


export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);


  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = (event.target as HTMLImageElement).offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -ml-5"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0,  scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1.3,
                  transition: {
                    type: "spring",
                    stiffness: 160,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, scale: 0.6 }}
                style={{
                  
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center   text-xs "
              >
                
                <div className=" text-lg text-shadow-md cherry-swash-bold text-emerald-800">
                  {item.name}
                </div>
                
              </motion.div>
            )}
          </AnimatePresence>
         <motion.div 
         whileHover={{
           translateY: -24,
    transition: { duration: 0.3 }
         }}
        
        
                >
             <img
            onMouseMove={handleMouseMove}
            height={500}
            width={500}
            src={item.image}
            alt={item.name}
            className="relative  h-24 w-24 rounded-full border-6 border-black/20 object-cover object-top shadow-md shadow-gray-200 "
          />
         </motion.div>
        </div>
      ))}
    </>
  );
};







