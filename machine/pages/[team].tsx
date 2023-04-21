import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { TabButton } from "@/components/TabButton";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { FaTwitch } from "react-icons/fa";
import { convertDate } from "@/util/date";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function TeamPage({ teamData, yearsParticipated }: any) {
  const [activeTab, setActiveTab] = useState(2023);
  const [eventData, setEventData] = useState([]);
  const [matchData, setMatchData] = useState<any>();
  const [loading, setLoading] = useState(false);
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
          <Image
            className="rounded-lg mr-5 w-20 mb-5 md:mb-0"
            alt={`${teamData.nickname} Logo`}
            height="50"
            width="50"
            priority={true}
            src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${teamData.website}/&size=64`}
          />
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

          <div className="bg-gray-700 border-2 border-gray-500 rounded-lg py-4 px-6 mt-5">
            <p className="text-gray-400 font-bold text-sm italic">
              {" "}
              {teamData.name}
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg py-10 px-10 md:w-[900px] mt-8">
          <div className="flex gap-5 flex-wrap">
            {yearsParticipated.map((year: any, key: any) => {
              return (
                <TabButton
                  active={activeTab}
                  key={key}
                  tab={year}
                  onClick={() => handleTabClick(year)}
                >
                  {year}
                </TabButton>
              );
            })}
          </div>

          {loading && <p className="mt-5 text-gray-400">Loading events...</p>}

          <div className="flex flex-col gap-5 mt-10">
            {year.includes(activeTab) &&
              eventData.map((event: any, key: number) => {
                return (
                  <div
                    key={key}
                    className="bg-gray-700 flex-wrap md:w-full w-[270px] rounded-lg px-8 py-5"
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
                            {event.location_name}, {event.city}, {event.country}{" "}
                          </p>
                        </a>
                        <span className="text-md text-gray-400">
                          {convertDate(event.start_date)} -{" "}
                          {convertDate(event.end_date)}{" "}
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
                    <EventData data={matchData[event.event_code]} team={team} />
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
  const yearsParticipated = await fetch(
    `${API_URL}/api/yearsParticipated?name=${team}`
  ).then((res) => res.json());
  return {
    props: {
      teamData,
      yearsParticipated,
    },
  };
};
