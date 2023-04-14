import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Image from "next/image";

const Details = (props: any) => {
  return (
    <>
      <div className="flex">
        <h1 className="text-gray-300 bg-gray-600 hover:bg-gray-500 hover:cursor-pointer w-[85px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Name
        </h1>
        <span className="text-gray-300 font-medium">{props.name}</span>
      </div>
      <div className="flex">
        <h1
          className={`bg-gray-600 text-gray-300 hover:bg-gray-500 hover:cursor-pointer w-[85px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3`}
        >
          Status
        </h1>
        <span className={`text-gray-300 font-medium`}>{props.status}</span>
      </div>
      <div className="flex">
        <h1 className="bg-gray-600 text-gray-300 hover:bg-gray-500 hover:cursor-pointer w-[85px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Weight
        </h1>
        <span className="text-gray-300 font-medium">{props.weight} lbs</span>
      </div>
      <div className="flex">
        <h1 className="flex justify-center text-gray-300 items-center bg-gray-600 hover:bg-gray-500 hover:cursor-pointer md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Size
        </h1>
        <span className="text-gray-300 font-medium">
          {props.width}″ W x {props.length}″ L x {props.height}″ H
        </span>
      </div>
      <h1 className="font-black text-gray-300 text-xl">Robot Highlights</h1>
      <span className="text-sm text-gray-400">
        → {props.highlights[0]}
      </span>{" "}
      <br />
      <span className="text-sm text-gray-400">
        → {props.highlights[1]}
      </span>{" "}
      <br />
      <span className="text-sm text-gray-400">
        → {props.highlights[2]}
      </span>{" "}
    </>
  );
};
export default function Season2023() {
  return (
    <>
      <Header title="Charged Up presented by Haas" subtitle="2023 Season" />

      <Season title="Intercontinental Ballistic Mini Me">
        <Title>Game Reveal</Title>

        <div className="mb-[60px]">
          <VideoEmbed id="0zpflsYc4PA" />
        </div>

        <Title>Robot(s) Breakdown</Title>

        <div className="flex md:flex-row flex-col mb-5 bg-gray-700 border-2 border-gray-500 rounded-lg p-10">
          <Image
            src="/icbm.png"
            className="md:mb-0 mb-10"
            alt="2023 ICBM Bot"
            width="350"
            height="350"
            priority={true}
          />
          <div className="flex-col space-y-4">
            <Details
              name="ICBM"
              status="Inactive"
              weight="112"
              width="33"
              length="39"
              height="54"
              highlights={[
                "6 Wheel Arcade Drive",
                "1 Stage Telescoping Arm",
                "Revamped version of Mini Me",
              ]}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col mb-[60px] bg-gray-700 border-2 border-gray-500 rounded-lg p-10">
          <Image
            src="/mini-me.png"
            className="md:mb-0 mb-10 md:mr-[125px]"
            alt="2023 ICBM Bot"
            width="225"
            height="225"
            priority={true}
          />
          <div className="flex-col space-y-4">
            <Details
              name="Mini Me"
              status="Dismantled"
              weight="116"
              width="33"
              length="39"
              height="52"
              highlights={[
                "6 Wheel Tank Drive",
                "Chain System for Arm",
                "2 Robots in 1",
              ]}
            />
          </div>
        </div>

        <Title>Events Attended</Title>

        <div className="flex flex-col">
          <Link href="/season/2023/western" legacyBehavior>
            <a>
              <SeasonEvent
                title="Western University District Event"
                date="March 17th - March 19th, 2023"
              />
            </a>
          </Link>
          <Link href="/season/2023/windsor" legacyBehavior>
            <a>
              <SeasonEvent
                title="Windsor Essex Great Lakes District Event"
                date="March 30th - April 1st, 2023"
              />
            </a>
          </Link>
        </div>
      </Season>

      <Footer />
    </>
  );
}
