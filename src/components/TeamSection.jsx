import { motion as m } from "framer-motion";
import Img_downarrow_light from "../assets/home_page/downarrow_light.svg";
import Img_downarrow_dark from "../assets/home_page/downarrow_dark.svg";
import { useState } from "react";
import MentorCard from "./MentorCard";
import MemberCard from "./MemberCard";

import teamData from "../assets/team/teamData";

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

function TeamSection({ isDark, currentRef }) {
  const [page, setPage] = useState("2022");
  const team = teamData[page];
  //const staffData = team.staffData;
  const leadData = team.leadData;
  const execomData = team.execomData;
  const teamDatas = team.teamData;
  var teamNames = [];
  var teams = [];

  teamDatas.map((section) => {
    if (typeof section !== "string") {
      Object.keys(section).forEach(function (key) {
        typeof section[key] === "string"
          ? teamNames.push(section[key])
          : teams.push(section[key]);
      });
    }
  });

  return (
    <m.div
      ref={currentRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative snap-start h-auto overflow-hidden"
    >
      <div className="h-fit flex flex-col justify-around items-center">
        <div className="flex w-64 justify-around  items-center text-darknav m-3">
          <div className="dark:text-lightnav">Chapter:</div>
          <select
            class="block appearance-none w-6/12 p-2 cursor-pointer  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={page}
            onChange={(e) => {
              setPage(e.target.value);
            }}
            label="Chapter"
          >
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
          </select>
        </div>

        <MentorCard
          title="Our Lead"
          name={leadData.name}
          bio={leadData.bio}
          faceimage={leadData.image}
          gitlink={leadData.github}
          instalink={leadData.instagram}
          linkedlink={leadData.linkedin}
          twitterlink={leadData.twitter}
          isDark={isDark}
          isEnd={true}
        />

        <div className="text-darknav my-6 light:text-lightnav flex flex-col items-center justify-center w-full">
          <div className="font-bold text-4xl dark:text-lightnav">
            {execomData[0]}
          </div>
          <div className="flex flex-col items-center w-full lg:justify-around flex-wrap lg:flex-row">
            {execomData.map(
              (execom) =>
                typeof execom != "string" && (
                  <MemberCard
                    name={execom.name}
                    gitlink={execom.github}
                    instalink={execom.instagram}
                    linkedlink={execom.linkedin}
                    twitterlink={execom.twitter}
                    bio={execom.short}
                    faceimage={execom.image}
                    desc={execom.bio}
                  />
                )
            )}
          </div>
        </div>

        {teamNames.map((teamVal, i) => (
          <div className="text-darknav my-6 light:text-lightnav flex flex-col items-center justify-center w-full">
            <div className="font-bold text-4xl dark:text-lightnav">
              {teamVal}
            </div>

            {/* <div className="flex  w-full flex-col items-center justify-center"> */}
            {teams[i].map((subVal, idx) =>
              subVal.map((subTeam) => (
                <div className="flex my-6  w-full flex-col items-center justify-center">
                  {typeof subTeam === "string" ? (
                    <div className="font-bold text-center text-2xl dark:text-lightnav">
                      {subTeam}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center w-full lg:justify-around flex-wrap lg:flex-row">
                      {subTeam.map((subTeamData, idx) => (
                        <MemberCard
                          name={subTeamData.name}
                          bio={subTeamData.short}
                          desc={subTeamData.bio}
                          gitlink={subTeamData.github}
                          instalink={subTeamData.instagram}
                          linkedlink={subTeamData.linkedin}
                          twitterlink={subTeamData.twitter}
                          faceimage={subTeamData.image}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
            {/* </div> */}
          </div>
        ))}
      </div>
    </m.div>
  );
}

export default TeamSection;
