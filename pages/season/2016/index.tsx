import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Photo } from "@/components/Photo";
import Zoom from "react-medium-image-zoom";
import Link from "next/link";
import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/SeasonEvent";

export default function Season2016() {
  return (
    <>
      <Header title="FIRST Stronghold" subtitle="2016 Season" />
      <Season title="Iron Curtain">
        <Title>Game Reveal + Media</Title>

        <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:gap-4 mt-[-15px] mb-[16px]">
          <VideoEmbed id="VqOKzoHJDjA" className="mb-[-4px]" />
          <VideoEmbed id="E-MpsOlM3U0" />
        </div>

        <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 mb-[60px]">
          <Zoom>
            <Photo
              className="hover:opacity-75"
              img="/season/2016/IMG_2983.jpg"
            />
          </Zoom>
          <Zoom>
            <Photo
              className="hover:opacity-75"
              img="/season/2016/IMG_3040-1.jpg"
            />
          </Zoom>
          <Zoom>
            <Photo
              className="hover:opacity-75"
              img="/season/2016/IMG_5505.jpg"
            />
          </Zoom>
        </div>

        <Title>Events Attended</Title>

        <div className="flex flex-col">
          <Link href="/season/2016/toronto" legacyBehavior>
            <a>
              <SeasonEvent
                title="Greater Toronto East Regional District Event"
                date="March 9th - 12th, 2016"
              />
            </a>
          </Link>
          <Link href="/season/2016/worlds" legacyBehavior>
            <a>
              <SeasonEvent
                title="FIRST Championship - Hopper Subdivision"
                date="April 27th - 30th, 2016"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
