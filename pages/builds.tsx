import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SeasonCard } from "@/components/season/SeasonCard";
import Head from "next/head";

export default function BuildsPage() {
  return (
    <>
      <Head>
        <title>Builds [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Builds / Past Robots"
        subtitle="6070 has been hard at work since 2016. Take a look at what we've
        built:"
      />

      <div className="flex flex-col space-y-7 items-center justify-center px-7 ">
        <Link href="/season/2023" legacyBehavior>
          <a>
            <SeasonCard
              className="chargedUp bg-[url('/season/6070-charged-up.png')]"
              title="Charged Up presented by Haas"
              subtitle="2023"
            />
          </a>
        </Link>

        <Link href="/season/2019" legacyBehavior>
          <a>
            <SeasonCard
              className="destinationDeepSpace bg-[url('https://media-s3-us-east-1.ceros.com/mcmaster-university/images/2023/02/16/c52a112d77d5eaf18a2f4dc43a89e10e/2019-10-640x480.jpeg')]"
              title="Destination: Deep Space"
              subtitle="2019"
            />
          </a>
        </Link>

        <Link href="/season/2018" legacyBehavior>
          <a>
            <SeasonCard
              className="firstPowerUp bg-[url('/season/6070-power-up.png')]"
              title="FIRST Power Up"
              subtitle="2018"
            />
          </a>
        </Link>

        <Link href="/season/2017" legacyBehavior>
          <a>
            <SeasonCard
              className="firstSteamworks bg-[url('http://www.frc6070.ca/wp-content/uploads/2017/08/IMG_0759.jpg')]"
              title="FIRST Steamworks"
              subtitle="2017"
            />
          </a>
        </Link>

        <Link href="/season/2016" legacyBehavior>
          <a>
            <SeasonCard
              className="firstStronghold bg-[url('http://www.frc6070.ca/wp-content/uploads/2017/08/IMG_5505.jpg')]"
              title="FIRST Stronghold"
              subtitle="2016"
            />
          </a>
        </Link>

      </div>
      <Footer />
    </>
  );
}
