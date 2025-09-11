'use client'
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
interface SimpleDisplayProps {
    children: React.ReactNode;
    className?: string;
}

const SimpleDisplay: React.FC<SimpleDisplayProps> = ({ children, className }) => {
    return (
        <AnimatePresence >
            <motion.div
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }} 
                    className={cn(
                        className,
                        ""
                    )}
                  >

            {children}
                  </motion.div>
        </AnimatePresence>
    );
};

export default SimpleDisplay;