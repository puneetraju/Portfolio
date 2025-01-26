import React from "react";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaGitAlt , FaHtml5, FaGithub } from "react-icons/fa";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";


const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Cpp" , icon: <TbBrandCpp/>},
    { name: "Git" , icon: <FaGitAlt/>},
    { name: "GitHub", icon: <FaGithub/>},
    { name: "Tailwind" , icon: <RiTailwindCssFill/>},
    { name: "Kotlin" , icon: <TbBrandKotlin/>},
    { name: "HTML" , icon: <FaHtml5/>},
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ];

  return (
    <div id="skills" className="py-16 md:px-50 px-20 mb-30">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-center min-w-25 p-4 bg-mainColor rounded shadow-md hover:scale-110 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}  
            transition={{ delay: index * 0.01, duration: 0.01 }}
          >
            <div className="text-4xl flex justify-center text-white mb-2">{skill.icon}</div>
            <span className="text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

