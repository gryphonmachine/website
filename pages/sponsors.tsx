import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { Title } from "@/components/Title";
import { Subtitle } from "@/components/Subtitle";
import { useEffect, useState } from "react";

const Box = (props: any) => {
  return (
    <div className="border-2 border-gray-700 rounded-lg px-10 py-8">
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
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
            title="6070 x Sponsors"
            subtitle={
              <span>
                We would like to appreciate each and every one of our sponsors.{" "}
                <br /> Want to{" "}
                <a
                  onClick={() =>
                    window.open("/6070_SponsorshipPackage-2023.pdf")
                  }
                  download
                  className="text-white hover:text-primary font-bold underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sponsor us?
                </a>{" "}
                (2024 Season)
              </span>
            }
          />
          <div className="flex items-center justify-center">
            <div className="rounded-xl w-[1200px] mt-[-47px] px-10 flex justify-center">
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

              <h1 className="text-gray-300 md:text-3xl text-3xl font-bold text-center mb-10">
                Financial Breakdown
              </h1>

              <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-5 justify-center items-center">
                <Box
                  title="Events"
                  subtitle={
                    <span>
                      <li>Off-Season Events</li>
                      <li>Transportation</li>
                      <li>Registration & Event Fees</li>
                    </span>
                  }
                />
                <Box
                  title="Our Robot"
                  subtitle={
                    <span>
                      <li>Purchasing Robot Parts</li>
                      <li>Manufacturing</li>
                      <li>Spare Parts</li>
                    </span>
                  }
                />
                <Box
                  title="Team Expenses"
                  subtitle={
                    <span>
                      <li>Food</li>
                      <li>Merchandise</li>
                      <li>Promotional Material</li>
                    </span>
                  }
                />
                <Box
                  title="Tech"
                  subtitle={
                    <span>
                      <li>Laptops</li>
                      <li>Controllers</li>
                      <li>Third Party Software</li>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
