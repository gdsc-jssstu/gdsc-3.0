import React from 'react';
import { motion as m } from "framer-motion";
import Carousel from './Carousel';

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

function format(inputDate) {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
      var day = date.getDate().toString();
      var month = (date.getMonth() + 1).toString();
      // Months use 0 index.

      return  (day[1] ? day : '0' + day[0])+ '/' +
         (month[1] ? month : '0' + month[0]) + '/' + 
         date.getFullYear();
  }
}

const EventsCard = ({title, date, content, images}) => {
  return (
        <>
            <div className="w-full flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {images ? (<Carousel 
                  images = {images}/> ) : <></>} 
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <m.h6
                        initial="hidden"
                        whileInView="visible"
                        custom={0.6}
                        viewport={{ once: false, amount: 0.1 }}
                        variants={delayEntryVariants}
                        className="font-bold mb-4"
                    >
                            {title}
                    </m.h6>
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {format(date)}
                        
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {content}
                    </p>
                </div>
            </div>
        </>
  )
}

export default EventsCard