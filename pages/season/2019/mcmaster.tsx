import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";

export default function McMaster2019({ qualData, playoffData }: any) {
  return (
    <>
      <Header
        title="McMaster University Event"
        subtitle="2019 Season - Destination: Deep Space"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} />

        <Title className="mt-10">Playoff Matches</Title>
        <EventData data={playoffData} />
      </Season>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const qualData = await fetch(`${API_URL}/api/2019/mcmaster`).then((res) =>
    res.json()
  );
  const playoffData = await fetch(
    `${API_URL}/api/2019/mcmaster?type=Playoff`
  ).then((res) => res.json());

  return { props: { qualData, playoffData } };
};
