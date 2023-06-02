import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;</h3>
        <h4 className="capitalize font-bold text-lg">
          <a href={companyLink} target="_blank" className="text-primary capitalize">
            @{company}
          </a>
        </h4>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="PT Mitra Transaksi Indonesia | Yokke!"
            companyLink="https://www.yokke.co.id/id"
            time="2021-Present"
            address="Millennium Centennial Center, 17th Floor, South Jakarta"
            work="
            Worked on a team responsible for developing Android and conventional EDC machine applications for banks in Indonesia and certifying card brands such as Visa, Mastercard and JCB"
          />
          <Details
            position="Software Engineer (Freelance)"
            company="PT Mutiara Mandiri Solusi"
            companyLink="www.google.com"
            time="2022-Present"
            address="West Bekasi, Bekasi City"
            work="
            develop websites such as portfolio, company profile and admin store using HTML, CSS and Javascript programming languages ​​such as react.js , vue.js and next.js"
          />
          <Details
            position="Java Developer"
            company="ID Star Cipta Teknologi"
            companyLink="https://idstar.co.id/id/"
            time="2020-2021"
            address="Wisma Staco, 7th Floor"
            work="
            work as a team by creating a web store so that you can make payments using the java springboot language and ISO Message 8583."
          />
          <Details
            position="Asisstant Project Manager"
            company="GNV Solution"
            companyLink="www.google.com"
            time="2018-2019"
            address="Menara AIA, Kuningan"
            work="
            keeping records of the work of a project manager at the Bank Banten project by handling the project business at the Bank Banten so that it complies with Bank Indonesia regulations"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// useScrool framer animation
