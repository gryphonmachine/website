import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MediaImage } from "@/components/MediaImage";
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
        <MediaImage
          title="Discovery Day Workshop with Glenforest STEM"
          subtitle="December 2022"
          img="/events/dec2022.jpg"
        />
        <MediaImage
          title="Nahani Way LEGO Robotics Mentorship Program with Glenforest STEM"
          subtitle="2017-2018 School Year"
          img="/events/Image-16.jpg"
        />
        <MediaImage
          title="FIRST LEGO League Team Mentorship - Team 20475"
          img="/events/Lego-768x432.jpg"
        />
        <MediaImage
          title="Polycultural Mentorship with Teams 1241, 771, 4939, and 4001"
          img="/events/Polycultural-Workshop-Week-1-PowerPoint.ppt.jpg"
        />
        <MediaImage
          title="Polycultural Day Camp"
          subtitle="August 2017"
          img="/events/Image-5-8.jpg"
        />
        <MediaImage
          title="Paint the Town Red Parade"
          subtitle="July 2017"
          img="/events/Image-6-6.jpg"
        />
        <MediaImage
          title="Canadian Youth STEM Conference"
          subtitle="May 2017"
          img="/events/Image-5-6.jpg"
        />
        <MediaImage
          title="Nahani Way LEGO Robotics Engineering Mentorship Grand Finale"
          subtitle="May 2017"
          img="/events/Image-5-5.jpg"
        />
        <MediaImage
          title="Minister Bains Innovation Week Visit"
          subtitle="May 2017"
          img="/events/Image-11-1.jpg"
        />
        <MediaImage
          title="Do you want to CAD a Snowman?"
          subtitle="December 2016"
          img="/events/Image-1-6.jpg"
        />
        <MediaImage
          title="Hour of Code Day"
          subtitle="December 2016"
          img="/events/Image-2-8.jpg"
        />
        <MediaImage
          title="Nahani Way P.S LEGO Robotics Engineering Leadership Mentorship"
          subtitle="November 2016 - May 2017"
          img="/events/Image-7.jpg"
        />
        <MediaImage
          title="SWATPOSIUM"
          subtitle="November 2016"
          img="/events/Image-1-3.jpg"
        />
      </div>

      <Footer />
    </>
  );
}
