import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const navElements = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleBodyClick = () => {
      setIsMenuHidden(true);
    };

    if (!isMenuHidden) {
      document.body.addEventListener("click", handleBodyClick);
    }

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isMenuHidden]);

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="fixed w-full left-0 top-0 px-5 py-4 z-50 bg-transparent ">

      <div className="flex items-center justify-between px-6 py-5 border rounded-full border-gray-300 bg-[#ffffff85] backdrop-blur-lg backdrop-saturate-[180%] ">

        <h1 className="text-lg sm:text-2xl font-bold whitespace-nowrap select-none">
          PR's Portfolio
        </h1>

     
        <div className="hidden sm:flex gap-6">
          {navElements.map((elem) => (
            <a
              key={elem}
              href={`#${elem.toLowerCase()}`}
              className="text-sm font-medium py-2 px-4 hover:bg-gray-700 hover:text-white rounded-full transition-all ease-in-out"
            >
              {elem}
            </a>
          ))}
        </div>

      
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-800 text-xl focus:outline-none"
        >
          {isMenuHidden ? <RxHamburgerMenu /> : <IoClose />}
        </button>
      </div>

      
      <div
        className={`fixed backdrop-blur-lg bg-[#ffffff42]  py-4 px-8 rounded-lg flex flex-col gap-4 right-5 top-[4.5rem] z-40 shadow-md border border-gray-200 sm:hidden transition-transform duration-300 ${
          isMenuHidden ? " hidden " : " block "
        }`}
      >
        {navElements.map((elem) => (
          <a
            key={elem}
            href={`#${elem.toLowerCase()}`}
            onClick={() => setIsMenuHidden(true)}
            className="py-2 px-6 text-center rounded-md border border-gray-300 hover:bg-gray-800 hover:text-white transition-all"
          >
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
