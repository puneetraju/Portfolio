import { motion } from "framer-motion";
import { BsFiletypeJson } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaChrome, FaCss3Alt, FaGithub, FaHtml5, FaLink } from "react-icons/fa";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiFirebase, SiTailwindcss, SiJetpackcompose, SiAndroidstudio } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      title: "MERN Blog Website",
      description:
        "A modern MERN stack web application featuring dynamic blog pages, a comprehensive dashboard for managing blogs and drafts, support for likes and nested comments, real-time notifications, smooth animations, and much more. Currently live via Netlify as Frontend Server, and Render as Backend Server.",
      image: "../src/assets/MernBlog.png",
      github: "https://github.com/puneetraju/mern-blog",
      website: "https://mern-blog.example.com",
      techStack: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiFirebase />, <SiTailwindcss />, <FaAws />],
    },
    {
      title: "WebTrack",
      description:
        "WebTrack is a productivity-focused Chrome extension that lets you create, search, edit, and delete tasks linked to specific web pages. Each task is automatically tagged with the URL and a timestamp to help you track activities efficiently. Manage all your tasks seamlessly from the options page and stay organized while browsing!",
      image: "../src/assets/WebTracker.png",
      github: "https://github.com/puneetraju/Web-Track",
      website: "",
      techStack: [<FaHtml5 />, <FaChrome />, <IoLogoJavascript />, <BsFiletypeJson />, <FaCss3Alt />],
    },
    {
      title: "Exercise App",
      description:
        "Exercise App is a sleek and intuitive fitness app built using Jetpack Compose. The app features a crisp and modern UI for exercise routines, where each exercise is displayed with visually appealing images. With a focus on simplicity and user experience, Exercise App ensures your fitness journey stays on track with style!",
      image: "../src/assets/ExerciseApp.png",
      github: "https://github.com/puneetraju/Exercise-Android-App",
      website: "",
      techStack: [<SiJetpackcompose />, <SiAndroidstudio />, <DiAndroid />, <TbBrandKotlin />],
    },
  ];

  return (
    <section id="projects" className="p-18 mb-30">
      <h2 className="text-3xl font-bold text-center mb-20">Projects</h2>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} items-center gap-6`}
            whileInView={{ opacity: 1, x: index % 2 === 0 ? 30 : -30 }}  
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }} 
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-2/5 h-70 rounded-lg shadow-2xl object-fill border-1 hover:scale-105 transition-transform"
            />
            <div className="flex lg:w-1/36 gap-4 lg:flex-col flex-row items-center justify-center">
              {project.techStack.map((tech, techIndex) => (
                <div key={techIndex} className="text-3xl hover:text-black transition">
                  {tech}
                </div>
              ))}
            </div>
            <div className={`lg:w-1/3 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? "justify-end" : ""}`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-neutral-400"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-neutral-400"
                  >
                    <FaLink />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button className="mt-7 px-7 py-3 border rounded-md hover-mainColor hover:text-white transition cursor-pointer">
          <a href="https://github.com/puneetraju?tab=repositories" className="flex items-center gap-1">
            More Projects <FaArrowUpRightFromSquare className="text-xs" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
