"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string; // New image property
    title: string;
    subtitle: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current || start) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      let duration = "30s"; // Default speed
      if (speed === "fast") duration = "15s";
      if (speed === "slow") duration = "60s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }

    setStart(true);
  }, [direction, speed, start]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
          key={`${item.title}-${idx}`}
          className="w-[140px] h-[180px] md:w-[160px] md:h-[200px] relative rounded-lg overflow-hidden shadow-lg shrink-0 border border-gray-700"
        >
        
        
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-0 w-full text-center px-3">
              <h3 className="text-white font-bold text-lg md:text-base font-bodoni italic">{item.title}</h3>
              <p className="text-gray-300 text-xs font-thin md:text-sm">{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
