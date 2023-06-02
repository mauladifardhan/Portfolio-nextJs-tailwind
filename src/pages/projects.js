import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import selaras from "../../public/images/projects/selaras.png";
import thingsUix from "../../public/images/projects/things-uix.png";
import kalkulatorZakat from "../../public/images/projects/kalkulator-zakat.png";
import webAdmin from "../../public/images/projects/dashboard-admin.png";
import jakartaGym from "../../public/images/projects/jakarta-super-gym.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl
                 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base ">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
          <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light mr-2 sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light hover:bg-light hover:border hover:border-dark hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark
                      dark:hover:text-light dark:border dark:border-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline dark:text-light md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 dark:text-light md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Things UIX | Project</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Think Positive Do Creative!" className="mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Wedding Organizer Website"
                img={selaras}
                summary="Website landing page about Wedding Organizer for Selaras Wedding Organizer. Create with HTML, CSS with Bootstrap. you can see portfolio about wedding organizer"
                link="https://www.selaras-organizer.com/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Design Web Things UIX" img={thingsUix} summary="UI Design for Things UIX" link="https://www.behance.net/gallery/117507041/ThingsUIX" type="Featured Project" github="/" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Design App Calculator Zakat" img={kalkulatorZakat} summary="UI Design for Calculator Zakat" link="https://www.behance.net/gallery/117544401/Zakat-App-UI" type="Featured Project" github="/" />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                title="Website Jakarta Super Gym"
                img={jakartaGym}
                summary="This Project Website landing page create with react.js , TailwindCss and Framer Motion"
                link="https://github.com/mauladifardhan/jakarta-super-gym"
                type="Featured Project"
                github="https://github.com/mauladifardhan/jakarta-super-gym"
              />
            </div> */}
            <div className="col-span-6 sm:col-span-12">
              <Project title="Website Admin Store" img={webAdmin} summary="Website Admin Store with HTML, CSS, and Javascript" link="https://www.behance.net/gallery/172166299/Admin-Dashboard" type="Featured Project" github="/" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Website Jakarta Super Gym"
                img={jakartaGym}
                summary="This Project Website landing page create with react.js , TailwindCss and Framer Motion"
                link="https://github.com/mauladifardhan/jakarta-super-gym"
                type="Featured Project"
                github="https://github.com/mauladifardhan/jakarta-super-gym"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
