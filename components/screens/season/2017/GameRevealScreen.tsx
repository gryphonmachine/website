import { Photo } from "@/components/Photo";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Zoom from "react-medium-image-zoom";

export const GameRevealScreen2017 = () => {
  return (
    <>
      <Title>Game Reveal + Media</Title>

      <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:gap-4 mt-[-15px] mb-[16px]">
        <VideoEmbed id="EMiNmJW7enI" className="mb-[-4px]" />
        <VideoEmbed id="u3hDYpXdCBg" />
      </div>

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 mb-[60px]">
        <Zoom>
          <Photo
            className="hover:opacity-75"
            img="/season/2017/IMG_0742-1.jpg"
          />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2017/IMG_0759.jpg" />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2017/Eddy-G.jpg" />
        </Zoom>
      </div>
    </>
  );
};
