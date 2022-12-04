import React, {useState, useEffect} from 'react';
import { motion as m } from "framer-motion";
import ProjectsCard from "../components/ProjectsCard";
import client from "../../lib/client";



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

// const projects = [
//     {
//         title: "Test project",
//         content: "This is a test project made for test purposes only",
//         img: "https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_1280.png",
//         links: [
//             {github: "https://github.com"},
//             {youtube: ""},
//             {extern:"https://github.com"}
//         ]
//     },
//     {
//         title: "Test project",
//         content: "This is a test project made for test purposes only",
//         img: "https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_1280.png",
//         links: [
//             {github: "https://github.com"},
//             {youtube: "https://github.com"},
//             {extern:"https://github.com"}
//         ]
//     },
//     {
//         title: "Test project",
//         content: "This is a test project made for test purposes only",
//         img: "https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_1280.png",
//         links: [
//             {github: "https://github.com"},
//             {youtube: "https://github.com"},
//             {extern:""}
//         ]
//     },
//     {
//       title: "Test project",
//       content: "This is a test project made for test purposes only",
//       img: "https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_1280.png",
//       links: [
//           {github: "https://github.com"},
//           {youtube: ""},
//           {extern:""}
//       ]
//   }
// ]

const Projects = ({scrollContainer}) => {

  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    client.fetch(
      `*[_type == "projects"] {
          title,
          content,
          img,
          links
      }`
    ).then((data) => setProjects(data)).catch((err) => console.log(err))
  }, [])


  return (
    <main
      ref={scrollContainer}
      className="scroll-smooth overflow-y-scroll h-[calc(100vh_-_3.5rem)]  bg-lightbg dark:bg-darkbg font-sans py-10"
    >
     <div className="snap-start h-[calc(40vh_-_3.5rem)]">
        <div className="px-4 flex justify-around items-center h-[calc(100%_-_5rem)] ">
          <article className="dark:text-lightbg space-y-5">
            <section className="">
            <m.h3
                initial="hidden"
                whileInView="visible"
                custom={0.6}
                viewport={{ once: false, amount: 0.1 }}
                variants={delayEntryVariants}
                className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
                    Projects
            </m.h3>
            <m.p
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: false, amount: 0.1 }}
                variants={delayEntryVariants}
                className="px-4 lg:px-0 max-w text-center text-lg md:text-xl  tracking-wide"
            >  
                    Learning goes hand in hand with building new and cool projects. Here we build new things all the time! Here are few of them:    
            </m.p>
            </section>
          </article>
        </div>
      </div>
      
      <div className='grid gap-x-5 lg:grid-cols-2 sm:grid-cols-1 h-screen place-items-center gap-y-10'>
          {/* {projects.map((project, i)=>(
              <ProjectsCard
                title={project.title}
                content={project.content}
                img={project.img}
                links={project.links}
              />
          ))} */}
          {projects.map((project) => (
            <>
            <ProjectsCard
              title = {project.title}
              content = {project.content}
              links = {project.links}
              img = {project.img.asset._ref}
            />
            </>
            
          ))}
      </div>

    </main>
  )
}

export default Projects