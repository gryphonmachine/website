import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { useEffect, useState } from "react";

export default function Season2023() {
  const [qualData, setQualData] = useState<any>(null);
  const [playoffData, setPlayoffData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/2023/windsor?type=Qualification")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setQualData(data);
      });

    fetch("/api/2023/windsor?type=Playoff")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPlayoffData(data);
      });
  }, []);

  return (
    <>
      <Header
        title="Windsor Essex Great Lakes Event"
        subtitle="2023 Season - Charged Up presented by Haas"
      />

      <Season>
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} isLoading={isLoading} />

        <Title className="mt-10">Playoff Matches</Title>
        <EventData data={playoffData} isLoading={isLoading} />
      </Season>

      <Footer />
    </>
  );
}
