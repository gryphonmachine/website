import { Footer } from "@/components/Footer";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";

export default function TeamPage({ teamData }: any) {
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
            • Joined <span>{teamData.rookie_year}</span>
          </p>
          <div className="bg-gray-700 border-2 border-gray-500 rounded-lg py-4 px-6 mt-5">
            <p className="text-gray-400 font-bold text-sm italic">
              {" "}
              {teamData.name}
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg py-10 px-10 w-[900px] mt-8">
          What goes here?
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

  return {
    props: {
      teamData,
    },
  };
};
