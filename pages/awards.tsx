import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Subtitle } from "@/components/Subtitle";
import { Navbar } from "@/components/navbar/Navbar";
import { Photo } from "@/components/Photo";
import { Tooltip } from "@nextui-org/react";
import Zoom from "react-medium-image-zoom";

const Award = (props: any) => {
  return (
    <h2 className="absolute bg-white py-1 px-5 rounded-lg font-bold text-sm text-black bottom-4 text-center left-1/2 -translate-x-1/2">
      {props.text}
    </h2>
  );
};

export default function AwardsPage() {
  const styles = "text-center md:text-sm text-md mt-2";

  return (
    <>
      <Header
        title="Awards"
        subtitle="Here are some awards we have won since 2016 ;)"
      />

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 pr-10 pl-10">
        <Zoom>
          <Photo img="/awards/IMG_0549.jpg" />
          <Subtitle className={styles}>
            <span className="text-white font-bold">
              McMaster University District Event
            </span>
            <br /> (2018, Safety Award)
          </Subtitle>
        </Zoom>

        <Zoom>
          <Photo img="/awards/28515219_1840517919346586_4816363233668407574_o.jpg" />
          <Subtitle className={styles}>
            <span className="text-white font-bold">
              Durham College District Event
            </span>
            <br /> (2018, Safety Award & District Engineering Inspiration Award)
          </Subtitle>
        </Zoom>

        <Zoom>
          <Photo img="/awards/IMG_0556.jpg" />
          <Subtitle className={styles}>
            <span className="text-white font-bold">
              McMaster University District Event
            </span>
            <br /> (2017, Safety Award & Team Spirit Award)
          </Subtitle>
        </Zoom>

        <Zoom>
          <Photo img="/awards/Western.jpg" />
          <Subtitle className={styles}>
            <span className="text-white font-bold">
              Western University District Event
            </span>
            <br /> (2017, Winning Alliance, Team Spirit Award, & Safety Star of
            The Day)
          </Subtitle>
        </Zoom>

        <Zoom>
          <Photo img="/awards/2016-Team-Photo.jpg" />
          <Subtitle className={styles}>
            <span className="text-white font-bold">
              Greater Toronto East Regionals
            </span>{" "}
            <br /> (2016, Rookie All-Star Award)
          </Subtitle>
        </Zoom>
      </div>

      <Footer />
    </>
  );
}
