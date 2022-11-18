import Navbar from "../../components/navbar/Navbar";
import Img_Rocket from "../../assets/home_page/rocket.svg";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* 3.5rem is the height of the navbar */}

      <div className=" bg-lightbg font-sans">
        {/* First welcome section */}
        <div className="snap-start h-[calc(100vh_-_3.5rem)]">
          <div className="px-4 flex justify-around items-center h-[calc(100%_-_5rem)] ">
            <article>
              {/* Replace h3 with img */}
              <section>
                <h3 className="font-semibold  text-5xl md:text-6xl">GDSC</h3>
                <p className="text-sm text-zinc-500">
                  JSS Science and Technology University, Mysore
                </p>
                <p className="mt-5 max-w-sm tracking-wider text-justify text-lg">
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
            <section className="h-full">
              <img src={Img_Rocket} alt="" className=" object-contain h-full" />
            </section>
          </div>
          <div className=" text-center text-5xl ">↓</div>
        </div>

        {/* Our Focus */}
        <div className="snap-start h-[calc(100vh_-_3.5rem)]">
          <article className="h-full  flex flex-col justify-center items-center gap-y-10">
            <h3 className=" text-5xl font-bold">Our Focus</h3>
            <p className=" max-w-sm text-center text-xl  tracking-wider">
              Our Focus We Believe that Together we can. We not only conduct
              events to impart learning but also various other activities and
              competetions!
            </p>
            <p className="text-lg tracking-wider font-medium">
              TEAM- Together Each Achieve More
            </p>
          </article>
        </div>

        <div className="snap-start h-[calc(100vh_-_3.5rem)]  ">
          <article className="h-full  flex flex-col justify-center items-center gap-y-4">
            <h3 className=" text-5xl font-bold">About JSSSTU</h3>
            <p className=" max-w-lg text-center text-xl  tracking-wider">
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
        </div>
        <div className="snap-start h-[calc(100vh_-_3.5rem)]">hello</div>
        <div className="snap-start h-[calc(100vh_-_3.5rem)]">hello</div>
      </div>
    </div>
  );
};

export default Home;
