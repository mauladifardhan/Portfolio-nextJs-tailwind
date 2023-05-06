import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, className = "" }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-teal-700 text-light p-7 shadow-dark cursor-pointer" whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" className="bg-yellow-700" />
        <Skill name="CSS" x="-5vw" y="-11vw" className="bg-purple-700" />
        <Skill name="ReactJS" x="19vw" y="2vw" className="bg-gray-700" />
        <Skill name="TailwindCSS" x="-10vw" y="9vw" className="bg-blue-700" />
        <Skill name="NextJS" x="-20vw" y="-15vw" className="bg-green-700" />
        <Skill name="Figma" x="15vw" y="-12vw" className="bg-red-700" />
        <Skill name="Canva" x="31vw" y="-5vw" className="bg-orange-700" />
        <Skill name="Spark AR" x="0vw" y="-20vw" className="bg-amber-700" />
        <Skill name="Android XML" x="0vw" y="23vw" className="bg-lime-700" />
        <Skill name="Bootstrap" x="18vw" y="16vw" className="bg-emerald-700" />
        <Skill name="Laravel" x="-25vw" y="18vw" className="bg-indigo-700" />
        <Skill name="Web Design" x="-35vw" y="-5vw" className="bg-sky-600" />
      </div>
    </>
  );
};

export default Skills;

// Menggunakan repeating gradiant color
