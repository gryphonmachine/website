import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";

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
        <div className="flex flex-col items-center ">
          <Photo
            className="opacity-50 md:h-[200px] md:w-[500px]"
            img="/awards/28515219_1840517919346586_4816363233668407574_o.jpg"
          />

          <ViewAlbum link="https://photos.google.com/share/AF1QipNc55Eumz_bkhC5WZdGbG2cj0ANmVu_i6czDTechAdE6_o-3rbPU5lHNiFxlRaTgw?key=X3BJZDlpQ0tGZTJWZGZvZ3Y2eFdjeFBHRl9Rb2J3" />

          <Description
            title="Durham College District Event"
            subtitle="FIRST Power Up - 2018"
          />
        </div>

        <div className="flex flex-col items-center ">
          <Photo
            className="opacity-50 md:h-[200px] md:w-[500px]"
            img="/media/IMG_9920.jpg"
          />

          <ViewAlbum link="https://photos.app.goo.gl/ZY8h5piDbXfpuqKj1" />

          <Description
            title="Fall Fiesta"
            subtitle="Off-Season Event - 2017"
          />
        </div>

        <div className="flex flex-col items-center ">
          <Photo
            className="opacity-50 md:h-[200px] md:w-[500px]"
            img="/media/IMG_0725.jpg"
          />

          <ViewAlbum link="https://photos.google.com/share/AF1QipNGkloXktcrqpUPcdl-ett9c8zM8BRmdqL3ohDSTBale0pCd-lUCHfnfKMJi6BCvw?key=d3BzRlpDSGxaWG5BanJ0YWJSZ010TVVKXzZWRERn" />

          <Description
            title="Ontario Provincial Championships"
            subtitle="2017"
          />
        </div>

        <div className="flex flex-col items-center ">
          <Photo
            className="opacity-50 md:h-[200px] md:w-[500px]"
            img="/media/IMG_4975.jpg"
          />

          <ViewAlbum link="https://photos.google.com/share/AF1QipOs8_4S1JS0-PUbaGYpGuv9rQjlTG0eeYvNTN-a1SIVvs22ccWQmLRwM5apYisWcQ?key=M2lNVEdhWUcxTWN1LVNDRXMtbmM3U1NUaDdxcGhn" />

          <Description
            title="McMaster University District Event"
            subtitle="FIRST Steamworks - 2017"
          />
        </div>

        <div className="flex flex-col items-center ">
          <Photo
            className="opacity-50 md:h-[200px] md:w-[500px]"
            img="/media/IMG_4472.jpg"
          />

          <ViewAlbum link="https://photos.google.com/share/AF1QipNM1C9NNDlah40mJGT0vzwWhOWvmB3cEcLr8j56WygAG_PAesyi-I0uweG26KLWlA?key=Z01aelNVQnNSc1kwQWR4UEQ0M2tDNDFCc0cyNUp3" />

          <Description
            title="Western University District Event"
            subtitle="FIRST Steamworks - 2017"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
