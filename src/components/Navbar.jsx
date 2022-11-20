import { useContext } from "react";
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";
import img_sun from "../assets/common/sun.svg";
import img_moon from "../assets/common/moon.svg";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = ({ scrollYValue }) => {
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    // dont change the height of the navbar see if you are changeing, make sure to update the calc function (inside className) in HomeCard component
    <nav
      className={`flex justify-around md:justify-between  h-14  ${
        scrollYValue > 300
          ? "  bg-lightnav dark:bg-darknav drop-shadow-sm"
          : " bg-lightbg dark:bg-darkbg"
      }`}
    >
      <div>
        <img
          src={isDark ? logo_dark : logo_light}
          alt=""
          className={`${
            scrollYValue > 300 ? " visible" : "invisible"
          } object-contain  h-full`}
        />
      </div>
      <ul className="flex-1 hidden sm:flex text-sm gap-x-4 justify-end md:text-base md:gap-x-6 lg:gap-x-14 xl:gap-x-16 items-center dark:text-lightnav  lg:mx-10">
        <li>Home</li>
        <li>Team</li>
        <li>Events</li>
        <li>Projects</li>
        <li>Blog</li>
        <li className="whitespace-nowrap">Contact Us</li>
        <li
          className="mr-5 drop-shadow-lg rounded-full w-8 h-8"
          onClick={changeTheme}
        >
          <img src={isDark ? img_sun : img_moon} className="w-8  h-8" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
