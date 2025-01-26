import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import illustration from '../assets/ContactMe.svg';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-10 mb-20">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100 rounded-lg shadow-lg">
        
        <div className="flex-1">
          <div className="w-full h-80 rounded-lg flex items-center justify-center">
            <p className=""><img className="w-[100%] " src={illustration} alt="illustration"/></p>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left md:px-20">
          <p className="relative text-gray-600 text-2xl">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              I'd love to hear from you! Whether you have a question feedback, or just want to say hello, feel free to reach out.
            </span>
          </p>
          <a className="flex items-center space-x-3 my-4 cursor-pointer" href="tel:+916283171987">
            <FaPhoneAlt className="text-xl" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">+91 6283171987</span>
          </a>
          <a className="flex items-center space-x-3 cursor-pointer" href="mailto:puneet02ujar@gmail.com">
            <FaEnvelope className="text-xl" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">puneet02ujar@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end space-x-4 md:space-x-0 md:space-y-4 mt-6 md:mt-0">
          <a href="https://github.com/puneetraju"><FaGithub className="text-2xl hover:text-gray-500 cursor-pointer" /></a>
          <a href="https://linkedin.com/in/puneet-raju"><FaLinkedin className="text-2xl hover:text-blue-700 cursor-pointer" /></a>
          <a href="https://instagram.com/puneet2k2"><FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" /></a>
          <a href="https://wa.me/+916283171987"><FaWhatsapp className="text-2xl hover:text-green-500 cursor-pointer" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
