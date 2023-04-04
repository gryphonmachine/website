import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function Season2023() {
  return (
    <>
      <Header title="Charged Up presented by Haas" subtitle="2023 Season" />

      <Season title="Intercontintinental Ballistic Mini Me (ICBM)">
        <h3 className="text-secondary text-2xl mt-2 font-semibold">
          <b>Recap Video</b>
        </h3>

        <div className="mb-10">
          <VideoEmbed id="dQw4w9WgXcQ" />
        </div>

        <h3 className="text-secondary text-2xl mt-2 font-semibold">
          <b>Backstory</b>
        </h3>
      </Season>

      <Footer />
    </>
  );
}
