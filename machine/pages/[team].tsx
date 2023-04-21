import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function TeamPage({ teamData }: any) {
  return (
    <>
      <Head>
        <title>
          FRC {teamData.team_number}: {teamData.nickname}
        </title>
      </Head>
      
      <div className="flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg py-10 px-10 w-[900px] mt-32">
          <a
            href={`https://frc-events.firstinspires.org/team/${teamData.team_number}`}
            target="_blank"
          >
            <h1 className="font-black text-4xl">
              FRC {teamData.team_number}:{" "}
              <span className="text-primary">{teamData.nickname}</span>
            </h1>
          </a>
          <p className="text-gray-400">
            {teamData.city}, {teamData.country}
          </p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { team }: any = context.params;

  const teamData = await fetch(`${API_URL}/api/team?name=${team}`).then((res) =>
    res.json()
  );

  return {
    props: {
      teamData,
    },
  };
};
