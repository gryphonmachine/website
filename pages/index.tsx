import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <Navbar />

      <div className="flex items-center justify-center mt-14">
        <div className="bg-[#232936] rounded-lg md:w-[700px] w-[350px] px-10 py-8">
          <Image
            className="rounded-lg mb-6"
            src="/team-pics/IMG_3793.jpg"
            height="1000"
            width="1000"
            alt="Windsor Team Photo"
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
                (FRC) for several years now, and we&apos;ve gained a reputation
                for being a fierce competitor on the field. But more than that,
                we&apos;re a tight-knit community of individuals who share a
                common love for STEM and the spirit of gracious professionalism.{" "}
              </p>
            </div>

            <div>
              <h2 className="font-bold text-gray-300 text-lg">Our Mission</h2>
              <p className="text-left text-gray-400">
                To inspire, empower, and spread the message of FIRST within
                ourselves and our community, while also raising awareness for
                Robotics, Engineering, and the STEAM fields.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
