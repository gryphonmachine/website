import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";
import { MediaList } from "@/lib/Media";

const ViewAlbum = (props: any) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="absolute mt-[75px] bg-black text-gray-200 border-2 border-primary p-3 rounded-lg m-2"
    >
      <button>View Album →</button>
    </a>
  );
};

const Description = (props: any) => {
  const styles = "text-center md:text-sm text-md mt-3";

  return (
    <Subtitle className={styles}>
      <span className="text-white font-bold">{props.title}</span>
      <br /> {props.subtitle ?? ""}
    </Subtitle>
  );
};

export default function MediaPage() {
  return (
    <>
      <Head>
        <title>Media [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Media"
        subtitle="Highlights of our competitions in photos & videos!"
      />

      <Title className="pl-10 mb-0">Video Highlights</Title>

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-5 pr-10 pl-10 mb-10">
        <VideoEmbed id="9G6N4v4JEwg" />
        <VideoEmbed id="BNbqMjZZsYc" />
        <VideoEmbed id="E2t4Ew94GXg" />
      </div>

      <Title className="pl-10">Photo/Album Highlights</Title>

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
        {MediaList.map((media: any) => {
          return (
            <>
              <div className="flex flex-col items-center ">
                <Photo
                  className="opacity-50 md:h-[200px] md:w-[500px]"
                  img={media.img}
                />

                <ViewAlbum link={media.url} />

                <Description title={media.title} subtitle={media.subtitle} />
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
