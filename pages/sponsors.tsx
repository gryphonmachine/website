import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SponsorsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Head>
            <title>Sponsors [6070: Gryphon Machine]</title>
          </Head>
          <Header
            title="💸 6070 x Sponsors"
            subtitle={
              <span>
                Celebrating our dedicated sponsors and supporters. <br /> Want
                to sponsor us? Check out our{" "}
                <a
                  onClick={() =>
                    window.open("/6070_SponsorshipPackage-2023.pdf")
                  }
                  download
                  className="text-primary text-white hover:text-primary font-bold cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="">Sponsorship Package</span>{" "}
                  <span className="text-gray-400">(2023-24).</span>
                </a>{" "}
              </span>
            }
          />
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase text-gray-400 mb-[-5px]">$2500+</p>
            <h1 className="text-[#B9F2FF] text-4xl font-black mb-5">
              Diamond Sponsors
            </h1>

            <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
              <Image
                src="/sponsors/glenforest.png"
                alt="test"
                height="100"
                width="150"
                priority={true}
              />
            </div>

            <p className="uppercase text-gray-400 mb-[-5px]">$1000-$2500</p>
            <h1 className="text-[#FFD700] text-4xl font-black mb-5">
              Gold Sponsors
            </h1>

            <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
              <Image
                src="/sponsors/quality-inn.png"
                alt="test"
                height="300"
                width="350"
                priority={true}
              />
              <Image
                src="/sponsors/bempro.png"
                alt="test"
                height="400"
                width="400"
                priority={true}
              />
            </div>

            <p className="uppercase text-gray-400 mb-[-5px]">Up to $1000</p>
            <h1 className="text-[#CD7F32] text-4xl font-black mb-5">
              Bronze Sponsors
            </h1>

            <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
              <Image
                src="/sponsors/gap-wireless.png"
                alt="test"
                height="300"
                width="300"
                priority={true}
              />
              <Image
                src="/sponsors/zafin.png"
                alt="test"
                height="300"
                width="300"
                priority={true}
              />
              <Image
                src="/sponsors/pdsb.png"
                alt="test"
                height="300"
                width="300"
                priority={true}
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <div className="border-2 border-gray-700 rounded-lg md:w-[800px] px-10 py-8">
              <h1 className="text-gray-300 md:text-3xl text-3xl font-bold text-center mb-10">
                Sponsor Details
              </h1>

              <p className="text-gray-400 text-center mb-10">
                One of the many ways{" "}
                <span className="text-primary">Team 6070: Gryphon Machine</span>{" "}
                is able to inspire future engineers, entrepreneurs, and leaders
                is through our many Sponsors and Supporters. <br /> <br />
                We would not be where we are without their kind and generous
                support. Whether it&apos;s monetary, tangible, or intangible
                forms of support, it all massively helps us achieve our goal of
                inspiring as many young leaders as possible.
              </p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
