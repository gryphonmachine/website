import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Zoom from "react-medium-image-zoom";
import { Events } from "@/lib/lists/Events";
import Head from "next/head";
import { Description } from "./media";
import { Photo } from "@/components/Photo";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Outreach ❤️s Events"
        subtitle="Check out some of the events that 6070 has hosted, ran, or participated in!"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
          {Events.map((event: any) => {
            return (
              <>
                <div className="mediaImage flex flex-col items-center group">
                  <Zoom>
                    <Photo
                      className="opacity-90 md:h-[200px] md:w-[500px] hover:opacity-100"
                      img={event.img}
                    />
                  </Zoom>
                  <Description title={event.title} subtitle={event.subtitle} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
