import { useContext } from "react";
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";
import logo_dark_small from "../assets/common/google-developers.svg";
import ThemeContext from "../contexts/ThemeContext";
import { RiMoonFill, RiSunFill, RiMenuFill, RiCloseLine } from "react-icons/ri";
import Popup from "reactjs-popup";
import { motion as m } from "framer-motion";

const smallScreenNavContainerVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const smallScreenNavChildVariants = {
  hidden: {
    x: "-60%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      ease: "anticipate",
    },
  },
};

const Navbar = ({ scrollYValue }) => {
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    // dont change the height of the navbar see if you are changeing, make sure to update the calc function (inside className) in HomeCard component
    <nav
      // className={`flex justify-around items-center md:justify-between h-14 bg-lightnav dark:bg-darknav  drop-shadow-md `}
      className={`flex justify-between px-6 md:px-0 items-center  md:justify-between h-14 ${
        scrollYValue > 300
          ? " bg-lightnav dark:bg-darknav drop-shadow-md"
          : "bg-lightbg dark:bg-darkbg drop-shadow-0"
      }     `}
    >
      {/* ${
        scrollYValue > 300
          ? " bg-lightnav dark:bg-darknav drop-shadow-md"
          : "bg-lightbg  dark:bg-darkbg"
      } */}

      <Popup
        trigger={
          <div className="sm:hidden dark:text-lightbg text-3xl ">
            <RiMenuFill />
          </div>
        }
        modal
      >
        {(close) => (
          <div
            className={`h-screen w-screen ${
              isDark ? "bg-darknav text-lightbg" : "bg-lightnav text-darkbg"
            }  p-4`}
          >
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              onClick={close}
              className=" inline-flex w-full flex-row-reverse text-4xl"
            >
              <RiCloseLine />
            </m.div>
            <m.ul
              variants={smallScreenNavContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-evenly h-5/6 items-center text-3xl"
            >
              <m.li variants={smallScreenNavChildVariants}>Home</m.li>
              <m.li variants={smallScreenNavChildVariants}>Team</m.li>
              <m.li variants={smallScreenNavChildVariants}>Events</m.li>
              <m.li variants={smallScreenNavChildVariants}>Projects</m.li>
              <m.li variants={smallScreenNavChildVariants}>Blog</m.li>
              <m.li variants={smallScreenNavChildVariants}>Contact Us</m.li>
            </m.ul>
          </div>
        )}
      </Popup>
      <div>
        <img
          src={isDark ? logo_dark : logo_light}
          alt=""
          className={` hidden sm:block h-14  ${
            scrollYValue > 200 ? " visible ml-7 " : "  invisible ml-0"
          } object-contain `}
          // className="visible max-h-14 ml-7 object-contain h-full"
        />
        <img
          src={logo_dark_small}
          alt=""
          className={`sm:hidden  h-8  ${
            scrollYValue > 200 ? " visible " : "  invisible"
          } object-contain `}
          // className="visible max-h-14 ml-7 object-contain h-full"
        />
      </div>
      {/* ${scrollYValue > 300 ? " drop-shadow-0" : " drop-shadow-md"} */}
      <ul
        className={`px-4 hidden sm:flex text-sm gap-x-4 justify-end md:text-base md:gap-x-6 lg:gap-x-14 xl:gap-x-16 items-center dark:text-lightnav font-medium `}
        // className={`px-4 bg-lightnav dark:bg-darknav hidden sm:flex text-sm gap-x-4 justify-end md:text-base md:gap-x-6 lg:gap-x-14 xl:gap-x-16 items-center dark:text-lightnav font-medium `}
      >
        <li>Home</li>
        <li>Team</li>
        <li>Events</li>
        <li>Projects</li>
        <li>Blog</li>
        <li className="whitespace-nowrap">Contact Us</li>
        <li
          className="mr-5 cursor-pointer dark:hover:text-yellow-400  hover:scale-110 text-2xl"
          onClick={changeTheme}
        >
          {isDark ? <RiSunFill /> : <RiMoonFill />}
        </li>
      </ul>
      <div
        className="sm:hidden text-3xl dark:text-lightnav  cursor-pointer dark:hover:text-yellow-400  hover:scale-110"
        onClick={changeTheme}
      >
        {isDark ? <RiSunFill /> : <RiMoonFill />}
      </div>
    </nav>
  );
};

export default Navbar;
