
import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { aiProject, webProject, otherProject } from "../constants";
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
            alt='project_image'
            className='image w-full h-full object-cover rounded-2xl'
          />

          <div className='title absolute inset-0 flex justify-end card-img_hover'>
            <div
              onClick={() => window.open(source_link, "_blank")}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={demo}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='content mt-3'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
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

  const [selected, setSelected] = useState("ai_ml");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
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
