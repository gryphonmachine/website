import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Season = (props: any) => {
  return (
    <div
      className={`${props.className} ${
        props.className === "chargedUp" && "hover:bg-gray-400"
      } hover:cursor-pointer border-solid border-2 border-primary rounded-lg md:w-[800px] w-[350px] px-10 py-24`}
    >
      <h1 className="text-4xl font-bold text-center mb-2">{props.title}</h1>
      <p className="text-center text-gray-300 font-bold">
        {props.subtitle} Season
      </p>
    </div>
  );
};

export default function BuildsPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 mt-16 mb-8">
        <p className="h text-center text-5xl font-bold text-primary">
          Builds / Past Robots
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          6070 has been hard at work since 2016. Take a look at what we&apos;ve
          built:
        </p>
      </div>
      <div className="flex flex-col space-y-7 items-center justify-center px-7 ">
        <Season
          className="chargedUp"
          title="Charged Up [ICBM]"
          subtitle="2023"
        />
        <Season
          className="destinationDeepSpace"
          title="Destination: Deep Space"
          subtitle="2019"
        />
        <Season
          className="firstPowerUp"
          title="Power Up [PINGU]"
          subtitle="2018"
        />
        <a href="https://www.youtube.com/watch?v=u3hDYpXdCBg" target="_blank">
          <Season
            className="firstSteamworks"
            title="Steamworks [PRATTBOT]"
            subtitle="2017"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=E-MpsOlM3U0" target="_blank">
          <Season
            className="firstStronghold"
            title="Stronghold [IRON CURTAIN]"
            subtitle="2016"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
