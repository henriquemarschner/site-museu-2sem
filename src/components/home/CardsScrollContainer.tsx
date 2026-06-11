"use client";

import React, { useRef, useEffect } from "react";

export default function CardsScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-[90vw]">
        <div
          ref={scrollContainerRef}
          className="flex flex-row flex-nowrap gap-4 px-4 py-8 overflow-x-scroll snap-x"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
