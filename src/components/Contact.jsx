import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { social } from "../constants";

const SocialCard = ({ name, icon, index, link }) => (
  <div className="mt-1 justify-center rounded-3xl">
    <div className="mt-1 flex justify-between items-center gap-1">
      <div className="">
        <p className="text-secondary font-mono flex justify-center text-[13px]">
          {name}
        </p>
        <a href={link}>
          <img
            src={icon}
            className="w-12 h-12 rounded-full object-cover items-center justify-between"
          />
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-5 bg-black-100 rounded-[20px]">
          <div className={`mt-1 pb-10 ${styles.paddingX} flex flex-wrap gap-7`}>
            {social.map((social, index) => (
              <SocialCard key={social.name} index={index} {...social} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
