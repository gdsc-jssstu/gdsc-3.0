import React from 'react';
import GithubIcon from "../assets/common/github (1).svg";
import LinkIcon from "../assets/common/link-solid.svg";
import YoutubeIcon from "../assets/common/youtube.svg";
import imageUrlFor from '../utils/imageForUrl';
import { motion as m } from "framer-motion";

const delayEntryVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: (i) => ({
    y: "0",
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const ProjectsCard = ({title,content,links,img}) => {
  // var count = 0;
  // if(links[0].github !== "") count++;
  // if(links[1].youtube !== "") count++;
  // if(links[2].extern !== "") count++;
  return (
    <div className="max-w-sm rounded-lg shadow-lg dark:text-lightbg dark:bg-gray-800 pb-10">
      <m.img 
      initial="hidden"
      whileInView="visible"
      custom={1}
      viewport={{ once: false, amount: 0.1 }}
      variants={delayEntryVariants}
      className="w-full rounded-t-lg" 
      src={imageUrlFor(img).url()} 
      alt="GDSC">
      </m.img>
      <div className="px-6 py-4">
        <m.div 
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: false, amount: 0.1 }}
        variants={delayEntryVariants}
        className="font-bold text-xl mb-2 text-center">
          {title}
        </m.div>
        <m.p 
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: false, amount: 0.1 }}
        variants={delayEntryVariants}
        className="text-gray-500 text-base">
          {content}
        </m.p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-cols-3 place-items-center">
        {/* {links[0]!==""?<img src={GithubIcon} className="w-full h-7"></img>:null}
        {links[1]!==""?<img src={YoutubeIcon} className="w-full h-7"></img>:null}
        {links[2]!==""?<img src={LinkIcon} className="w-full h-7"></img>:null} */}
        {links.map((link) => {
          if(link.includes("github")){
            return(
                <a href={link} className="w-full h-7"><img src={GithubIcon} className="w-full h-7"></img></a>
              )
          }
          else if(link.includes("youtube")){
            return(
              <a href={link} className="w-full h-7"> <img src={YoutubeIcon} className="w-full h-7"></img></a>
            )
          }
          else if(link.includes("www")){
            return (
              <a href={link} className="w-full h-7"><img src={LinkIcon} className="w-full h-7"></img></a>
            )
          }
            
        })}
      </div>
  </div>
  );
};

export default ProjectsCard