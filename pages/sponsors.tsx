import { Navbar } from "@/components/navbar/Navbar";
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
        title="Sponsors"
        subtitle="We wouldn't be here without you. Thank you :)"
      />

      <div className="flex items-center justify-center">
        <div className="rounded-xl w-[1200px] px-10 ">
          <div className="hero container max-w-screen-lg mx-auto flex justify-center">
            <Image
              width="1000"
              height="6000"
              src="/sponsors.png"
              alt="Sponsors"
              priority={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
