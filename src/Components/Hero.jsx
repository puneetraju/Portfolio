// import React, { useEffect, useState } from "react";
// import pdf from "../assets/Resume_PR.pdf";

// const Hero = () => {
//   const texts = ["I'm a Web Developer ", "I'm a Software Engineer ", "I'm an Imaginator ", "I'm a Learner "];
//   const [currentText, setCurrentText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const typingSpeed = isDeleting ? 100 : 150;
//     const delay = isDeleting && charIndex === 0 ? 1000 : 80;
//     const timeout = setTimeout(() => {
//       if (!isDeleting && charIndex < texts[index].length) {
//         setCurrentText((prev) => prev + texts[index].charAt(charIndex));
//         setCharIndex((prev) => prev + 1);
//       } else if (isDeleting && charIndex > 0) {
//         setCurrentText((prev) => prev.slice(0, -1));
//         setCharIndex((prev) => prev - 1);
//       } else {
//         setIsDeleting((prev) => !prev);
//         if (!isDeleting) {
//           setIndex((prev) => (prev + 1) % texts.length);
//         }
//       }
//     }, delay || typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, index, texts]);

//   return (
//     <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white py-60" >
//       <h1 className="text-5xl font-bold mb-4 animate-fade-in">
//         Hi, I'm <span className="text-7xl">Puneet Raju</span>
//       </h1>
//       <p className="text-lg mb-8 animate-slide-in">
//         <span className="text-2xl">{currentText}</span>
//         <span className="cursor bg-white inline-block w-1 h-6 "></span>
//       </p>
//       <button className="mt-7 px-7 py-3 border text-white rounded-md hover:bg-opacity-90 transition cursor-pointer">
//         <a href={pdf} download="Puneet_Raju_CV.pdf" >
//           Download CV
//         </a>
//       </button>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import pdf from "../assets/Resume_PR.pdf";
import BackgroundImage from "../assets/BackGround.jpg";

const Hero = () => {
  const texts = ["I'm a Web Developer ", "I'm a Software Engineer ", "I'm an Imaginator ", "I'm a Learner "];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const delay = isDeleting && charIndex === 0 ? 1000 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setCurrentText((prev) => prev + texts[index].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, delay || typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-white py-60 relative overflow-hidden"
    >
      <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%)", 
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-70"></div> 
      <h1 className="text-5xl font-bold mb-4 animate-fade-in z-20">
        Hi, I'm <span className="text-7xl">Puneet Raju</span>
      </h1>
      <p className="text-lg mb-8 animate-slide-in z-20 ">
        <span className="text-2xl">{currentText}</span>
        <span className="cursor bg-white inline-block w-1 h-6 "></span>
      </p>
      <button className="mt-7 px-7 py-3 border text-white rounded-md hover:bg-opacity-90 transition cursor-pointer z-30">
        <a href={pdf} download="Puneet_Raju_CV.pdf">
          Download CV
        </a>
      </button>
    </section>
  );
};

export default Hero;
