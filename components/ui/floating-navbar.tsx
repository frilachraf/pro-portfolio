"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { gsap } from "gsap";
    
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    title: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  //
  const { theme, setTheme } = useTheme();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          // setVisible(false);
          setVisible(true);
        }
      }
    }
  });
  const smoothNavigate = (id: string) => {
    // gsap.to(window, { duration: 2, scrollTo: { y: id, offsetY: 50 } });
    gsap.to(window, 
      { 
        duration: 1,
        scrollTo: { y: id, autoKill: true },
        ease: "power2.out"
        
      });
    console.log("Navigating to:", id);  
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    
    

  }, []);
  return (
    <AnimatePresence >
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-neutral-800 dark:bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[12] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            // accessKey={navItem?.accesskey}
            accessKey={navItem.title[0]}
            onClick={(e) => {smoothNavigate(navItem.link)}}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 dark:text-neutral-600 font-medium cursor-pointer "
            )}
          >
            <span className="block sm:hidden-">{navItem.icon}</span>
            <span className="hidden- sm:block text-sm">{navItem.title}</span>
          </a>
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
        
      </motion.div>
    </AnimatePresence>
  );
};
