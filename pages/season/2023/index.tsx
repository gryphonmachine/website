import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

export default function Season2023() {
  return (
    <>
      <Header title="Charged Up presented by Haas" subtitle="2023 Season" />

      <Season title="Intercontintinental Ballistic Mini Me (ICBM)">
        <Title>Recap Video</Title>

        <div className="mb-[60px]">
          <VideoEmbed id="dQw4w9WgXcQ" />
        </div>

        <Title>Events Attended</Title>

        <Link href="/season/2023/western" legacyBehavior>
          <a>
            <Subtitle className="hover:text-primary">1. Western University Event</Subtitle>
          </a>
        </Link>
        <Link href="/season/2023/windsor" legacyBehavior>
          <a>
            <Subtitle className="hover:text-primary">2. Windsor Essex Great Lakes Event</Subtitle>
          </a>
        </Link>
      </Season>

      <Footer />
    </>
  );
}
