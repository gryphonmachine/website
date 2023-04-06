import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function SponsorsPage() {
  return (
    <>
      <Head>
        <title>Sponsors [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="6070 x Sponsors"
        subtitle={
          <span>
            We would like to appreciate each and every one of our sponsors.{" "}
            <br /> Want to{" "}
            <span className="text-white hover:text-primary font-bold hover:cursor-not-allowed">
              sponsor us?
            </span>{" "}
            (2024 Season)
          </span>
        }
      />

      <div className="flex items-center justify-center">
        <div className="rounded-xl w-[1200px] px-10 flex justify-center">
          <Image
            width="1000"
            height="1000"
            src="/sponsors.png"
            alt="Sponsors"
            priority={true}
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="border-2 border-gray-700 rounded-lg md:w-[800px] px-10 py-8">
          <h1 className="text-secondary md:text-3xl text-3xl font-bold text-center mb-10">
            <span className="text-gray-300">Sponsor Details</span>
          </h1>

          <p className="text-gray-400 text-center">
            One of the many ways{" "}
            <span className="text-primary">Team 6070: Gryphon Machine</span> is
            able to inspire future engineers, entrepreneurs, and leaders is
            through our many Sponsors and Supporters. <br /> <br />
            We would not be where we are without their kind and generous
            support. Whether it&apos;s monetary, tangible, or intangible forms
            of support, it all massively helps us achieve our goal of inspiring
            as many young leaders as possible.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
