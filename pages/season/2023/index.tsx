import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/SeasonEvent";

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

        <div className="flex flex-col">
          <Link href="/season/2023/western" legacyBehavior>
            <a>
              <SeasonEvent
                title="Western University District Event"
                date="March 17th - March 19th, 2023"
              />
            </a>
          </Link>
          <Link href="/season/2023/windsor" legacyBehavior>
            <a>
              <SeasonEvent
                title="Windsor Essex Great Lakes District Event"
                date="March 30th - April 1st, 2023"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
