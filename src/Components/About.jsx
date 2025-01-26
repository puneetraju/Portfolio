import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile.jpg";

const About = () => {
  return (
    <section id="about" className="p-8 my-20">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
      <img src={ProfilePic} alt="Profile" className="w-40 h-40 rounded-full shadow-md " />
        <motion.p
          className="pl-5 max-w-lg text-gray-700 text-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm a passionate developer who loves to create web applications
          and explore new technologies. With a focus on clean design and user
          experience, I aim to bring ideas to life.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
