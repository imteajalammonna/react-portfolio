import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const navMenus = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Projects",
    link: ".#projects",
  },
  {
    name: "Services",
    link: ".#services",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [element.classList, theme]);

  return (
    <>
      <nav id="home" className="bg-secondary dark:bg-gray-900 py-1 fixed z-10 w-full scroll-smooth focus:scroll-auto">
        <div className="container flex justify-between items-center md:h-[8vh] sm:py-2 ">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ff007b] flex justify-center items-center cursor-pointer">
            MONNA.
          </h1>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-8 text-2xl dark:text-white">
              {navMenus.map((navMenu, index) => {
                return (
                  <li key={index}>
                    <a
                      className="text-[20px] text-black hover:text-[#ff007b] dark:text-white font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                      href={navMenu.link}
                    >
                      {navMenu.name}
                    </a>
                  </li>
                );
              })}
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-3xl text-black animate-spin animation-delay dark:text-white cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-3xl text-black animate-bounce dark:text-white cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Responsive Menu */}
          <div className="sm:hidden">
            <div className="flex items-center gap-4">
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
              <FiMenu
                className="text-2xl cursor-pointer dark:text-white "
                onClick={toggleMenu}
              />
            </div>
            {/* {showMenu && ( */}
            <div className={`fixed ${showMenu ? "top-10" : '-top-full'} bg-white dark:text-white dark:bg-gray-900 shadow-md rounded-b-xl  left-0 w-full z-10 py-10 duration-500 `}>
              <ul className="flex flex-col items-center gap-4">
                {navMenus.map((navMenu, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                        href={navMenu.link}
                        onClick={() => setShowMenu(false)}
                      >
                        {navMenu.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
