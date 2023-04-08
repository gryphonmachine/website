import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col homeBg bg-[url('/season/6070-steamworks.jpg')] min-h-screen">
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <div className="flex-grow">
        <Navbar />

        <div className="flex flex-col md:items-center md:justify-center mt-[150px] md:mt-[250px] md:pl-0 md:pr-0 pl-10 pr-10 flex-grow">
          <h1 className="font-black text-white text-8xl md:text-9xl">
            WE ARE <span className="text-primary">6070</span>.
          </h1>
          <p className="text-xl font-bold uppercase mt-5 text-gray-400 pl-2">
            Gryphon Machine
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}