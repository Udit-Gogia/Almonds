"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealButton({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center  bg-primaryBlack rounded-full w-full mx-auto ">
        <Card title={title} icon={icon}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-full text-black "
            colors={[[125, 211, 252]]}
            showGradient={false}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2]  group/canvas-card flex items-center justify-center rounded-full dark:border-white/[0.2]  max-w-sm w-full mx-auto px-4 relative "
    >
      {hovered && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}

      <div className="relative z-20 rounded-full h-10 cursor-pointer">
        {!hovered && (
          <div className="text-center group-hover/canvas-card:-translate-y-4 h-10 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
        )}
        {hovered && (
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 h-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        )}
      </div>
    </div>
  );
};
