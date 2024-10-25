import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { cources } from "../constants";

const FeedbackCard = ({
  index,
  cources,
  name,
  designation,
  company,
  image,
  icon,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 1.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* <p className="text-white font-black text-[48px]">"</p> */}
    <div className="mt-2">
      <p className="text-white tracking-wider text-[13px]"> {cources}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-pretty font-mono">
            <span className="blue-text-gradient">-</span> {name}
          </p>
          <p className="text-secondary font-bold text-[13px] mt-1"> from {company}</p>
        </div>
        <a href={image}>
            <img 
            src={icon}
            className="w-10 h-10 rounded-full object-cover"
            />
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={"${styles.padding} bg-tertiary rounded-2xl min-h-[300px]"}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Other Cources</p>
          <h2 className={styles.sectionHeadText}>Cources and Certification</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {cources.map((cources, index) => (
          <FeedbackCard key={cources.name} index={index} {...cources} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks,"");
