import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { TabButton } from "@/components/TabButton";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { convertDate } from "@/util/date";
import { Header } from "@/components/Header";
import Image from "next/image";

const Social = (props: any) => {
  return (
    <p className={`flex ${props.className} hover:text-primary`}>
      <props.icon className="text-2xl mr-1" /> {props.name}
    </p>
  );
};

export default function TeamPage({
  teamData,
  teamSocials,
  yearsParticipated,
}: any) {
  const [activeTab, setActiveTab] = useState(
    yearsParticipated[yearsParticipated.length - 1]
  );
  const [eventData, setEventData] = useState([]);
  const [matchData, setMatchData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const year = yearsParticipated.map((year: any) => {
    return year;
  });
  const router = useRouter();
  const { team } = router.query;

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const getEventData = useCallback(async () => {
    setLoading(true);
    const fetchEventData = await fetch(
      `${API_URL}/api/events?name=${team}&year=${activeTab}`
    ).then((res) => res.json());

    const eventMatchData: any = {};

    for (const event of fetchEventData) {
      const matchData = await fetch(
        `${API_URL}/api/eventMatches?team=${team}&year=${activeTab}&event=${event.event_code}`
      ).then((res) => res.json());
      eventMatchData[event.event_code] = matchData;
    }
    setMatchData(eventMatchData);
    setEventData(fetchEventData);
    setLoading(false);
  }, [team, activeTab]);

  useEffect(() => {
    getEventData();
  }, [getEventData]);

  return (
    <>
      <Header />
      <div className="flex flex-wrap items-center justify-center pl-8 pr-8 md:pl-0 md:pr-0">
        <div className="bg-gray-800 rounded-lg py-10 px-10 md:w-[900px] mt-16 relative">
          <div className="md:flex">
            {!error && (
              <Image
                className="rounded-lg mr-5 w-20 mb-5 md:mb-0"
                alt="a"
                height="50"
                width="50"
                priority={true}
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${teamData.website}/&size=64`}
                onError={() => {
                  setError(true);
                }}
              />
            )}
            {error && (
              <div className="flex items-center justify-center px-6 rounded-lg bg-gray-700 border-2 border-gray-500 mr-5">
                <span className="text-gray-400 font-bold text-md text-center">
                  FRC <br /> {teamData.team_number}{" "}
                </span>
              </div>
            )}
            <div>
              <p className="text-gray-400 text-sm font-medium">
                {teamData.school_name}
              </p>
              <a
                href={
                  teamData.website
                    ? teamData.website
                    : `https://frc-events.firstinspires.org/team/${teamData.team_number}`
                }
                target="_blank"
              >
                <h1 className="font-black text-4xl">
                  FRC {teamData.team_number}:{" "}
                  <span className="text-primary">{teamData.nickname}</span>
                </h1>
              </a>
              <p className="text-gray-400">
                <b>
                  {teamData.city}, {teamData.state_prov}, {teamData.country}
                </b>{" "}
                • Joined <span>{teamData.rookie_year}</span> •{" "}
                <a
                  href={`https://frc-events.firstinspires.org/team/${teamData.team_number}`}
                  target="_blank"
                >
                  <span className="text-white hover:text-primary">
                    FIRST Inspires
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-5 mt-3">
            {teamSocials.map((social: any, key: number) => {
              return (
                <div key={key} className="flex">
                  {social.type === "facebook-profile" && (
                    <a
                      href={`https://facebook.com/${social.foreign_key}`}
                      target="_blank"
                    >
                      <Social
                        icon={FaFacebook}
                        name="Facebook"
                        className="text-blue-500"
                      />
                    </a>
                  )}

                  {social.type === "github-profile" && (
                    <a
                      href={`https://github.com/${social.foreign_key}`}
                      target="_blank"
                    >
                      <Social
                        icon={FaGithub}
                        name="GitHub"
                        className="text-white"
                      />
                    </a>
                  )}

                  {social.type === "instagram-profile" && (
                    <a
                      href={`https://instagram.com/${social.foreign_key}`}
                      target="_blank"
                    >
                      <Social
                        icon={FaInstagram}
                        name="Instagram"
                        className="text-pink-400"
                      />
                    </a>
                  )}

                  {social.type === "twitter-profile" && (
                    <a
                      href={`https://twitter.com/${social.foreign_key}`}
                      target="_blank"
                    >
                      <Social
                        icon={FaTwitter}
                        name="Twitter"
                        className="text-sky-400"
                      />
                    </a>
                  )}

                  {social.type === "youtube-channel" && (
                    <a
                      href={`https://youtube.com/${social.foreign_key}`}
                      target="_blank"
                    >
                      <Social
                        icon={FaYoutube}
                        name="Youtube"
                        className="text-red-500"
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-gray-700 border-2 border-gray-500 rounded-lg py-4 px-6 mt-5">
            <p className="text-gray-400 font-bold text-sm italic">
              {" "}
              {teamData.name}
            </p>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg py-10 px-10 md:w-[900px] mt-8">
          <div className="flex gap-4">
            {/* tab buttons go here */}
            <div className="relative">
              <div
                className={`bg-gray-700 w-[300px] border-2 border-gray-500 text-white ${
                  isDropdownOpen ? "rounded-t-lg" : "rounded-lg"
                } px-3 py-2 flex items-center justify-between cursor-pointer`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{activeTab}</span>
                <svg
                  className={`h-5 w-5 transform ${
                    isDropdownOpen ? "-rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L11 5.414V14a1 1 0 1 1-2 0V5.414L6.707 7.707a1 1 0 0 1-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`grid grid-cols-3 gap-3 absolute right-0 left-0 bg-gray-700 text-white rounded-b-lg border-2 border-t-transparent border-gray-500 px-3 py-4 ${
                  isDropdownOpen ? "block" : "hidden"
                } z-20`}
              >
                {yearsParticipated.map((year: any, key: any) => (
                  <div
                    key={key}
                    className=" cursor-pointer bg-gray-600 hover:bg-gray-500 hover:cursor-pointer py-1 px-3 rounded-lg border border-gray-500"
                    onClick={() => {
                      handleTabClick(Number(year));
                      setIsDropdownOpen(false);
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {loading && <p className="mt-5 text-gray-400">Loading events...</p>}

          <div className="flex flex-col gap-5 mt-10">
            {year.includes(activeTab) &&
              eventData.map((event: any, key: number) => {
                return (
                  <div
                    key={key}
                    className="bg-gray-700 flex-wrap md:w-full w-[300px] rounded-lg px-8 py-5"
                  >
                    <div className="flex justify-between">
                      <div>
                        <a
                          href={`https://frc-events.firstinspires.org/${activeTab}/${event.first_event_code}`}
                          target="_blank"
                        >
                          <h1
                            className="font-black text-primary text-2xl hover:text-white"
                            key={key}
                          >
                            {event.name}
                          </h1>
                        </a>
                        <a href={event.gmaps_url} target="_blank">
                          <p className="text-gray-400 hover:text-white">
                            {event.location_name &&
                              `${event.location_name}, ${event.city}, ${event.country}`}
                          </p>
                        </a>
                        <span className="text-md text-gray-400">
                          {convertDate(event.start_date)} -{" "}
                          {convertDate(event.end_date)}, {activeTab}
                        </span>
                        <div className="md:hidden block mt-5">
                          {event.webcasts.length > 0 && (
                            <a
                              href={`https://twitch.tv/${event.webcasts[0].channel}`}
                              target="_blank"
                            >
                              <div className="flex bg-[#6441a5] text-white hover:bg-white hover:text-primary py-1 px-5 rounded-lg font-bold">
                                <FaTwitch className="text-md mt-1 mr-2" />{" "}
                                {event.webcasts[0].channel}
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="md:block hidden">
                        {event.webcasts.length > 0 && (
                          <a
                            href={`https://twitch.tv/${event.webcasts[0].channel}`}
                            target="_blank"
                          >
                            <div className="flex bg-[#6441a5] text-white hover:bg-gray-600 hover:text-primary py-1 px-5 rounded-lg font-bold">
                              <FaTwitch className="text-md mt-1 mr-2" />{" "}
                              {event.webcasts[0].channel}
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                    {matchData[event.event_code].length === 0 ? (
                      <p className="text-red-400 mt-5 font-bold py-3 px-5 rounded-lg border-2 border-red-500">
                        Looks like there&apos;s no data available for this
                        event! 😔{" "}
                      </p>
                    ) : (
                      <EventData
                        data={matchData[event.event_code]}
                        team={team}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { team }: any = context.params;

  const teamData = await fetch(`${API_URL}/api/team?name=${team}`).then((res) =>
    res.json()
  );
  const teamSocials = await fetch(`${API_URL}/api/socials?name=${team}`).then(
    (res) => res.json()
  );

  const yearsParticipated = await fetch(
    `${API_URL}/api/yearsParticipated?name=${team}`
  ).then((res) => res.json());
  return {
    props: {
      teamData,
      teamSocials,
      yearsParticipated,
    },
  };
};
