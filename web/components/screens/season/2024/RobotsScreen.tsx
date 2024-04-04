import { Title } from "@/components/Title";
import Image from "next/image";

interface Props {
  name: string;
  status: string;
  weight: string;
  height: string;
  width: string;
  length: string;
  highlights: string[];
}

const Details = (props: Props) => {
  return (
    <>
      <div className="flex">
      <h1 className="px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Name
        </h1>
        <span className="text-gray-300 font-medium">{props.name}</span>
      </div>
      <div className="flex">
        <h1
          className={`px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3`}
        >
          Status
        </h1>
        <span className={`text-gray-300 font-medium`}>{props.status}</span>
      </div>
      <div className="flex">
      <h1 className="flex justify-center px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Weight
        </h1>
        <span className="text-gray-300 font-medium">{props.weight} lbs</span>
      </div>
      <div className="flex">
        <h1 className="px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
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

export const RobotsScreen2024 = () => {
  return (
    <>
      <Title>Robot(s) Breakdown</Title>
      <div className="flex md:flex-row flex-col mb-5 mr-2 bg-[#191919] rounded-lg p-10 border-2 border-[#2A2A2A]">
        <Image
          src="/sam.jpg"
          className="md:mb-0 mb-10"
          alt="2024 SAM Bluey"
          width="350"
          height="300"
          priority={true}
        />
        <div className="flex-col space-y-4">
          <Details
            name="SAM Bluey"
            status="Active"
            weight="114"
            width="28"
            length="28"
            height="26"
            highlights={[
              "4 Wheel MK4I Swerve Drive",
              "Over The Bumper Intake",
              "2 Stage Climber",
            ]}
          />
        </div>
      </div>
    </>
  );
};
