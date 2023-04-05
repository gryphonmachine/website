import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Photo } from "@/components/Photo";
import { Footer } from "@/components/Footer";
import Zoom from "react-medium-image-zoom";
import { Subtitle } from "@/components/Subtitle";
import Link from "next/link";
import { Title } from "@/components/Title";

export default function Season2017() {
  return (
    <>
      <Header title="FIRST Steamworks" subtitle="2017 Season" />

      <Season title="Prattbot A.K.A Geary">
        <h3 className="text-secondary text-2xl mt-2 font-semibold">
          <b>Recap Video + Media</b>
        </h3>

        <div className="mb-10">
          <VideoEmbed id="u3hDYpXdCBg" />
        </div>

        <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 mb-[60px]">
          <Zoom>
            <Photo img="/season/2017/IMG_0742-1.jpg" />
          </Zoom>
          <Zoom>
            <Photo img="/season/2017/IMG_0759.jpg" />
          </Zoom>
          <Zoom>
            <Photo img="/season/2017/Eddy-G.jpg" />
          </Zoom>
        </div>

        <Title>Events Attended</Title>

        <Link href="/season/2017/western" legacyBehavior>
          <a>
            <Subtitle className="hover:text-primary">1. Western University Event 🥇</Subtitle>
          </a>
        </Link>
        <Link href="/season/2017/mcmaster" legacyBehavior>
          <a>
            <Subtitle className="hover:text-primary">2. McMaster University Event</Subtitle>
          </a>
        </Link>
      </Season>

      <Footer />
    </>
  );
}
