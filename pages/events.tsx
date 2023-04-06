import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MediaImage } from "@/components/MediaImage";
import { Events } from "@/lib/Events";
import Head from "next/head";

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

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
        {Events.map((event: any) => {
          return (
            <>
              <MediaImage
                title={event.title}
                subtitle={event.subtitle}
                img={event.img}
              />
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
