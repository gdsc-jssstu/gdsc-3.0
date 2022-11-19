import Navbar from "../../components/navbar/Navbar";
import "./home.style.css";
import { useEffect, useState } from "react";

// Side images
import Img_rocket from "../../assets/home_page/rocket.svg";
import Img_downarrow from "../../assets/home_page/downarrow.svg";
import Img_satellite from "../../assets/home_page/satellite.svg";
import Img_saturn from "../../assets/home_page/saturn.svg";
import Img_cloud from "../../assets/home_page/cloud.svg";
import Img_sun from "../../assets/home_page/sun.svg";

// Logos
import logo_light from "../../assets/common/DSC JSS Science and Technology University Light Logo.png";
import logo_dark from "../../assets/common/DSC JSS Science and Technology University Dark Logo.png";

const Home = ({ isDark, setIsDark }) => {
  return (
    <div className="">
      <header className=" sticky top-0">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
      </header>

      {/* 3.5rem is the height of the navbar */}
      <div className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh_-_3.5rem)]  bg-lightbg dark:bg-darkbg font-sans">
        {/* First welcome section */}
        <div className="snap-start h-[calc(100vh_-_3.5rem)]">
          <div className="px-4 flex  justify-around items-center h-[calc(100%_-_5rem)] ">
            <article className="dark:text-lightbg space-y-5">
              <section className="">
                <img
                  src={isDark ? logo_dark : logo_light}
                  alt=""
                  srcset=""
                  className=" max-w-md md:max-w-lg "
                />
                <p className="mt-5 max-w-sm md:max-w-md tracking-wide text-justify text-lg">
                  At GDSC JSSSTU, our aim is to learn and teach. Developers,
                  designers and managers come together under one roof to create
                  a community which inspires thousands. Join Us!
                </p>
              </section>
              <section className=" space-x-4 my-2 font-semibold ">
                <span className=" text-red-500">Connect.</span>
                <span className=" text-yellow-500">Learn.</span>
                <span className=" text-green-500">Grow.</span>
              </section>
            </article>
            <section className="hidden md:block h-full">
              <img src={Img_rocket} alt="" className=" object-contain h-full" />
            </section>
          </div>

          <a href="#">
            <img
              src={Img_downarrow}
              className="object-contain h-11 w-full mx-auto"
              alt=""
            />
          </a>
        </div>

        {/* Our Focus */}
        <div
          id="focus"
          className="relative object-contain scroll-smooth snap-start h-[calc(100vh_-_3.5rem)]"
        >
          <img
            src={Img_satellite}
            className="hidden md:block absolute top-0 left-0"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
            <h3 className=" text-5xl font-bold">Our Focus</h3>
            <p className=" max-w-sm text-center text-xl  tracking-wide">
              Our Focus We Believe that Together we can. We not only conduct
              events to impart learning but also various other activities and
              competetions!
            </p>
            <p className="text-lg tracking-wider font-medium">
              TEAM- Together Each Achieve More
            </p>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto "
              alt=""
            />
          </a>
        </div>

        {/* About Jssstu */}
        <div className=" relative snap-start h-[calc(100vh_-_3.5rem)]  ">
          <img
            src={Img_saturn}
            className="absolute  hidden md:block  bottom-0 right-0"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-8">
            <h3 className=" text-5xl font-bold">About JSSSTU</h3>
            <p className=" max-w-lg text-center text-xl  tracking-wide">
              JSS Science and Technology University, popularly known as SJCE or
              JSSSTU, is a private university located in Mysore, Karnataka,
              India. SJCE was established in 1963. JSS S&T University is
              committed to deliver high quality educational opportunities for
              youth and transform not only its neighborhood but offer courses to
              equip aspiring youth to meet the global needs of industry in every
              sector.
            </p>
            <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
              Official Website
            </button>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto mt-5 "
              alt=""
            />
          </a>
        </div>

        {/* Know the team */}
        <div className=" relative snap-start h-[calc(100vh_-_3.5rem)]  ">
          <img
            src={Img_satellite}
            className="hidden md:block absolute top-0 left-0"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
            <h3 className="text-center text-5xl font-bold">
              Get to know the team
            </h3>
            <p className=" max-w-lg text-center text-xl  tracking-wide">
              We've got a strong team filled with passionate developers,
              dexterous designers and competent organisers!
            </p>
            <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
              Meet The Team!
            </button>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto "
              alt=""
            />
          </a>
        </div>

        {/* The Projects */}
        <div className=" relative snap-start h-[calc(100vh_-_3.5rem)]  ">
          <img
            src={Img_cloud}
            className="hidden md:block absolute bottom-0 right-0"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
            <h3 className="text-center text-5xl font-bold">Projects</h3>
            <p className=" max-w-lg text-center text-xl  tracking-wide">
              Proper execution of Knowledge leads to successful projects. Here
              are a few projects built by our team.
            </p>
            <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
              Meet The Team!
            </button>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto "
              alt=""
            />
          </a>
        </div>

        {/* Blog */}
        <div className=" relative snap-start h-[calc(100vh_-_3.5rem)]  ">
          <img
            src={Img_sun}
            className="hidden md:block absolute top-10 right-10"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
            <h3 className="text-center text-5xl font-bold">Our Blog</h3>
            <p className=" max-w-lg text-center text-xl  tracking-wide">
              You learn by sharing your knowledge and we emphasize it! Our team
              disseminates their knowledge on Medium often.
            </p>
            <button className=" bg-blue-500 rounded-lg p-2 text-lg text-lightbg">
              Check It Out!
            </button>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto "
              alt=""
            />
          </a>
        </div>

        <div className=" relative snap-start h-[calc(100vh_-_3.5rem)]  ">
          <img
            src={Img_saturn}
            className="absolute  hidden md:block  bottom-0 right-0"
            alt=""
          />
          <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg  flex flex-col justify-center items-center gap-y-8">
            <h3 className=" text-5xl font-bold">Contact Us</h3>
            <p className=" max-w-lg text-center text-xl  tracking-wide">
              Reach out to us on these platforms! We’re just a message away.
            </p>
          </article>
          <a href="#" className=" absolute bottom-11 w-full">
            <img
              src={Img_downarrow}
              className="object-contain h-11 mx-auto mt-5 "
              alt=""
            />
          </a>
        </div>

        <div className="snap-start h-[calc(100vh_-_3.5rem)]">hello</div>
      </div>
    </div>
  );
};

export default Home;
