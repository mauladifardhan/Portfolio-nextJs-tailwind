import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon, BehanceIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
       ${router.asPath === href ? "w-full" : "w-0"}
      
       dark:bg-light
       `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light" onClick={handleClick}>
      <button className="flex-col justify-center items-center hidden lg:flex">
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://github.com/mauladifardhan" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/fardhan-mauladi-6399b2b6/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.behance.net/fardhanmauladi" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
          <BehanceIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://instagram.com/mauladifardhan" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <InstagramIcon />
        </motion.a>

        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
          {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
