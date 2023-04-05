import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SeasonPhoto } from "@/components/season/SeasonPhoto";
import Zoom from "react-medium-image-zoom";
import Link from "next/link";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

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

        <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 mb-10">
          <Zoom>
            <SeasonPhoto img="2016/IMG_2983.jpg" />
          </Zoom>
          <Zoom>
            <SeasonPhoto img="2016/IMG_3040-1.jpg" />
          </Zoom>
          <Zoom>
            <SeasonPhoto img="2016/IMG_5505.jpg" />
          </Zoom>
        </div>

        <Title>Events Attended</Title>

        <Link href="/season/2016/toronto" legacyBehavior>
          <a>
            <Subtitle>1. Greater Toronto East Regionals</Subtitle>
          </a>
        </Link>
      </Season>

      <Footer />
    </>
  );
}
