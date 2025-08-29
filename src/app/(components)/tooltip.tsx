"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ankita Thapa",
   
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    id: 2,
    name: "Ravina Bhandari",
 
    image:
      "https://images.pexels.com/photos/33271645/pexels-photo-33271645.jpeg",
  },
  {
    id: 3,
    name: "Saurab",
    
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },
  {
    id: 4,
    name: "Rachana",
   
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    id: 5,
    name: "Anil K.C",
    
    image:
      "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
  },
  {
    id: 6,
    name: "Surabhi Thapa",
   
    image:
      "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
  <div className="flex flex-col items-center gap-20">
  
     <h1 className=" text-2xl cherry-swash-bold text-gray-900 text-shadow-2xs">PeerList Design Challenge Submission #1</h1>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
       
      <AnimatedTooltip items={people} />
    </div>
    </div>
  );
}
