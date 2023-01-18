import { motion as m } from "framer-motion";
import Img_downarrow_light from "../assets/home_page/downarrow_light.svg";
import Img_downarrow_dark from "../assets/home_page/downarrow_dark.svg";

const cardVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const delayEntryVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: (i) => ({
    y: "0",
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const MentorCard = ({
  isEnd,
  isDark,
  name,
  bio,
  children,
  title,
  content,
  nextRef,
  currentRef,
  handleRef,
}) => {
  return (
    <m.div
      ref={currentRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative m-2 snap-start h-[calc(100vh_-_3.5rem)] overflow-hidden"
    >
      <div className="h-[85vh] dark:text-lightbg flex flex-col justify-around items-center ">
        <h1 className="text-center text-5xl font-bold">{title}</h1>
        <div className="dark:bg-darknav border border-gray-500 rounded-lg p-6 flex flex-col md:flex-row sm:max-w-5xl  justify-around items-center">
          <div className="w-48 md:w-96 aspect-square rounded-full bg-red-400 "></div>
          <div className="flex flex-col justify-between  max-w-lg text-center items-center w-full">
            <h3 className=" text-4xl font-bold ">{name}</h3>
            <p className="mt-4">{bio}</p>
          </div>
        </div>
      </div>
      {!isEnd && (
        <span className="w-full invisible  sm:visible">
          <img
            onClick={() => handleRef(nextRef)}
            src={isDark ? Img_downarrow_dark : Img_downarrow_light}
            className="object-contain h-11  mx-auto cursor-pointer"
            alt=""
            srcSet=""
          />
        </span>
      )}
    </m.div>
  );
};

export default MentorCard;
