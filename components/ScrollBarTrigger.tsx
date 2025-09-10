// components/ScrollProgressBar.tsx
"use client"; // make this a client component since it uses DOM & effects

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    const scrollTriggerInstance = ScrollTrigger.create({
      start: 0,
      end: "max", // listen to full scroll length
      onUpdate: (self) => {
        if (progressBar) {
          progressBar.style.width = `${self.progress * 100}%`;
        }
      },
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <div 
        className="fixed bottom-0 leading-0 h-[5] w-full z-[999] bg-muted rounded-full"
    >
      <div
        ref={progressBarRef}
        style={{ height: "100%", backgroundColor: "#4caf50", width: "0%" }}
      />
    </div>
  );
}
