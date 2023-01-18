import { motion as m } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const MemberCard = ({ name, bio }) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative m-2 snap-start overflow-hidden"
    >
      <div className="backdrop-filter backdrop-blur-lg bg-opacity-20 bg-lightnav text-lightnav   w-72 h-96 rounded-lg p-6 flex flex-col justify-center md:max-w-96 items-center gap-y-4">
        <div className="w-40 aspect-square rounded-full bg-red-400 "></div>
        <div className="flex flex-col justify-center text-center items-center w-full">
          <h3 className=" text-lg font-bold ">{name}</h3>
          <p className="w-full overflow-auto">{bio}</p>
        </div>
        <button>Read More</button>
      </div>
    </m.div>
  );
};

export default MemberCard;
