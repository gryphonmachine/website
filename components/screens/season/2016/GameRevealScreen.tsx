import { Photo } from "@/components/Photo";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Zoom from "react-medium-image-zoom";

export const GameRevealScreen2016 = () => {
  return (
    <>
      <Title>Game Reveal + Media</Title>
      <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:gap-4 mt-[-15px] mb-[16px]">
        <VideoEmbed id="VqOKzoHJDjA" className="mb-[-4px]" />
        <VideoEmbed id="E-MpsOlM3U0" />
      </div>
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 mb-[60px]">
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2016/IMG_2983.jpg" />
        </Zoom>
        <Zoom>
          <Photo
            className="hover:opacity-75"
            img="/season/2016/IMG_3040-1.jpg"
          />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2016/IMG_5505.jpg" />
        </Zoom>
      </div>
    </>
  );
};
