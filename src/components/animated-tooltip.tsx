"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item, idx) => (
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
                {/* <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" /> */}
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
            className="relative  h-20 w-20 rounded-full border-4 border-black/20 object-cover object-top shadow-md shadow-gray-200 "
          />
         </motion.div>
        </div>
      ))}
    </>
  );
};







