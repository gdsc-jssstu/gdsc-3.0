import Card from "../components/HomeCard";
import MentorCard from "../components/MentorCard";

import { useRef, useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { motion as m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// Images
import Img_satellite from "../assets/home_page/satellite.svg";
import Img_downarrow_light from "../assets/home_page/downarrow_light.svg";
import Img_downarrow_dark from "../assets/home_page/downarrow_dark.svg";
import Img_saturn from "../assets/home_page/saturn.svg";
import Img_cloud from "../assets/home_page/cloud.svg";
import Img_sun from "../assets/home_page/sun.svg";
import Img_rocket_test from "../assets/home_page/rocket-ship-remove2.png";
import Img_star from "../assets/home_page/star.svg";
import Img_moon from "../assets/home_page/moon.svg";

// Logos
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";

// Icons
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiSunFill,
  RiMoonFill,
} from "react-icons/ri";
import { TeamIcon } from "../utils/teamsvg";
import TeamSection from "../components/TeamSection";

const floatImgVariants = {
  cloud: {
    x: [null, -100, 100],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
      type: "tween",
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
  satallite: {
    x: [null, 50, -10],
    y: [null, -5, 10],
    rotate: [null, 30, 40],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 10,
    },
  },
  sun: {
    rotate: [null, -100],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
    },
  },
  planet: {
    x: [null, 50, -10],
    y: [null, -20, 10],
    rotateZ: [null, -20, 20],
    rotateY: [null, 30],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
    },
  },
};

const Team = ({ scrollContainer }) => {
  const { isDark, changeTheme } = useContext(ThemeContext);

  const mentorRef = useRef(null);
  const teamRef = useRef(null);
  // const getToKnowRef = useRef(null);
  // const projectsRef = useRef(null);
  // const ourBlogRef = useRef(null);
  // const contactUsRef = useRef(null);
  // const joinUsRef = useRef(null);
  // const submitIdeaRef = useRef(null);
  // const partnersRef = useRef(null);

  const handleRef = (ref) => {
    if (ref) ref.current.scrollIntoView();
  };

  return (
    <main
      ref={scrollContainer}
      className=" scroll-smooth snap-y snap-mandatory  overflow-y-scroll  h-[calc(100vh_-_3.5rem)] bg-lightbg dark:bg-darkbg font-sans "
    >
      {/* className=" bg-lightbg dark:bg-darkbg font-sans" */}
      {/* 3.5rem is the height of the navbar */}
      {/* First welcome section */}
      <div className="snap-start h-[calc(100vh-3.5rem)]">
        <div className=" relative px-4 flex flex-col justify-evenly items-center h-[calc(100%_-_3.5rem)] md:flex-row md:justify-around">
          <article className="dark:text-lightbg md:space-y-5 z-10">
            <section className="">
              <m.h3
                initial="hidden"
                whileInView="visible"
                custom={0.5}
                viewport={{ once: true }}
                className=" text-4xl md:text-5xl font-bold"
              >
                The Team
              </m.h3>
              <p className="mt-5 md:max-w-md tracking-wide text-justify text-lg">
                Individuality counts but teamwork dynamites. At GDSC JSSSTU we
                celebrate teamwork and attribute the success of GDSC to the
                wonderful individuals who put untiring efforts for it.
              </p>
            </section>
          </article>
          <div
            className=" absolute sm:hidden cursor-pointer right-5 top-5 text-2xl dark:text-lightnav dark:hover:text-yellow-400 z-10"
            onClick={() => {
              console.log("clicked");
              changeTheme();
            }}
          >
            {isDark ? <RiSunFill /> : <RiMoonFill />}
          </div>
          <div className="h-50vh w-full sm:h-[calc(100vh-5)] md:w-5/12 md:h-4/5">
            <section className="h-full flex justify-center items-center overflow-hidden ">
              <TeamIcon alt="GDSC JSSSTU Team" />
            </section>
          </div>
        </div>

        <span onClick={() => handleRef(mentorRef)}>
          <img
            src={isDark ? Img_downarrow_dark : Img_downarrow_light}
            alt=""
            className="hidden sm:block object-contain h-11 w-full mx-auto cursor-pointer"
          />
        </span>
      </div>
      <MentorCard
        title="Our Mentor"
        name="Dr. Anilkumar K M"
        bio="absdcskdjcc adcjandc iuadc af ksdnc aidnca sdcn auhdc s  ci caudjc andkcn aksjdcn sdca dcn acn acd she iddc dc he is very dynamic and very supportive in nature not old fashioned very knowledgable person"
        currentRef={mentorRef}
        nextRef={teamRef}
        isDark={isDark}
        handleRef={handleRef}
        id={"focus"}
        nextId={"aboutjss"}
      />
      <TeamSection
        handleRef={handleRef}
        currentRef={teamRef}
        isDark={isDark}
        nextRef={null}
        isEnd={true}
      />
    </main>
  );
};

export default Team;
