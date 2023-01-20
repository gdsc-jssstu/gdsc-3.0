import { motion as m } from "framer-motion";
import { useState } from "react";
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";
const cardVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const MemberCard = ({
  name,
  bio,
  desc,
  faceimage,
  instalink,
  linkedlink,
  gitlink,
  twitterlink,
}) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(true);

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative m-2 snap-start overflow-hidden"
    >
      <div className="backdrop-filter backdrop-blur-lg bg-opacity-20 bg-lightnav text-darknav dark:text-lightnav border border-gray-500 w-72 h-96 rounded-lg p-6 flex flex-col justify-center md:max-w-96 items-center gap-y-4">
        <div className="w-40 min-h-[45%] aspect-square rounded-full ">
          <img className="rounded-full" src={faceimage} alt="avail" />
        </div>
        <div className="flex flex-col justify-center text-center items-center w-full">
          <h3 className=" text-lg font-bold ">{name}</h3>
          <div className="flex text-4xl justify-around m-1 items-center w-6/12 cursor-pointer">
            {gitlink && (
              <a href={gitlink} target="_blank" rel="noopener noreferrer">
                <RiGithubFill className="hover:scale-110" />
              </a>
            )}
            {linkedlink && (
              <a href={linkedlink} target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill className="hover:scale-110 text-blue-500" />
              </a>
            )}

            {instalink && (
              <a href={instalink} target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className="hover:scale-110 text-pink-500" />
              </a>
            )}
            {twitterlink && (
              <a href={twitterlink} target="_blank" rel="noopener noreferrer">
                <RiTwitterFill className="hover:scale-110 text-blue-500" />
              </a>
            )}
          </div>
          <div className="w-full">{bio}</div>
        </div>
        <button onClick={handleOpen}>Read More</button>
      </div>

      {!open && (
        <div className="absolute top-0 left-0 [transform-x:180deg]">
          <div className="bg-darknav text-darknav dark:text-lightnav border border-gray-500 w-72 h-96 rounded-lg p-6 flex flex-col justify-around md:max-w-96 items-center gap-y-4">
            <div>
              <p className="text-[0.9em] w-full">{desc}</p>
            </div>
            <div className="text-center">
              <button size="small" onClick={handleClose}>
                <strong>Close</strong>
              </button>
            </div>
          </div>
        </div>
      )}
    </m.div>
  );
};

export default MemberCard;
