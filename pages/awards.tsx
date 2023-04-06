import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MediaImage } from "@/components/MediaImage";
import Head from "next/head";

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Awards"
        subtitle="Here are some awards we have won since 2016 ;)"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
          <MediaImage
            img="/awards/IMG_0549.jpg"
            title="McMaster University District Event"
            subtitle="(2018, Safety Award)"
          />

          <MediaImage
            img="/awards/28515219_1840517919346586_4816363233668407574_o.jpg"
            title="Durham College District Event"
            subtitle="(2018, Safety Award & District Engineering Inspiration Award)"
          />

          <MediaImage
            img="/awards/IMG_0556.jpg"
            title="McMaster University District Event"
            subtitle="(2017, Safety Award & Team Spirit Award)"
          />

          <MediaImage
            img="/awards/Western.jpg"
            title="Western University District Event"
            subtitle="(2017, Winning Alliance, Team Spirit Award, & Safety Star of
            The Day)"
          />

          <MediaImage
            img="/awards/2016-Team-Photo.jpg"
            title="Greater Toronto East Regionals"
            subtitle="(2016, Rookie All-Star Award)"
          />
        </div>
      </div>
      
      <Footer />
    </>
  );
}
