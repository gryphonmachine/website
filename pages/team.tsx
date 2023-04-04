import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { TeamList } from "@/lib/TeamList";
import { Tooltip } from "@nextui-org/react";
import { Header } from "@/components/Header";

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
      
      <Header
        title="Mentors & Captains"
        subtitle={
          <>
            We have a lot of dedicated members at 6070. Ranging from captains,{" "}
            <br />
            mentors, and general members. We&apos;d like to recognize them.
          </>
        }
      />

      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg w-[800px] px-10">
          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Mentors & Head Captains
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.mentors.map((member) => (
              <Tooltip key={member.name} content={`${member.name} [Mentor]`}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.headCaptains.map((member) => (
              <Tooltip
                key={member.name}
                content={`${member.name} [Head Captain]`}
              >
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
              <Tooltip
                key={member.name}
                content={`${member.name} [Build Captain]`}
              >
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.programming.map((member) => (
              <Tooltip
                key={member.name}
                content={`${member.name} [Programming Captain]`}
              >
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.design.map((member) => (
              <Tooltip
                key={member.name}
                content={`${member.name} [Design Captain]`}
              >
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
            {TeamList.outreach.map((member) => (
              <Tooltip
                key={member.name}
                content={`${member.name} [Outreach Captain]`}
              >
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-400 text-center text-sm">
              <span className="font-bold">PS:</span> Although our general
              members aren&apos;t listed here, we want to thank <br />
              them for their hours spent learning and building @ 6070!
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
