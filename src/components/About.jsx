import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { pdf } from "../assets";

const ServideCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I am Ashwani Singh. B.Tech graduate in Computer Science &
        Engineering, skilled in C++, Java, Python, and web technologies like
        React and Node.js. I have developed projects including a Heart Disease
        Prediction System and a Vehicle Rental Management System, showcasing my
        expertise in software development. I published research on heart disease
        prediction. I am eager to apply my technical skills in a dynamic
        software development role.
        <div className=" text-white-100 mt-5 flex flex-wrap gap-1">
          Download CV
          <a href="https://drive.google.com/file/d/1qYZUz9MY6s6lTptmrvZmxmNXm_2Aq7xA/view?usp=sharing">
            <img src={pdf} className="w-8 h-8 rounded-full" />
          </a>
        </div>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServideCard key={service.title} index={index} {...service} />
        ))}{" "}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
