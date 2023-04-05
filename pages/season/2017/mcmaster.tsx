import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { useEffect, useState } from "react";

export default function Season2023() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/2017/mcmaster")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  return (
    <>
      <Header
        title="McMaster University Event"
        subtitle="2017 Season - FIRST Steamworks"
      />

      <Season>
        <Title>Qualification Matches</Title>
        <EventData data={data} isLoading={isLoading} />
      </Season>

      <Footer />
    </>
  );
}
