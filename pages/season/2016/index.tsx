import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Photo } from "@/components/Photo";
import Zoom from "react-medium-image-zoom";
import Link from "next/link";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/SeasonEvent";

export default function Season2016() {
  return (
    <>
      <Header title="FIRST Stronghold" subtitle="2016 Season" />
      <Season title="Iron Curtain">
        <h3 className="text-secondary text-2xl mt-2 font-semibold">
          <b>Recap Video + Media</b>
        </h3>

        <div className="mb-[60px]">
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
                title="Greater Toronto East Regionals District Event"
                date="March 9th - 12th, 2016"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
