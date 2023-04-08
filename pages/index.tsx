import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import { TeamList } from "@/lib/TeamList";
import { TeamMember } from "@/components/TeamMember";
import { Tooltip } from "@nextui-org/react";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <div className="homeBg bg-[url('/season/6070-steamworks.jpg')] py-1 px-1">
      <Navbar />

      <div className=" flex flex-col md:items-center md:justify-center md:mt-[250px] mt-[150px] mb-[350px] pl-10">
        <h1 className="md:text-9xl text-8xl font-black">
          WE ARE <span className="text-primary">6070</span>.
        </h1>
        <p className="text-gray-400 text-xl font-bold uppercase mt-5">
          Gryphon Machine
        </p>
      </div>
      
      <Footer/>
      </div>
    </>
  );
}
