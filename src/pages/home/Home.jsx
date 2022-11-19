import "./home.style.css";
import { Link } from "react-router-dom";

// Side images
// for animating change this to svgr, replace img tag with respective svgr component
import { ReactComponent as Img_rocket } from "../../assets/home_page/rocket with stars.svg";
import Img_satellite from "../../assets/home_page/satellite.svg";
import { ReactComponent as Img_downarrow } from "../../assets/home_page/downarrow.svg";
import Img_saturn from "../../assets/home_page/saturn.svg";
import Img_cloud from "../../assets/home_page/cloud.svg";
import Img_sun from "../../assets/home_page/sun.svg";

// Logos
import logo_light from "../../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../../assets/common/DSC JSS Science and Technology University Dark Logo.png";
import Card from "../../components/home_card/Card";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Home = ({ isDark, scrollContainer }) => {
  const handleRef = (ref) => {
    ref.current.scrollIntoView();
  };

  const ourFocusRef = useRef(null);
  const aboutJSSRef = useRef(null);
  const getToKnowRef = useRef(null);
  const projectsRef = useRef(null);
  const ourBlogRef = useRef(null);
  const contactUsRef = useRef(null);

  return (
    <main
      ref={scrollContainer}
      className={`scroll-smooth snap-y snap-mandatory  overflow-y-scroll h-[calc(100vh_-_3.5rem)]  bg-lightbg dark:bg-darkbg font-sans`}
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
            <section className=" space-x-4 my-2 font-semibold ">
              <span className=" text-red-500">Connect.</span>
              <span className=" text-yellow-500">Learn.</span>
              <span className=" text-green-500">Grow.</span>
            </section>
          </article>
          <section className="hidden md:block h-full">
            <Img_rocket />
          </section>
        </div>

        <span onClick={() => handleRef(ourFocusRef)}>
          <Img_downarrow className="object-contain h-11 w-full mx-auto" />
        </span>
      </div>

      <Card
        title="Our Focus"
        currentRef={ourFocusRef}
        nextRef={aboutJSSRef}
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
        <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
          Meet The Team!
        </button>
      </Card>

      <Card
        title={"Projects"}
        currentRef={projectsRef}
        nextRef={ourBlogRef}
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
        <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
          Projects
        </button>
      </Card>

      <Card
        title={"Our Blog"}
        currentRef={ourBlogRef}
        nextRef={contactUsRef}
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
        <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
          Check It Out!
        </button>
      </Card>

      <Card
        title={"Contact Us"}
        currentRef={contactUsRef}
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
        <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
          icons
        </button>
      </Card>

      <div className="snap-start h-[calc(100vh_-_3.5rem)]">hello</div>
    </main>
  );
};

export default Home;
