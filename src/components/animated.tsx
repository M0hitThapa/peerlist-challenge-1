"use client";
import React, { useState, useEffect, useRef, RefObject } from "react";
import { motion, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

type NavItem = {
  name: string;
  job: string;
  image: string;
  href?: string;
};

const navItems: NavItem[] = [
  { name: "Aisha Patel", job: "Data Scientist", image: "/girl1.jpeg" },
  {
    name: "Daniel Carter",
    job: "Cloud Solutions Architect",
    image: "/boy1.jpeg",
  },
  {
    name: "Priya Nair",
    job: "Cybersecurity Analyst",
    image: "/girl2.jpeg",
    href: "/about",
  },
  {
    name: "Rajiv Menon",
    job: "DevOps Engineer",
    image: "/boy2.jpeg",
    href: "/about",
  },
  {
    name: "Lena Morales",
    job: "Frontend Developer",
    image: "/girl3.jpeg",
    href: "/about",
  },
  {
    name: "Ethan Brooks",
    job: "Blockchain Developer",
    image: "/boy3.jpeg",
    href: "/about",
  },
  {
    name: "Lena Morales",
    job: "Frontend Developer",
    image: "/girl4.jpeg",
    href: "/about",
  },
  {
    name: "Marco Rossi",
    job: "Mobile App Developer",
    image: "/boy4.jpeg",
    href: "/about",
  },
];

const NavbarAnimation = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4">
      {navItems.map((item, idx) => (
        <Card
          key={idx}
          item={item}
          isHovered={hovered === idx}
          onHover={() => setHovered(idx)}
          onLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
};

function Card({
  item,
  isHovered,
  onHover,
  onLeave,
}: {
  item: NavItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  // The wrapper ref is the pointer "sensor" for this card only
  const sensorRef = useRef<HTMLDivElement>(null);
  // Springs drive the inner motion div
  const { x, y, reset } = useFollowPointer(sensorRef, 20); // 20px max shift

  return (
    <div
      className="relative px-3 py-3"
      onMouseEnter={onHover}
      onMouseLeave={() => {
        reset();
        onLeave();
      }}
      ref={sensorRef}
    >
      {isHovered && (
        <motion.span
          layoutId="hovered-span"
          className="absolute inset-0 h-full w-full rounded-md bg-[#74c69d]"
        />
      )}

      <motion.div
        style={{ x, y }}
        whileHover={{
          scale: 1.04,
          // Will be used when gesture starts
          transition: { duration: 0.3 },
        }}
        // Will be used when gesture ends
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-white/50 border-2 border-gray-100 rounded-xl p-3 shadow-acertinity"
      >
        <div className="bg-neutral-500 rounded-full h-56 w-56 mx-auto">
          <Image
            className="relative z-10 rounded-full   opacity-80 mask-b-from-50% mask-b-to-95% shadow-acertinity"
            src={item.image}
            alt={item.name}
            height={250}
            width={250}
          />
        </div>

        <div className="p-1 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-neutral-900">
              {item.name}
            </h1>
            <p className="text-sm font-medium text-neutral-500">{item.job}</p>
          </div>

          {/* Social links (original) */}
          <div className="flex pl-1">
            <Link href="/link" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#202020"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </Link>

            <Link href="/linkedin" aria-label="LinkedIn" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin text-[#2F9DA9]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </Link>

            <Link href="/twitter" aria-label="X (Twitter)" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Pointer-follow spring that is scoped to a single element.
 * It only updates while the pointer is inside that element,
 * and gently resets to (0,0) on leave.
 */
function useFollowPointer(ref: RefObject<HTMLElement | null>, maxShift = 20) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const offsetY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5..0.5
      x.set(offsetX * maxShift);
      y.set(offsetY * maxShift);
    };

    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
    };

    // Attach listeners to THIS card only
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [ref, x, y, maxShift]);

  return {
    x,
    y,
    reset: () => {
      x.set(0);
      y.set(0);
    },
  };
}

export default NavbarAnimation;
