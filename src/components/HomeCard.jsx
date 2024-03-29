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
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative snap-start h-[calc(100vh_-_3.5rem)] overflow-hidden"
    >
      <FloatImg />

      <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
        <m.p
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          variants={delayEntryVariants}
          className="px-4 lg:px-0 max-w-lg text-center text-lg md:text-xl  tracking-wide"
        >
          {content}
        </m.p>
        <m.span
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ once: true }}
          variants={delayEntryVariants}
        >
          {children}
        </m.span>
      </article>
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

export default Card;
