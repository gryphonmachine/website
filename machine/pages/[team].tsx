import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { TabButton } from "@/components/TabButton";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TeamPage({ teamData, yearsParticipated }: any) {
  const [activeTab, setActiveTab] = useState(yearsParticipated[0]);
  const [eventData, setEventData] = useState([]);
  const [matchData, setMatchData] = useState<any>();
  const year = yearsParticipated.map((year: any) => {
    return year;
  });
  const router = useRouter();
  const { team } = router.query;

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const getEventData = async () => {
      const fetchEventData = await fetch(
        `${API_URL}/api/events?name=${team}&year=${activeTab}`
      ).then((res) => res.json());

      const eventMatchData: any = {}; // initialize an empty object to store match data for each event

      for (const event of fetchEventData) {
        const matchData = await fetch(
          `${API_URL}/api/eventMatches?team=${team}&year=${activeTab}&event=${event.event_code}`
        ).then((res) => res.json());
        eventMatchData[event.event_code] = matchData; // store the match data for each event in the eventMatchData object
      }
      setMatchData(eventMatchData); // set the match data for all events
      setEventData(fetchEventData);
    };

    getEventData();
  }, [team, activeTab]);

  console.log(matchData)

  return (
    <>
      <div className="flex flex-wrap items-center justify-center pl-8 pr-8 md:pl-0 md:pr-0">
        <div className="bg-gray-800 rounded-lg py-10 px-10 w-[900px] mt-32 relative">
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
          <div className="bg-gray-700 border-2 border-gray-500 rounded-lg py-4 px-6 mt-5">
            <p className="text-gray-400 font-bold text-sm italic">
              {" "}
              {teamData.name}
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg py-10 px-10 w-[900px] mt-8">
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

          <div className="flex flex-col gap-5 mt-10">
            {year.includes(activeTab) &&
              eventData.map((event: any, key: number) => {
                return (
                  <div
                    key={key}
                    className="bg-gray-700 flex-wrap md:w-full w-[250px] rounded-lg px-8 py-5"
                  >
                    <h1 className="font-black text-primary text-2xl" key={key}>
                      {event.name}
                    </h1>
                    <EventData data={matchData[event.event_code]} team={team} />{" "}
                    {/* use the event code as the key to access the match data */}
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
