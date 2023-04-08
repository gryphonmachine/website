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
    fetch("/api/2019/durham")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  return (
    <>
      <Header
        title="Durham College Event"
        subtitle="2019 Season - Destination: Deep Space"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={data} isLoading={isLoading} />
      </Season>

      <Footer />
    </>
  );
}
