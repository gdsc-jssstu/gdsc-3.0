import Logo from "../../assets/common/DSC JSS Science and Technology University Light Logo.png";

const Navbar = () => {
  return (
    <nav className="  top-0 flex justify-between bg-lightnav dark:bg-darknav h-14  shadow-md ">
      <div>
        <img src={Logo} alt="" className=" object-contain  h-full" />
      </div>
      <ul className="flex-1 hidden md:flex mx-4 justify-end gap-10 items-center">
        <li>Home</li>
        <li>Team</li>
        <li>Events</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Dark or Light</li>
      </ul>
    </nav>
  );
};

export default Navbar;
