import { useRef, useContext } from "react";
import Card from "../components/HomeCard";
import ThemeContext from "../contexts/ThemeContext";

// Side images
// for animating svg, change this to svgr, replace img tag with respective svgr component
import { ReactComponent as Img_rocket } from "../assets/home_page/rocket with stars.svg";
import Img_satellite from "../assets/home_page/satellite.svg";
import Img_downarrow_light from "../assets/home_page/downarrow_light.svg";
import Img_downarrow_dark from "../assets/home_page/downarrow_dark.svg";
import Img_saturn from "../assets/home_page/saturn.svg";
import Img_cloud from "../assets/home_page/cloud.svg";
import Img_sun from "../assets/home_page/sun.svg";
import Img_rocket_text from "../assets/home_page/rocket-ship-remove2.png";

// Logos
import logo_light from "../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../assets/common/DSC JSS Science and Technology University Dark Logo.png";

import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiYoutubeFill,
  RiTwitterFill,
} from "react-icons/ri";

const Home = ({ scrollContainer }) => {
  const { isDark } = useContext(ThemeContext);

  const ourFocusRef = useRef(null);
  const aboutJSSRef = useRef(null);
  const getToKnowRef = useRef(null);
  const projectsRef = useRef(null);
  const ourBlogRef = useRef(null);
  const contactUsRef = useRef(null);
  const joinUsRef = useRef(null);
  const submitIdeaRef = useRef(null);
  const partnersRef = useRef(null);

  const handleRef = (ref) => {
    if (ref) ref.current.scrollIntoView();
  };

  return (
    <main
      ref={scrollContainer}
      className="scroll-smooth snap-y snap-mandatory  overflow-y-scroll h-[calc(100vh_-_3.5rem)]  bg-lightbg dark:bg-darkbg font-sans"
    >
      {/* 3.5rem is the height of the navbar */}
      {/* First welcome section */}
      <div className="snap-start h-[calc(100vh_-_3.5rem)]">
        <div className="px-4 flex justify-around items-center h-[calc(100%_-_5rem)] ">
          <article className="dark:text-lightbg space-y-5">
            <section className="">
              <img
                src={isDark ? logo_dark : logo_light}
                alt=""
                srcSet=""
                className=" sm:max-w-md md:max-w-lg "
              />
              <p className="mt-5 max-w-sm md:max-w-md tracking-wide text-justify text-lg">
                At GDSC JSSSTU, our aim is to learn and teach. Developers,
                designers and managers come together under one roof to create a
                community which inspires thousands. Join Us!
              </p>
            </section>
            <section className=" space-x-4 my-2 font-semibold text-lg">
              <span className=" text-red-500">Connect.</span>
              <span className=" text-yellow-500">Learn.</span>
              <span className=" text-green-500">Grow.</span>
            </section>
          </article>
          <section className="hidden md:block h-full">
            {/* <Img_rocket /> */}
            <img src={Img_rocket_text} alt="" />
          </section>
        </div>

        <span onClick={() => handleRef(ourFocusRef)}>
          <img
            src={isDark ? Img_downarrow_dark : Img_downarrow_light}
            alt=""
            className="object-contain h-11 w-full mx-auto"
          />
        </span>
      </div>

      <Card
        title="Our Focus"
        currentRef={ourFocusRef}
        nextRef={aboutJSSRef}
        isDark={isDark}
        handleRef={handleRef}
        id={"focus"}
        nextId={"aboutjss"}
        content={
          "Our Focus We Believe that Together we can. We not only conduct events to impart learning but also various other activities and competetions!"
        }
        FloatImg={() => (
          <img
            src={Img_satellite}
            className="hidden md:block absolute top-0 left-0"
            alt=""
          />
        )}
      >
        <p className="text-lg tracking-wider font-medium">
          TEAM- Together Each Achieve More
        </p>
      </Card>

      <Card
        title="About JSSSTU"
        handleRef={handleRef}
        currentRef={aboutJSSRef}
        isDark={isDark}
        nextRef={getToKnowRef}
        content={
          "JSS Science and Technology University, popularly known as SJCE or JSSSTU, is a private university located in Mysore, Karnataka, India. SJCE was established in 1963. JSS S&T University is committed to deliver high quality educational opportunities for youth and transform not only its neighborhood but offer courses to equip aspiring youth to meet the global needs of industry in every sector."
        }
        FloatImg={() => (
          <img
            src={Img_saturn}
            className="absolute hidden md:block bottom-0 right-0"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
          Official Website
        </button>
      </Card>

      <Card
        title={"Get to know the team"}
        currentRef={getToKnowRef}
        nextRef={projectsRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "We've got a strong team filled with passionate developers, dexterous designers and competent organisers!"
        }
        FloatImg={() => (
          <img
            src={Img_satellite}
            className="hidden md:block absolute top-0 left-0"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          Meet The Team!
        </button>
      </Card>

      <Card
        title={"Projects"}
        currentRef={projectsRef}
        nextRef={ourBlogRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "Proper execution of Knowledge leads to successful projects. Here are a few projects built by our team."
        }
        FloatImg={() => (
          <img
            src={Img_cloud}
            className="hidden md:block absolute bottom-0 right-0"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          Projects
        </button>
      </Card>

      <Card
        title={"Our Blog"}
        currentRef={ourBlogRef}
        nextRef={contactUsRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "You learn by sharing your knowledge and we emphasize it! Our team disseminates their knowledge on Medium often."
        }
        FloatImg={() => (
          <img
            src={Img_sun}
            className="hidden md:block absolute top-10 right-10"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          Check It Out!
        </button>
      </Card>

      <Card
        title={"Contact Us"}
        currentRef={contactUsRef}
        nextRef={joinUsRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "Reach out to us on these platforms! We’re just a message away."
        }
        FloatImg={() => (
          <img
            src={Img_saturn}
            className="absolute  hidden md:block  bottom-0 right-0"
            alt=""
          />
        )}
      >
        {/* <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          placeholder for icons
        </button> */}
        <ul className="flex gap-x-4 text-4xl md:text-5xl">
          <li className="  hover:scale-110 text-pink-600">
            <RiInstagramLine />
          </li>
          <li className="  hover:scale-110 text-blue-500">
            <RiLinkedinBoxFill />
          </li>
          <li className=" hover:scale-110">
            <RiGithubFill />
          </li>
          <li className="  hover:scale-110 rounded-full overflow-hidden">
            <RiMediumFill />
          </li>
          <li className="  hover:scale-110 text-red-600">
            <RiYoutubeFill />
          </li>
          <li className="  hover:scale-110  text-blue-600">
            <RiTwitterFill />
          </li>
        </ul>
      </Card>

      <Card
        title={"Join us!"}
        currentRef={joinUsRef}
        nextRef={submitIdeaRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "Ready to hang out? Grab a seat in a voice channel. Designed so you can pop in and out of voice and video conversations throughout the day. Play Access t a global network of student leaders, games, have fun and enjoy geek time with us. professional community organizers, industry experts, and Googlers to gain mentorship and share knowledge."
        }
        FloatImg={() => (
          <img
            src={Img_satellite}
            className="hidden md:block absolute top-0 left-0"
            alt=""
          />
        )}
      >
        <div className=" flex flex-row  gap-y-4  gap-x-10 md:gap-x-20">
          <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
            Discord
          </button>
          <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
            Subscribe
          </button>
        </div>
      </Card>

      <Card
        title={"Submit an Idea"}
        currentRef={submitIdeaRef}
        nextRef={partnersRef}
        isDark={isDark}
        handleRef={handleRef}
        content={
          "Tried implementing your idea and got stuck? Don't worry. We got your back! Drop your idea here and we will help you it!"
        }
        FloatImg={() => (
          <img
            src={Img_sun}
            className="hidden md:block absolute top-10 right-10"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          Submit Ideas
        </button>
      </Card>

      <Card
        title={"Partners"}
        currentRef={partnersRef}
        nextRef={null}
        isDark={isDark}
        isEnd={true}
        handleRef={handleRef}
        content={
          "Partners help us reach our goals and grow our community! Thank You, for being one of them. If you are interested in being a Speaker at one of Our events or want to Sponsor us to get brand exposure and elevate your business identity within the community, then drop us the details."
        }
        FloatImg={() => (
          <img
            src={Img_cloud}
            className="hidden md:block absolute bottom-0 right-0"
            alt=""
          />
        )}
      >
        <button className=" bg-blue-500 rounded-lg px-6 py-2 text-lg text-lightbg">
          Projects
        </button>
      </Card>
    </main>
  );
};

export default Home;
