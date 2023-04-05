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
              className="destinationDeepSpace bg-[url('/season/6070-destination-deep-space.jpg')]"
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
              className="firstSteamworks bg-[url('/season/6070-steamworks.jpg')]"
              title="FIRST Steamworks"
              subtitle="2017"
            />
          </a>
        </Link>

        <Link href="/season/2016" legacyBehavior>
          <a>
            <SeasonCard
              className="firstStronghold bg-[url('/season/6070-stronghold.jpg')]"
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
