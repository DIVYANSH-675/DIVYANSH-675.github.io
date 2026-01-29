import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-5 rounded-2xl sm:w-[360px] w-full border border-white/[0.05] shadow-card'
  >
    <div className='relative w-full h-[200px] bg-white/[0.05] rounded-xl flex justify-center items-center overflow-hidden mb-5'>
      <img
        src={image}
        alt={`logo-${name}`}
        className='w-[80%] h-[80%] object-contain'
      />
    </div>

    <div className='mt-1'>
      <h3 className='text-white font-bold text-[20px] leading-[30px]'>{name}</h3>
      <p className='mt-1 text-secondary text-[14px]'>{year}</p>

      <div className='mt-4 flex flex-col gap-2'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>Degree:</span> {degree}
        </p>
        {branch && (
          <p className='text-white font-medium text-[16px]'>
            <span className='pink-text-gradient'>Stream:</span> {branch}
          </p>
        )}

        <p className='text-white font-medium text-[16px]'>
          <span className='green-text-gradient'>Result:</span> {marks}
        </p>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education Details...</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");