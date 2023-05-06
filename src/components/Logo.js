import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: ["#121212", "rgb(16 185 129)", "rgb(8 145 178)", "rgb(251 191 36)", "rgb(163 230 53)", "#121212"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        FM
      </MotionLink>
    </div>
  );
};

export default Logo;
