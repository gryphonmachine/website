import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { TeamList } from "@/lib/TeamList";
import { Tooltip } from "@nextui-org/react";

const TeamMember = (props: any) => {
  return (
    <Image
      className="rounded-full"
      src={props.src}
      alt={props.name}
      width={60}
      height={60}
      priority={true}
    />
  );
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 mt-16 mb-8">
        <p className="h text-center text-5xl font-bold text-primary">
          Mentors & Captains
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          We have a lot of dedicated members at 6070. Ranging from captains,{" "}
          <br />
          mentors, and general members. We'd like to recognize them.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg w-[800px] px-10">
          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Mentors & Head Captains
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.mentors.map((member) => (
              <Tooltip content={`${member.name} [Mentor]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.headCaptains.map((member) => (
              <Tooltip content={`${member.name} [Head Captain]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Captains
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.build.map((member) => (
              <Tooltip content={`${member.name} [Build Captain]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.programming.map((member) => (
              <Tooltip content={`${member.name} [Programming Captain]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.design.map((member) => (
              <Tooltip content={`${member.name} [Design Captain]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.outreach.map((member) => (
              <Tooltip content={`${member.name} [Outreach Captain]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-400 text-center text-sm">
              <span className="font-bold">PS:</span> Although our general members aren't listed here, we want to thank <br/>
              them for their hours spent learning and building @ 6070!
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
