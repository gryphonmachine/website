import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { GetServerSideProps } from "next";
import { API_URL } from "@/lib/constants";

export default function Durham2019({ qualData }: any) {
  return (
    <>
      <Header
        title="Durham College Event"
        subtitle="2019 Season - Destination: Deep Space"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} />

        <Title className="mt-10">Playoff Matches</Title>
        <Subtitle className="mt-[-20px]">
          Unfortunately, we did not participate in playoffs.
        </Subtitle>
      </Season>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const qualData = await fetch(`${API_URL}/api/2019/durham`).then((res) =>
    res.json()
  );

  return { props: { qualData } };
};
