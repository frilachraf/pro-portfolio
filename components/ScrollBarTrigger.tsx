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
          // progressBar.style.width = `${self.progress * 100}%`;
          progressBar.style.height = `${self.progress * 100}%`;
        }
      },
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <>
    
    <div className="fixed top-[50vh] -translate-y-[50%] w-[10px] right-4 bg-muted h-[30vh] border rounded-full">
    <div
        ref={progressBarRef}
        style={{ height: "0%", width: "100%" }}
        className="rounded-full bg-primary"
      />
    </div>
    </>
  );
}
