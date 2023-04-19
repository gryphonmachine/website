import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="uppercase text-gray-400 mb-[-5px]">$2500+</p>
      <h1 className="text-[#B9F2FF] text-4xl font-black mb-5">
      💎 Diamond Sponsors
      </h1>

      <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
        <a href="https://glenforest.peelschools.org/" target="_blank">
          <Image
            src="/sponsors/glenforest.png"
            alt="Glenforest Logo"
            height="100"
            width="150"
            priority={true}
          />
        </a>
      </div>

      <p className="uppercase text-gray-400 mb-[-5px]">$1000-$2500</p>
      <h1 className="text-[#FFD700] text-4xl font-black mb-5">🌟 Gold Sponsors</h1>

      <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
        <a
          href="https://www.choicehotels.com/en-ca/quality-inn"
          target="_blank"
        >
          <Image
            src="/sponsors/quality-inn.png"
            alt="Quality Inn Logo"
            height="300"
            width="350"
            priority={true}
          />
        </a>
        <a href="https://www.bempro.com/" target="_blank">
          <Image
            src="/sponsors/bempro.png"
            alt="Bempro Logo"
            height="400"
            width="400"
            priority={true}
          />
        </a>
      </div>

      <p className="uppercase text-gray-400 mb-[-5px]">Up to $1000</p>
      <h1 className="text-[#CD7F32] text-4xl font-black mb-5">
      🥉 Bronze Sponsors
      </h1>

      <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
        <a href="https://gapwireless.com/" target="_blank">
          <Image
            src="/sponsors/gap-wireless.png"
            alt="Gap Wireless Logo"
            height="300"
            width="300"
            priority={true}
          />
        </a>
        <a href="https://zafin.com/" target="_blank">
          <Image
            src="/sponsors/zafin.png"
            alt="Zafin Logo"
            height="300"
            width="300"
            priority={true}
          />
        </a>
        <a href="https://www.peelschools.org/" target="_blank">
          <Image
            src="/sponsors/pdsb.png"
            alt="Peel District School Board Logo"
            height="300"
            width="300"
            priority={true}
          />
        </a>
      </div>
    </div>
  );
};
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
            title="💸 Our Sponsors"
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

          <Sponsors />
          <Footer />
        </>
      )}
    </>
  );
}
