"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ankita Thapa",
   
    image:
      "/pexels3.jpg",
  },
  {
    id: 2,
    name: "Ravina Bhandari",
 
    image:
      "/pexels2.jpg",
  },
  {
    id: 3,
    name: "Saurab",
    
    image:
      "/pexels4.jpg",
  },
  {
    id: 4,
    name: "Rachana",
   
    image:
      "/pexels5.jpg",
  },
  {
    id: 5,
    name: "Anil K.C",
    
    image:
      "/pexels1.jpg",
  },
  {
    id: 6,
    name: "Surabhi Thapa",
   
    image:
      "/pexels6.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
  <div className="flex flex-col items-center gap-20">
  
     <h1 className=" text-3xl cherry-swash-bold text-gray-900 text-shadow-2xs">PeerList Design Challenge Submission #1</h1>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
       
      <AnimatedTooltip items={people} />
    </div>
    </div>
  );
}
