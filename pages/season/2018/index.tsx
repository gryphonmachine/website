import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeasonEvent } from "@/components/SeasonEvent";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import Link from "next/link";

export default function Season2018() {
  return (
    <>
      <Header title="FIRST Power Up" subtitle="2018 Season" />
      <Season title="Pingu">
        <Title>Events Attended</Title>

        <div className="flex flex-col">
          <Link href="/season/2018/durham" legacyBehavior>
            <a>
              <SeasonEvent
                title="Durham College District Event"
                date="March 2nd - 4th, 2018"
              />
            </a>
          </Link>
          <Link href="/season/2018/mcmaster" legacyBehavior>
            <a>
              <SeasonEvent
                title="McMaster University District Event"
                date="April 6th - 8th, 2018"
              />
            </a>
          </Link>
          <Link href="/season/2018/provincials" legacyBehavior>
            <a>
              <SeasonEvent
                title="FIRST Ontario Provincial Championship - Technology Division"
                date="April 11th - 14th, 2018"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
