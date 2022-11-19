import { useEffect, useState } from "react";
import logo_light from "../../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../../assets/common/DSC JSS Science and Technology University Dark Logo.png";

const Navbar = ({ isDark, setIsDark }) => {
  return (
    // dont change the height of the navbar see, if you are changeing make sure to update the calc funcions in home component
    <nav className="flex justify-between bg-lightnav dark:bg-darknav h-14  shadow-md ">
      <div>
        <img
          src={isDark ? logo_dark : logo_light}
          alt=""
          className="object-contain  h-full"
        />
      </div>
      <ul className="flex-1 hidden md:flex mx-4 justify-end gap-10 items-center dark:text-lightnav">
        <li>Home</li>
        <li>Team</li>
        <li>Events</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li onClick={() => setIsDark(!isDark)}>Dark or Light</li>
      </ul>
    </nav>
  );
};

export default Navbar;
