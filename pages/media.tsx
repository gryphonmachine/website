import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar/Navbar";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";

export default function MediaPage() {
  return (
    <>
      <Head>
        <title>Media [6070: Gryphon Machine]</title>
      </Head>
      <Navbar />
      <Header
        title="Media"
        subtitle="Behind the Scenes & On the Field @ 6070"
      />
      <div className="mt-[-50px] p-10 flex flex-col justify-center md:grid md:grid-cols-3 gap-8">
        <VideoEmbed id="dQw4w9WgXcQ" />
        <VideoEmbed id="dQw4w9WgXcQ" />
        <VideoEmbed id="dQw4w9WgXcQ" />
        <VideoEmbed id="dQw4w9WgXcQ" />
        <VideoEmbed id="dQw4w9WgXcQ" />
        <VideoEmbed id="dQw4w9WgXcQ" />
      </div>
    </>
  );
}
