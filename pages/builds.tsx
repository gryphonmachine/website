import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SeasonCard } from "@/components/SeasonCard";
import Head from "next/head";

export default function BuildsPage() {
  return (
    <>
      <Head>
        <title>Builds [6070: Gryphon Machine]</title>
      </Head>

      <Navbar />
      <Header
        title="Builds / Past Robots"
        subtitle="6070 has been hard at work since 2016. Take a look at what we've
        built:"
      />

      <div className="flex flex-col space-y-7 items-center justify-center px-7 ">
        <div className="chargedUp">
          <Link href="/season/2023" legacyBehavior>
            <a>
              <SeasonCard
                className="chargedUp bg-[url('/season/6070-charged-up.png')]"
                title="Charged Up [ICBM]"
                subtitle="2023"
              />
            </a>
          </Link>
        </div>
        <SeasonCard
          className="destinationDeepSpace bg-[url('https://media-s3-us-east-1.ceros.com/mcmaster-university/images/2023/02/16/c52a112d77d5eaf18a2f4dc43a89e10e/2019-10-640x480.jpeg')]"
          title="Destination: Deep Space"
          subtitle="2019"
        />
        <SeasonCard
          className="firstPowerUp bg-[url('/season/6070-power-up.png')]"
          title="Power Up [PINGU]"
          subtitle="2018"
        />
        <a href="https://www.youtube.com/watch?v=u3hDYpXdCBg" target="_blank">
          <SeasonCard
            className="firstSteamworks bg-[url('http://www.frc6070.ca/wp-content/uploads/2017/08/IMG_0759.jpg')]"
            title="Steamworks [PRATTBOT]"
            subtitle="2017"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=E-MpsOlM3U0" target="_blank">
          <SeasonCard
            className="firstStronghold bg-[url('http://www.frc6070.ca/wp-content/uploads/2017/08/IMG_5505.jpg')]"
            title="Stronghold [IRON CURTAIN]"
            subtitle="2016"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
