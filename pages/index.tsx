import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <Navbar />
      <div
        className={`px-7 mt-20 py-[50px] rounded-lg flex flex-col md:flex-row items-center justify-center mb-5`}
      >
        coming soooooooooon
      </div>
      <Footer />
    </>
  );
}
