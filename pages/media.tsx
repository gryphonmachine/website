import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";
import { Media } from "@/lib/lists/Media";
import { useEffect, useState } from "react";

export const Description = (props: any) => {
  const styles = "text-center md:text-sm text-md mt-3";

  return (
    <Subtitle className={styles}>
      <span className="text-white font-bold">{props.title}</span>
      <br /> {props.subtitle ?? ""}
    </Subtitle>
  );
};

export default function MediaPage() {
  const [videos, setVideos] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Media [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="📸 Media"
        subtitle="Our competitions captured in stunning photos and videos."
      />

      <Title className="text-center">
        <span className="mr-2">🎥</span> Video Highlights
      </Title>

      <Subtitle className="text-center mt-[-20px] mb-5 text-s">
        check out our{" "}
        <a
          href="https://www.youtube.com/channel/UCPayYKB8-812GDZdHmfNk3g"
          className="text-primary hover:text-white"
          target="_blank"
        >
          youtube
        </a>{" "}
        channel :)
      </Subtitle>

      <div className="flex flex-col justify-center text-center mb-16">
        {isLoading ? (
          <p className="text-gray-400">Loading videos...</p>
        ) : (
          <div className="md:flex items-center justify-center">
            <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
              {...videos.slice(0, 9).map((video: any, i: number) => {
                return <VideoEmbed key={i} id={video.link.split("?v=")[1]} />;
              })}
            </div>
          </div>
        )}
      </div>

      <Title className="text-center">
        <span className="mr-2">📷</span> Photo Highlights
      </Title>
      <Subtitle className="text-center mt-[-20px] mb-[-10px] text-s">
        click the cover photos to view the full album!
      </Subtitle>

      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
          {Media.map((media: any) => {
            return (
              <>
                <a href={media.url} target="_blank">
                  <div className="mediaImage flex flex-col items-center group">
                    <Photo
                      className="opacity-90 md:h-[200px] md:w-[500px] hover:opacity-100"
                      img={media.img}
                    />

                    <Description
                      title={media.title}
                      subtitle={media.subtitle}
                    />
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
