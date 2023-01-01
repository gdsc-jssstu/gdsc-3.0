import { useContext } from "react";
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";
import ThemeContext from "../contexts/ThemeContext";
import {
  RiMoonFill,
  RiSunFill,
  RiHome5Fill,
  RiTeamFill,
  RiCalendarEventFill,
  RiLightbulbFill,
  RiMailFill,
} from "react-icons/ri";

const Navbar = ({ scrollYValue }) => {
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    <>
     {/* Height of both navbar (small screen and large screen is 3.5rem(h-14) */}
      <nav
        className={`hidden sm:flex justify-between px-0 items-center w-full md:justify-between h-14 ${
          scrollYValue > 300
            ? " bg-lightnav dark:bg-darknav drop-shadow-md"
            : "bg-lightbg dark:bg-darkbg drop-shadow-0"
        }     `}
      >
        <div className="">
          <img
            src={isDark ? logo_dark : logo_light}
            alt=""
            className={` sm:block h-14  ${
              scrollYValue > 200 ? " visible ml-7 " : "  invisible ml-0"
            } object-contain `}
          />
        </div>

        <ul
          className={`px-4 flex text-sm gap-x-4 justify-end md:text-base md:gap-x-6 lg:gap-x-14 xl:gap-x-16 items-center dark:text-lightnav font-medium`}
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
      </nav>
      <nav
        className={`flex sm:hidden h-14 sticky top-0  bg-lightnav dark:bg-darknav w-full`}
      >
        <ul className="  flex w-full h-full  justify-around ">
          <SmallNavBarItems title="Home" Icon={RiHome5Fill} />
          <SmallNavBarItems title="Team" Icon={RiTeamFill} />
          <SmallNavBarItems title="Events" Icon={RiCalendarEventFill} />
          <SmallNavBarItems title="Project" Icon={RiLightbulbFill} />
          <SmallNavBarItems title="Contact Us" Icon={RiMailFill} />
        </ul>
      </nav>
    </>
  );
};

const SmallNavBarItems = ({ Icon, title }) => {
  return (
    <li className="flex flex-col justify-end items-center w-full dark:text-lightbg">
      <div className="text-2xl hover:scale-110 ">
        <Icon />
      </div>
      <span className=" text-sm">{title}</span>
    </li>
  );
};

export default Navbar;
