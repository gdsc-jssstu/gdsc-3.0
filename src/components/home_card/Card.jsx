import { motion as m } from "framer-motion";
import Img_downarrow_light from "../../assets/home_page/downarrow_light.svg";
import Img_downarrow_dark from "../../assets/home_page/downarrow_dark.svg";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Card = ({
  isEnd,
  isDark,
  FloatImg,
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
      viewport={{ once: false, amount: 0.1 }}
      variants={cardVariants}
      className="relative snap-start h-[calc(100vh_-_3.5rem)]"
    >
      <span className="">
        <FloatImg />
      </span>

      <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
        <h3 className=" text-4xl md:text-5xl font-bold">{title}</h3>
        <p className=" max-w-lg text-center text-lg md:text-xl  tracking-wide">
          {content}
        </p>
        {children}
      </article>
      {!isEnd && (
        <span className="absolute bottom-11 w-full  ">
          {/* <Img_downarrow
            onClick={() => handleRef(nextRef)}
            className="object-contain h-11  mx-auto cursor-pointer"
          /> */}
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

export default Card;
