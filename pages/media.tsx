import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function MediaPage() {
  return (
    <>
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
