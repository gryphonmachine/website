import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SeasonPhoto } from "@/components/season/SeasonPhoto";
import { Footer } from "@/components/Footer";
import Zoom from "react-medium-image-zoom";

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

        <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-8">
          <Zoom>
            <SeasonPhoto img="2017/IMG_0742-1.jpg" />
          </Zoom>
          <Zoom>
            <SeasonPhoto img="2017/IMG_0759.jpg" />
          </Zoom>
          <Zoom>
            <SeasonPhoto img="2017/Eddy-G.jpg" />
          </Zoom>
        </div>
      </Season>

      <Footer />
    </>
  );
}
