import { useContext } from "react";
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";
import logo_dark_small from "../assets/common/google-developers.svg";
import ThemeContext from "../contexts/ThemeContext";
import {
  RiMoonFill,
  RiSunFill,
  RiMenuFill,
  RiCloseLine,
  RiHome2Fill,
  RiHome4Line,
  RiTeamLine,
  RiCalendarEventLine,
  RiLightbulbLine,
  RiPencilLine,
  RiMailLine,
} from "react-icons/ri";
import Popup from "reactjs-popup";
import { motion as m } from "framer-motion";


const Navbar = ({ scrollYValue }) => {
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    // dont change the height of the navbar see if you are changeing, make sure to update the calc function (inside className) in HomeCard component
    <nav
      // className={`flex justify-around items-center md:justify-between h-14 bg-lightnav dark:bg-darknav  drop-shadow-md `}
      className={` flex justify-between px-0 items-center w-screen  md:justify-between h-14 ${
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

      <div className="hidden sm:block">
        <img
          src={isDark ? logo_dark : logo_light}
          alt=""
          className={` sm:block h-14  ${
            scrollYValue > 200 ? " visible ml-7 " : "  invisible ml-0"
          } object-contain `}
          // className="visible max-h-14 ml-7 object-contain h-full"
        />
        {/* <img
          src={logo_dark_small}
          alt=""
          className={`sm:hidden  h-8  ${
            scrollYValue > 200 ? " visible " : "  invisible"
          } object-contain `}
          // className="visible max-h-14 ml-7 object-contain h-full"
        /> */}
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

      <ul className=" sm:hidden flex w-full h-full justify-around ">
        <SmallNavBarItems title="Home" Icon={RiHome4Line} />
        <SmallNavBarItems title="Team" Icon={RiTeamLine} />
        <SmallNavBarItems title="Events" Icon={RiCalendarEventLine} />
        <SmallNavBarItems title="Project" Icon={RiLightbulbLine} />
        <SmallNavBarItems title="Blogs" Icon={RiPencilLine} />
        <SmallNavBarItems title="Contact Us" Icon={RiMailLine} />
      </ul>
    </nav>
  );
};

const SmallNavBarItems = ({ Icon, title }) => {
  return (
    <li className="flex flex-col justify-end items-center dark:text-lightbg">
      <div className="text-2xl hover:scale-110 ">
        <Icon />
      </div>
      <span className=" text-sm">{title}</span>
    </li>
  );
};

export default Navbar;
