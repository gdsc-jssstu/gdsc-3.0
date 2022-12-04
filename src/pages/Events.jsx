import React, {useEffect, useState} from 'react';
import { motion as m } from "framer-motion";
import EventsCard from '../components/EventsCard';
import AOS from 'aos';
import "aos/dist/aos.css";
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

// const eventsgdsc = [
//     {
//         title: "Test event",
//         date: "31st February 2022",
//         content: "This is a test event for testing purposes only.",
//         images: []
//     },
//     {
//         title: "Test event",
//         date: "31st February 2022",
//         content: "This is a test event for testing purposes only.",
//         images: []
//     },
//     {
//         title: "Test event",
//         date: "31st February 2022",
//         content: "This is a test event for testing purposes only.",
//         images: []
//     },
//     {
//         title: "Test event",
//         date: "31st February 2022",
//         content: "This is a test event for testing purposes only.",
//         images: []
//     }
// ]

const Events = ({scrollContainer}) => {

    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "events"] {
                title,
                content,
                date,
                images
            }`
        ).then((data) => setEvents(data)).catch((err) => console.log(err));
    },[]);

    const sortedArr = events.sort(
        (a,b) => (Number(new Date(a.date)) - Number(new Date(b.date)) > 0 ? -1 : 1)
    )


  return (
        <main
          ref={scrollContainer}
          className="scroll-smooth overflow-y-scroll h-[calc(100vh_-_3.5rem)]  bg-lightbg dark:bg-darkbg font-sans lg:pt-10 pt-20"
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
                            Events
                    </m.h3>
                    <m.p
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: false, amount: 0.01 }}
                        variants={delayEntryVariants}
                        className="px-4 lg:px-0 max-w text-center text-lg md:text-xl  tracking-wide"
                    >  
                            Here at GDSC JSSSTU we put the fun in the function and the events. Attend Study Jams/ Hackathons/ Developer conferences to learn more about the technologies. Interested in being a speaker at one of our events? Just drop us your proposal.
                    </m.p>
                    </section>
                </article>
                </div>
            </div>
            
            <div className='grid grid-cols-1 h-20 justify-items-center gap-y-10'>
                {/* {eventsgdsc?.map((item, i)=>(
                    <EventsCard 
                        className="animation"
                        title = {item.title}
                        date = {item.date}
                        content = {item.content}
                        images = {item.images}
                        data-aos = "zoom-in"
                    />
                ))} */}
                {sortedArr.map((event) => (
                    <EventsCard
                        className="animation"
                        title = {event.title}
                        content = {event.content}
                        date = {event.date}
                        images = {event.images}
                        data-aos = "zoom-in"
                    />
                ))}
            </div>

        </main>
  )
}

export default Events;