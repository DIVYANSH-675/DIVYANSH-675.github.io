import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "#ffffff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full bg-white rounded-full overflow-hidden'>
          {experience.icon ? <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain'
          /> : <span className='text-slate-900 font-bold text-2xl'>{experience.company_name.slice(0, 1)}</span>}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      {experience.link && <a href={experience.link} className="mt-5 inline-block text-cyan-200" target="_blank" rel="noopener noreferrer">
        {experience.linkLabel || "View experience"} ↗
      </a>}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
