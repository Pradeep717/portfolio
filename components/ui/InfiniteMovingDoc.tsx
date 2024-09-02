"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingDoc = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    img: string;
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
    addAnimation();

    // Cleanup to avoid memory leak
    return () => removeClonedItems();
  }, [direction, speed]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerWidth = scrollerRef.current.scrollWidth;

      // Clone enough items to fill at least double the scroller width
      while (scrollerRef.current.scrollWidth < containerWidth * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });
      }

      updateAnimationStyles();
      setStart(true);
    }
  }

  const removeClonedItems = () => {
    if (scrollerRef.current) {
      // Only keep the original set of items
      const children = Array.from(scrollerRef.current.children);
      children.slice(items.length).forEach((item) => item.remove());
      setStart(false);
    }
  };

  const updateAnimationStyles = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

      containerRef.current.style.setProperty("--animation-direction", animationDirection);
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

return (
    <div
        ref={containerRef}
        className={cn(
            "scroller relative z-20 w-screen overflow-hidden",
            className
        )}
    >
        <ul
            ref={scrollerRef}
            className={cn(
                "flex min-w-full gap-8 py-4 w-max flex-nowrap animate-scroll",
                start && "animate-scroll",
                pauseOnHover && "hover:[animation-play-state:paused]"
            )}
            style={{
                animation: `scroll var(--animation-duration) linear infinite var(--animation-direction)`,
            }}
        >
            {items.map((item, idx) => (
                <li
                    className="w-full max-w-[700px] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw] bg-dark bg-gradient-to-r from-[#04071D] to-[#0C0E23]"
                    key={idx}
                >
                    <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg object-cover mb-4"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                        {item.title}
                    </h3>
                </li>
            ))}
        </ul>
    </div>
);
};
