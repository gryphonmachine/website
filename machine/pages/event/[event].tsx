import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Event({ matches, eventInfo }: any) {
  const router = useRouter();
  const { team } = router.query;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-16 pr-8 pl-8">
        <div className="bg-gray-800 md:w-[900px] rounded-lg py-12 px-12">
          <h1 className="text-3xl text-primary tetxt-left font-black">
            {eventInfo.name}
          </h1>
          <p className="text-gray-400 text-left">{eventInfo.address}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-800 px-10 py-5 mt-10 rounded-lg md:w-[900px] w-[350px]">
          <EventData data={matches} isTeam={team ? true : false} team={team} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { event }: any = context.params;

  const matches = await fetch(
    `${API_URL}/api/events/event?event=${event}`
  ).then((res) => res.json());

  const eventInfo = await fetch(
    `${API_URL}/api/events/info?event=${event}`
  ).then((res) => res.json());

  return {
    props: {
      matches,
      eventInfo,
    },
  };
};
