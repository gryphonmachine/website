import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeasonEvent } from "@/components/SeasonEvent";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import Link from "next/link";

export default function Season2019() {
  return (
    <>
      <Header title="Destination: Deep Space" subtitle="2019 Season" />

      <Season title="Pingu">
        <Title>Events Attended</Title>

        <div className="flex flex-col">
          <Link href="/season/2019/durham" legacyBehavior>
            <a>
              <SeasonEvent
                title="Durham College District Event"
                date="March 1st - 3rd, 2019"
              />
            </a>
          </Link>
          <Link href="/season/2019/mcmaster" legacyBehavior>
            <a>
              <SeasonEvent
                title="McMaster University District Event 🥇"
                date="April 5th - 7th, 2019"
              />
            </a>
          </Link>
          <Link href="/season/2019/provincials" legacyBehavior>
            <a>
              <SeasonEvent
                title="FIRST Ontario Provincial Championship - Technology Division"
                date="April 10th - 13th, 2018"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
