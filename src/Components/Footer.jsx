

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { link: "https://github.com/puneetraju", icon: <FaGithub /> },
    { link: "https://linkedin.com/in/puneet-raju", icon: <FaLinkedin /> },
  
  ];

  return (
    <footer className="bg-mainColor text-white  p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="mt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} PR's Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
