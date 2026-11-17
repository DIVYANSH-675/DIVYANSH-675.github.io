
import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { aiProject, webProject, otherProject, researchProjects } from "../constants";
import ProjectList from "./ProjectList";
import "./Project.scss";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
  status,
}) => {
  return (
    <motion.div whileInView={{ opacity: 1, transform: 'none' }} variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='w-full h-full project-card'>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='project-box bg-tertiary p-4 rounded-2xl w-full'
      >
        <div className='Box1 relative w-full h-[170px]'>
          <img
            src={image}
            alt={`${name} project illustration`}
            loading='lazy'
            className='image w-full h-full object-cover rounded-2xl'
          />

          <div className='title absolute inset-0 flex justify-end card-img_hover'>
            {source_link && source_link !== source_code_link && <a
              href={source_link} target='_blank' rel='noopener noreferrer'
              aria-label={`Open ${name}`}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={demo}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>}
            <a
              href={source_code_link} target='_blank' rel='noopener noreferrer'
              aria-label={`View ${name} source code`}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>
          </div>
        </div>

        <div className='content mt-3'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          {status && <p className='mt-1 text-[12px] text-cyan-200'>{status}</p>}
          <p className='mt-2 text-secondary text-[14px]' style={{ textAlign: 'justify' }}>{description}</p>
        </div>

        <div className='content mt-3 content-tags'>
          <p className='text-[12px] text-secondary tech-stack-line'>
            <span className='tech-stack-label'>Tech Stack:</span> {tags.map((tag) => tag.name).join(" • ")}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {

  const [selected, setSelected] = useState("research");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "research":
        setData(researchProjects);
        break;
      case "ai_ml":
        setData(aiProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;

      default:
        setData(aiProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div whileInView={{ opacity: 1, transform: 'none' }} variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='project w-full flex'>
        <motion.div whileInView={{ opacity: 1, transform: 'none' }}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          <ul>
            {list.map((item) => (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>

          <div className='box mt-20'>
            {data.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>


        </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");
