import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export const AboutCard = (props: any) => {
  return (
    <div
      className={`${props.className} group hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[275px] px-10 py-24 relative`}
    >
      <div className="relative">
        <h1 className="text-4xl text-white font-bold text-center mb-2 uppercase">
          {props.title}{" "}
        </h1>
      </div>
      <Image
        className="backgroundImage opacity-50 group-hover:opacity-60 absolute inset-0 w-full h-full object-cover"
        src={props.bg}
        alt="Background Image"
        priority={true}
        fill
        quality={20}
      />
    </div>
  );
};
export const GeneralScreen = () => {
  return (
    <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 mb-10">
        <a href="https://github.com/gryphonmachine" target="_blank">
          <AboutCard title="Learn" bg="/team-pics/IMG_3793.jpg" />
        </a>
        <Link href="/events" legacyBehavior>
          <a>
            <AboutCard title="Share" bg="/events/IMG_6087.JPG" />
          </a>
        </Link>
        <Link href="/builds" legacyBehavior>
          <a>
            <AboutCard title="Compete" bg="/season/6070-charged-up.png" />
          </a>
        </Link>
      </div>

      <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
        <span className="text-gray-400">
          We are team <span className="text-primary">6070</span> 🦁 🦅
        </span>
      </h1>

      <div className="space-y-5">
        <div>
          <h2 className="font-bold text-gray-300 text-lg">About Us</h2>
          <p className="text-left text-gray-400">
            Hi there, welcome to our site! We&apos;re Team 6070 (A.K.A Gryphon
            Machine) from Glenforest Secondary School! We&apos;re a team of
            passionate and dedicated students who love everything about
            Robotics.
            <br />
            <br />
            Our team has been competing in the FIRST Robotics Competition (FRC)
            for several years now and we&apos;ve gained a reputation for being a
            fierce competitor on the field. But more than that, we&apos;re a
            tight-knit community of individuals who share a common love for STEM
            and the spirit of gracious professionalism.{" "}
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
  );
};
