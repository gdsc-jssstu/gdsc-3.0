import { motion as m } from "framer-motion";
import { ReactComponent as Img_downarrow } from "../../assets/home_page/downarrow.svg";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Card = ({ FloatImg, children, title, content, currentId, nextId }) => {
  return (
    <m.div
      id={currentId}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={cardVariants}
      className=" relative snap-start h-[calc(100vh_-_3.5rem)]  "
    >
      <FloatImg />

      <article className="h-[calc(100vh_-_7rem)] dark:text-lightbg flex flex-col justify-center items-center gap-y-10">
        <h3 className=" text-5xl font-bold">{title}</h3>
        <p className=" max-w-lg text-center text-xl  tracking-wide">
          {content}
        </p>
        {children}
      </article>
      <a href="#aboutjss" className=" absolute bottom-11 w-full">
        <Img_downarrow className="object-contain h-11 w-full mx-auto" />
      </a>
    </m.div>
  );
};

export default Card;