import { TeamMember } from "@/components/TeamMember";
import { Team } from "@/lib/lists/Team";
import { Tooltip } from "@nextui-org/react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Title } from "@/components/Title";

const Captain = (props: any) => {
  return (
    <div className="flex bg-gray-800 hover:bg-gray-700 hover:cursor-pointer py-4 px-5 rounded-lg">
      <Image
        src={props.img}
        alt={props.name}
        height="350"
        width="350"
        priority={true}
        className="h-12 w-12 mr-5 rounded-full border border-primary"
      />
      <div>
        <h1 className="font-bold text-md">{props.name}</h1>
        <p className="text-gray-400">{props.role}</p>
      </div>
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className="bg-gray-800 group hover:bg-gray-700 hover:cursor-pointer shadow rounded-lg p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 group-hover:bg-slate-500 h-10 w-10"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 bg-slate-700 group-hover:bg-slate-500 rounded"></div>
          <div className="h-2 bg-slate-700 group-hover:bg-slate-500 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Head>
        <title>About [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="👥 About Us"
        subtitle="Discover the people, passion, and purpose behind Team 6070"
      />

      <div className="flex items-center justify-center space-x-4 mb-8 mt-[-15px]">
        <button
          className={`px-5 py-2 rounded-lg font-semibold ${
            activeTab === 1 ? "bg-gray-600 text-white" : "bg-gray-800"
          }`}
          onClick={() => handleTabClick(1)}
        >
          General
        </button>
        <button
          className={`px-5 py-2 rounded-lg font-semibold ${
            activeTab === 2 ? "bg-gray-600 text-white" : "bg-gray-800"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Captains
        </button>
      </div>

      <div className="flex items-center justify-center pr-5 pl-5">
        {activeTab === 1 && (
          <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">
            <Image
              className="rounded-lg mb-6"
              src="/team-pics/IMG_3793.jpg"
              height="1000"
              width="1000"
              alt="Windsor Team Photo"
              priority={true}
            />

            <h1 className="text-secondary md:text-4xl text-3xl font-bold text-left mb-5">
              <span className="text-gray-400">
                We are team <span className="text-primary">6070</span> 🦁 🦅
              </span>
            </h1>

            <div className="space-y-5">
              <div>
                <h2 className="font-bold text-gray-300 text-lg">About Us</h2>
                <p className="text-left text-gray-400">
                  Hi there, welcome to our site! We&apos;re Team 6070 (A.K.A
                  Gryphon Machine) from Glenforest Seconary School! We&apos;re a
                  team of passionate and dedicated students who love everything
                  about robotics.
                  <br />
                  <br />
                  Our team has been competing in the FIRST Robotics Competition
                  (FRC) for several years now, and we&apos;ve gained a
                  reputation for being a fierce competitor on the field. But
                  more than that, we&apos;re a tight-knit community of
                  individuals who share a common love for STEM and the spirit of
                  gracious professionalism.{" "}
                </p>
              </div>

              <div>
                <h2 className="font-bold text-gray-300 text-lg">Our Mission</h2>
                <p className="text-left text-gray-400">
                  To inspire, empower, and spread the message of FIRST within
                  ourselves and our community, while also raising awareness for
                  Robotics, Engineering, and the STEM fields.
                </p>
              </div>
            </div>

            <h2 className="font-bold text-gray-300 text-lg mt-5 mb-3">
              Have any questions?
            </h2>

            <div className="flex flex-wrap gap-5">
              <a href="https://discord.gg/JUunNhnf2v" target="_blank">
                <p className="text-sm text-violet-400 hover:text-white">
                  <FaDiscord className="inline mr-1" size={20} /> Discord
                </p>
              </a>
              <a href="https://www.instagram.com/frc6070" target="_blank">
                <p className="text-sm text-pink-400 hover:text-white">
                  <FaInstagram className="inline mr-1" size={20} /> Instagram
                </p>
              </a>
              <a href="https://twitter.com/frc6070" target="_blank">
                <p className="text-sm text-sky-400 hover:text-white">
                  <FaTwitter className="inline mr-1" size={20} /> Twitter
                </p>
              </a>
              <a href="mailto:gryphonmachine@gmail.com" target="_blank">
                <p className="text-sm text-primary hover:text-white">
                  <IoMdMail className="inline mr-1" size={20} /> Email
                </p>
              </a>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col space-y-10">
            <div className="border-2 border-gray-600 rounded-lg px-10 py-8">
              <Title>
                Captains <span className="font-bold text-gray-400">| </span>
                <span className="text-gray-400 font-medium">2023 - 2024</span>
              </Title>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
                <Captain
                  name="Utkarsh Dubey"
                  role="Head"
                  img="/people/utkarsh.png"
                />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </div>
            </div>
            <div className="border-2 border-gray-600 rounded-lg px-10 py-8">
              <Title>
                Captains <span className="font-bold text-gray-400">| </span>
                <span className="text-gray-400 font-medium">2022 - 2023</span>
              </Title>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
                {Team.map((member: any, key: number) => {
                  return (
                    <Captain
                      key={key}
                      name={member.name}
                      role={member.role}
                      img={member.img}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
